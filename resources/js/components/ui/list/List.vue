<script setup lang="ts">
import type { HTMLAttributes } from 'vue';
import { cn } from '@/lib/utils';
import { listVariants } from './index';
import type { ListVariants } from './index';

const props = defineProps<{
  border?: ListVariants['border'];
  class?: HTMLAttributes['class'];
  color?: ListVariants['color'];
  rounded?: ListVariants['rounded'];
}>();
</script>

<template>
  <ul
    data-slot="list"
    :class="cn(listVariants({ border, color, rounded }), props.class)"
  >
    <slot />
  </ul>
</template>
