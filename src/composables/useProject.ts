import { computed } from "vue";
import { projects } from "@/assets/data/projects";
import { useRoute } from "vue-router";

export function useProject() {
  const route = useRoute();
  const projectId = computed(() => Number(route.params.id));

  const project = computed(() =>
    projects.find((project) => project.id === projectId.value)
  );

  return project;
}
