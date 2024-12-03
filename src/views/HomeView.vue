<script setup lang="ts"></script>

<template>
  <div class="home">
    <header>
      <h1>Welcome to My Portfolio</h1>
      <p>A showcase of my work and projects.</p>
    </header>
    <el-button
      type="primary"
      class="cta-button"
      @click="$router.push('/projects')"
    >
      View My Projects
    </el-button>
  </div>
</template>
