<template>
  <div class="project-detail">
    <header>
      <h1>{{ project.title }}</h1>
    </header>
    <img :src="project.image" alt="Project image" class="project-image" />
    <p class="project-description">{{ project.description }}</p>
    <el-divider />
    <div class="project-info">
      <h3>Technologies Used:</h3>
      <ul>
        <li v-for="tech in project.technologies" :key="tech">{{ tech }}</li>
      </ul>
    </div>
    <el-button type="primary" @click="goToGithub">View on GitHub</el-button>
  </div>
</template>

<script setup lang="ts">
import { useProject } from "@/composables/useProject";

const project = useProject();

const goToGithub = () => {
  window.open("https://github.com/example/project-one", "_blank");
};
</script>
