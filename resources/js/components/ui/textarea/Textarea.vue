<script setup lang="ts">
import { useVModel } from '@vueuse/core';
import type { HTMLAttributes } from 'vue';
import { cn } from '@/lib/utils';
import type { TextareaVariants } from '.';
import { textareaVariants } from '.';

interface Props {
  autosize?: boolean;
  class?: HTMLAttributes['class'];
  defaultValue?: string;
  modelValue?: string;
  ring?: TextareaVariants['ring'];
  rows?: number | string;
  variant?: TextareaVariants['variant'];
}

const props = withDefaults(defineProps<Props>(), {
  rows: 3,
});

const emits = defineEmits<{
  (e: 'update:modelValue', payload: string): void;
}>();

const model = useVModel(props, 'modelValue', emits, {
  passive: true,
  defaultValue: props.defaultValue,
});
</script>

<template>
  <textarea
    v-model="model"
    data-slot="input"
    :class="cn(textareaVariants({ autosize, ring, variant }), props.class)"
    :rows="rows"
  />
</template>
