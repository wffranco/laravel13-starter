<script setup lang="ts">
import { Head } from '@inertiajs/vue3';
import AppContent from '@/components/AppContent.vue';
import AppShell from '@/components/AppShell.vue';
import AppSidebar from '@/components/AppSidebar.vue';
import AppSidebarHeader from '@/components/AppSidebarHeader.vue';
import type { LayoutOptions } from '@/types';

type Props = LayoutOptions;

withDefaults(defineProps<Props>(), {
  breadcrumbs: () => [],
});
</script>

<template>
  <AppShell variant="sidebar">
    <template v-if="title">
      <Head :title="title" />
      <h1 class="sr-only">{{ title }}</h1>
    </template>
    <AppSidebar />
    <AppContent variant="sidebar" class="overflow-x-hidden">
      <AppSidebarHeader :breadcrumbs="breadcrumbs" :actions="actions" />
      <slot />
    </AppContent>
  </AppShell>
</template>
