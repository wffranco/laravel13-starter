<script setup lang="ts">
import { cn } from '@/lib/utils';
import type { HeaderProps } from '@/types';
import SidebarTrigger from '../sidebar/SidebarTrigger.vue';
import AppHeaderMenu from './AppHeaderMenu.vue';
import { headerVariants } from '.';

interface Props extends HeaderProps {
  variant: 'header' | 'sidebar';
}

const props = defineProps<Props>();
</script>

<template>
  <header :class="cn(headerVariants({ position, variant }), props.class)">
    <AppHeaderMenu v-if="variant === 'header'" />
    <div
      class="mx-auto hidden w-full items-center justify-between border-b border-sidebar-border/70 px-4 md:max-w-7xl [&:has(nav,a,button)]:flex"
    >
      <div class="flex items-center gap-2">
        <SidebarTrigger v-if="variant === 'sidebar'" class="-ml-1" />
        <div
          breadcrumbs
          class="flex min-h-12 items-center justify-start gap-2 text-neutral-500"
        />
      </div>
      <div actions class="flex items-center gap-2" />
    </div>
  </header>
</template>
