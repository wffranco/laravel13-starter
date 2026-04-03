<script setup lang="ts">
import type { HTMLAttributes } from 'vue';
import { cn } from '@/lib/utils';

const props = defineProps<{
  class?: HTMLAttributes['class'];
}>();
</script>

<template>
  <main class="relative flex flex-1 flex-col" data-slot="sidebar-inset">
    <div
      :class="
        cn(
          'flex h-full w-full flex-1 flex-col bg-background',
          'transition-colors duration-400',
          'md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2',
          props.class,
        )
      "
    >
      <slot />
    </div>
  </main>
</template>
