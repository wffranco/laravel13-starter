<script setup lang="ts">
import type { HTMLAttributes } from 'vue';
import { cn } from '@/lib/utils';
import { listItemVariants } from '.';
import type { ListItemVariants } from '.';

const props = defineProps<{
  class?: HTMLAttributes['class'];
  color?: ListItemVariants['color'];
}>();
</script>

<template>
  <li
    data-slot="list-item"
    :class="cn(listItemVariants({ color }), props.class)"
  >
    <slot />
  </li>
</template>
