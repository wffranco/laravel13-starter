<script setup lang="ts">
import type { ActionItem } from '@/types';
import Button from '../button/Button.vue';
import Portal from '../portal/Portal.vue';

defineProps<{
  actions?: ActionItem[];
}>();
</script>

<template>
  <Portal v-if="actions?.length || $slots.default" to="header [actions]">
    <slot>
      <template v-for="(action, key) in actions">
        <component v-if="'vnode' in action" :key="key" :is="action.vnode" />
        <Button
          v-else
          :key="`${key}-${action.title}`"
          :href="action.href"
          :class="action.class"
          :icon="action.icon"
          :size="action.size || 'sm'"
          :variant="action.variant"
          :aria-label="action.title"
        >
          {{ action.title }}
        </Button>
      </template>
    </slot>
  </Portal>
</template>
