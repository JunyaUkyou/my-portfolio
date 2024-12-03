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

<script setup lang="ts">
import { ref } from "vue";
import logo from "@/assets/thumbnail.png";

// const aaa = "@/assets/logo.svg";

const projects = ref([
  {
    id: 1,
    title: "姿勢推定でドラゴンボールの技をだす",
    description:
      "姿勢推定AIの技術を仕様して、ポーズに応じた技のエフェクトを表示します",
    image: logo,
  },
  // 他のプロジェクト...
]);
</script>
