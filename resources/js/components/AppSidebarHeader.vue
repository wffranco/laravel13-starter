<script setup lang="ts">
import Breadcrumbs from '@/components/Breadcrumbs.vue';
import { SidebarTrigger } from '@/components/ui/sidebar';
import type { ActionItem, BreadcrumbItem } from '@/types';
import Button from './ui/button/Button.vue';

type Props = {
  actions?: ActionItem[];
  breadcrumbs?: BreadcrumbItem[];
};

withDefaults(defineProps<Props>(), {
  breadcrumbs: () => [],
});
</script>

<template>
  <header
    class="flex h-16 shrink-0 items-center justify-between gap-2 border-b border-sidebar-border/70 px-6 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 md:px-4"
  >
    <div class="flex items-center gap-2">
      <SidebarTrigger class="-ml-1" />
      <template v-if="breadcrumbs && breadcrumbs.length > 0">
        <Breadcrumbs :breadcrumbs="breadcrumbs" />
      </template>
    </div>
    <div v-if="actions" class="flex gap-2">
      <Button
        v-for="(action, key) in actions"
        :key="`${key}-${action.title}`"
        :href="action.href"
        :class="action.class"
        :icon="action.icon"
        :aria-label="action.title"
      >
        {{ action.title }}
      </Button>
    </div>
  </header>
</template>
