<script setup lang="ts">
import type { AppVariant } from '@/types';
import SidebarInset from '../sidebar/SidebarInset.vue';

interface Props {
  variant?: AppVariant;
}

withDefaults(defineProps<Props>(), {
  variant: 'sidebar',
});
</script>

<template>
  <SidebarInset v-if="variant === 'sidebar'">
    <slot />
  </SidebarInset>
  <main
    v-else
    class="mx-auto flex h-full w-full max-w-7xl flex-1 flex-col gap-4 rounded-xl"
  >
    <slot />
  </main>
</template>
