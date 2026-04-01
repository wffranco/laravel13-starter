<script setup lang="ts">
import type { ClassValue } from 'vue';
import { cn } from '@/lib/utils';
import type { ContentVariants, SectionVariants } from '.';
import { contentVariants, sectionVariants } from '.';

interface Props {
  class?: ClassValue;
  maxWidth?: ContentVariants['maxWidth'];
  size?: SectionVariants['size'];
  tag?: string;
}

const props = withDefaults(defineProps<Props>(), {
  tag: 'div',
});
</script>

<template>
  <component
    :is="tag"
    :class="cn(sectionVariants({ size }))"
    data-slot="container"
    v-bind="$attrs"
  >
    <div :class="cn(contentVariants({ maxWidth }), props.class)">
      <slot />
    </div>
  </component>
</template>
