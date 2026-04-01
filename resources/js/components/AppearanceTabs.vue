<script setup lang="ts">
import { Monitor, Moon, Sun } from 'lucide-vue-next';
import type { HTMLAttributes } from 'vue';
import { useAppearance } from '@/composables/useAppearance';
import { cn } from '@/lib/utils';

const props = defineProps<{
  class?: HTMLAttributes['class'];
  small?: boolean;
}>();

const { appearance, updateAppearance } = useAppearance();

const tabs = [
  { value: 'light', Icon: Sun, label: 'Light' },
  { value: 'dark', Icon: Moon, label: 'Dark' },
  { value: 'system', Icon: Monitor, label: 'System' },
] as const;
</script>

<template>
  <div
    :class="
      cn([
        'inline-flex gap-1 rounded-lg bg-neutral-100 p-1 dark:bg-neutral-800',
        props.class,
      ])
    "
  >
    <button
      v-for="{ value, Icon, label } in tabs"
      :key="value"
      @click="updateAppearance(value)"
      :class="[
        'flex items-center justify-center rounded-md px-3.5 py-1.5 transition-colors',
        { 'flex-1': small },
        appearance === value
          ? 'bg-white shadow-xs dark:bg-neutral-700 dark:text-neutral-100'
          : 'text-neutral-500 hover:bg-neutral-200/60 hover:text-black dark:text-neutral-400 dark:hover:bg-neutral-700/60',
      ]"
    >
      <component :is="Icon" :class="['size-4', { '-ml-1': !small }]" />
      <span v-if="!small" class="ml-1.5 text-sm">{{ label }}</span>
    </button>
  </div>
</template>
