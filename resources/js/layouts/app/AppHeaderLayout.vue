<script setup lang="ts">
import { Head } from '@inertiajs/vue3';
import AppContent from '@/components/AppContent.vue';
import AppHeader from '@/components/AppHeader.vue';
import AppShell from '@/components/AppShell.vue';
import type { LayoutOptions } from '@/types';

type Props = LayoutOptions;

withDefaults(defineProps<Props>(), {
  breadcrumbs: () => [],
});
</script>

<template>
  <AppShell variant="header">
    <template v-if="title">
      <Head :title="title" />
      <h1 class="sr-only">{{ title }}</h1>
    </template>
    <AppHeader :breadcrumbs="breadcrumbs" />
    <AppContent variant="header">
      <slot />
    </AppContent>
  </AppShell>
</template>
