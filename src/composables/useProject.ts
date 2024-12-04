import { computed } from "vue";
import { useRoute } from "vue-router";
import { projects } from "@/assets/data/projects";
import type { ComputedRef } from "vue";
import type { ProjectInterface } from "@/assets/data/projects";

export function useProject(): ComputedRef<ProjectInterface | undefined> {
  const route = useRoute();
  const projectId = computed(() => Number(route.params.id));

  const project = computed(() =>
    projects.find((project) => project.id === projectId.value)
  );

  return project;
}
