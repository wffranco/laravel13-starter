<script setup lang="ts">
import PlaceholderPattern from '@/components/PlaceholderPattern.vue';
import { dashboard } from '@/routes';
import type { Team } from '@/types';

defineOptions({
  layout: (props: { currentTeam?: Team | null }) => ({
    title: 'Dashboard',
    breadcrumbs: [
      {
        title: 'Dashboard',
        href: props.currentTeam ? dashboard(props.currentTeam.slug) : '/',
      },
    ],
  }),
});
</script>

<template>
  <div class="flex flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
    <div class="grid auto-rows-min gap-4 md:grid-cols-3">
      <div
        class="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border"
      >
        <PlaceholderPattern />
      </div>
      <div
        class="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border"
      >
        <PlaceholderPattern />
      </div>
      <div
        class="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border"
      >
        <PlaceholderPattern />
      </div>
    </div>
    <div
      class="relative min-h-screen flex-1 rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border"
    >
      <PlaceholderPattern />
    </div>
  </div>
</template>
