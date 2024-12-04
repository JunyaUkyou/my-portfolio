<template>
  <div class="projects">
    <header>
      <h1>My Projects</h1>
    </header>
    <el-row :gutter="20" class="project-list">
      <el-col :span="8" v-for="project in allProjects" :key="project.id">
        <el-card class="project-card">
          <img
            :src="project.thumbnail"
            alt="Project image"
            class="project-image"
          />
          <h3>{{ project.title }}</h3>
          <p>{{ project.description }}</p>
          <el-button
            type="primary"
            @click="$router.push(`/projects/${project.id}`)"
          >
            View Details
          </el-button>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { projects } from "@/assets/data/projects";

const allProjects = ref(projects);
</script>
