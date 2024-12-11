<script setup lang="ts">
interface Props {
  code: string;
  styleArray?: string[];
}

const props = withDefaults(defineProps<Props>(), {
  styleArray: () => [] as string[],
});

import { ref } from "vue";
const style = ref<Array<string>>(props.styleArray);
</script>

<template>
  <pre class="code-block" :style="style">
        <code>{{ props.code  }} </code>
    </pre>
</template>
