<template>
  <div class="projects">
    <header>
      <h1>My Projects</h1>
    </header>
    <el-row :gutter="20" class="project-list">
      <el-col :span="8" v-for="project in projects" :key="project.id">
        <el-card class="project-card">
          <img :src="project.image" alt="Project image" class="project-image" />
          <h3>{{ project.title }}</h3>
          <p>{{ project.description }}</p>
          <el-button
            type="text"
            @click="$router.push(`/projects/${project.id}`)"
          >
            View Details
          </el-button>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { ref } from "vue";

const projects = ref([
  {
    id: 1,
    title: "Project One",
    description: "This is a description of project one.",
    image: "/images/project1.png",
  },
  // 他のプロジェクト...
]);
</script>
