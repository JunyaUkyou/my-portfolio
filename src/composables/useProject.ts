import { ref } from "vue";
import { projects } from "@/assets/data/projects";
import { useRoute } from "vue-router";

export function useProject() {
  const route = useRoute();
  const projectId = Number(route.params.id);

  const project = ref(projects.filter((project) => project.id === projectId))
    .value[0];

  return project;
}
