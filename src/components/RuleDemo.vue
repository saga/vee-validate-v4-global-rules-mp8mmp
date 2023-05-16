<template>
  <component :is="component" />
</template>

<script setup lang="ts">
import { defineAsyncComponent, computed } from 'vue';

const props = defineProps({
  rule: String,
});

const component = computed(() => {
  return defineAsyncComponent(() => import(`./rules/${props.rule}.vue`));
});
</script>
