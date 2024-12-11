<script setup lang="ts">
interface Props {
  url: string;
  name: string;
}

import { ref } from "vue";
import { Edit } from "@element-plus/icons-vue";
import { ALLOWED_URLS } from "@/assets/data/constants";

const props = defineProps<Props>();
const url = ref(props.url);
const name = ref(props.name);

const goToUrl = () => {
  const targetUrl = url.value.trim();
  if (ALLOWED_URLS.includes(targetUrl)) {
    window.location.href = targetUrl;
  } else {
    console.warn("GitHub URL is not available for this project.");
  }
};
</script>

<template>
  <el-link :icon="Edit" @click="goToUrl" rel="noopener noreferrer">{{
    name
  }}</el-link>
</template>
