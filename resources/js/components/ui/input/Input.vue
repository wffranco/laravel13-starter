<script setup lang="ts">
import { useVModel } from '@vueuse/core';
import type { ClassValue } from 'vue';
import { cn } from '@/lib/utils';
import type { InputVariants } from '.';
import { inputVariants } from '.';

export interface Props {
  defaultValue?: string | number;
  modelValue?: string | number;
  class?: ClassValue;
  name?: string;
  type?: InputVariants['type'];
  variant?: InputVariants['variant'];
}

const props = defineProps<Props>();

const emit = defineEmits<{
  (e: 'update:modelValue', payload?: string | number): void;
}>();

const modelValue = useVModel(props, 'modelValue', emit, {
  passive: true,
  defaultValue: props.defaultValue,
});
</script>

<template>
  <input
    v-model="modelValue"
    data-slot="input"
    :class="cn(inputVariants({ type, variant }), props.class)"
    :name="name"
    :type="type || 'text'"
  />
</template>
