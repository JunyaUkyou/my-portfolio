<template>
  <div class="project-detail">
    <header>
      <h1>{{ project?.title }}</h1>
    </header>
    <!-- メインプロジェクト画像 -->
    <img :src="project?.thumbnail" alt="Project image" class="project-image" />
    <p class="project-description">{{ project?.description }}</p>

    <Link :url="project!.githubUrl" name="GITHUBレポジトリはこちら" />

    <el-divider />

    <!-- 技術情報 -->
    <div class="project-info">
      <h2>Technologies Used:</h2>
      <ul>
        <li v-for="tech in project?.technologies" :key="tech">{{ tech }}</li>
      </ul>
    </div>
    <el-divider />
    <!-- プロジェクト概要 -->
    <div class="project-overview">
      <h2>Project Overview</h2>
      <ol>
        <li
          v-for="(description, index) in project?.overview.descriptionList"
          :key="index"
        >
          <strong>{{ description.title }}</strong>
          <p>{{ description.details }}</p>
        </li>
      </ol>
    </div>
    <el-divider />

    <div class="directory-structure">
      <h2>Directory Structure</h2>
      <CodeBlock
        :code="project!.directoryStructure"
        :style="['max-height:600px']"
      />
    </div>
    <el-divider />

    <!-- 各機能紹介 -->
    <div class="features">
      <h2>Features</h2>
      <div
        class="feature"
        v-for="(feature, index) in project?.features"
        :key="index"
      >
        <h3>{{ feature.title }}</h3>
        <p>{{ feature.description }}</p>
        <img :src="feature.image" :alt="feature.title" class="feature-image" />
      </div>
    </div>

    <el-divider />
    <!-- GitHub ボタン -->
    <!-- <el-button type="primary" @click="goToGithub">View on GitHub</el-button> -->
  </div>
</template>

<script setup lang="ts">
import { useProject } from "@/composables/useProject";
import CodeBlock from "@/components/CodeBlock.vue";
import Link from "@/components/Link.vue";

const project = useProject();

const goToGithub = () => {
  if (project?.value?.githubUrl) {
    window.open(project.value.githubUrl, "_blank");
  } else {
    console.warn("GitHub URL is not available for this project.");
  }
};
</script>
