<script setup lang="ts">
import { onMounted, ref } from 'vue';

defineProps<{
  to: string;
}>();

const mounted = ref(false);

onMounted(() => (mounted.value = true));
</script>

<template>
  <Teleport v-if="mounted" :to="to">
    <slot />
  </Teleport>
</template>
