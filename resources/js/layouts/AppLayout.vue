<script setup lang="ts">
import AppLayout from '@/layouts/app/AppHeaderLayout.vue';
import type { LayoutOptions } from '@/types/navigation';

type Props = LayoutOptions;

defineProps<Props>();
</script>

<template>
  <AppLayout :actions="actions" :breadcrumbs="breadcrumbs" v-bind="{ title }">
    <slot />
  </AppLayout>
</template>
