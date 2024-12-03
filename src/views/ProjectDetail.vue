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

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const project = ref({});

onMounted(() => {
  const projectId = route.params.id;
  // プロジェクトデータを取得（例: ローカルデータまたは API から）
  // ここでは仮のデータを使用
  const allProjects = [
    {
      id: 1,
      title: "Project One",
      description: "Detailed description of project one.",
      image: "/images/project1.png",
    },
    // 他のプロジェクト...
  ];
  project.value = allProjects.find((p) => p.id == projectId);
});
</script>
