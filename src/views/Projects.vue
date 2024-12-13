<template>
  <div class="projects">
    <header>
      <h1>My Projects</h1>
    </header>
    <div class="project-list">
      <div
        v-for="project in allProjects"
        :key="project.id"
        class="project-card"
      >
        <div class="card-image">
          <img
            :src="project.thumbnail"
            alt="Project image"
            class="project-image"
          />
        </div>
        <h3>{{ project.title }}</h3>
        <p>{{ project.description }}</p>
        <el-button
          type="primary"
          @click="$router.push(`/projects/${project.id}`)"
        >
          View Details
        </el-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { projects } from "@/assets/data/projects";

const allProjects = ref(projects);
</script>
