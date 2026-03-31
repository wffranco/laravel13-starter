<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core';
import type { AvatarFallbackProps } from 'reka-ui';
import { AvatarFallback } from 'reka-ui';
import type { HTMLAttributes } from 'vue';
import { cn } from '@/lib/utils';

const props = defineProps<
  AvatarFallbackProps & { class?: HTMLAttributes['class'] }
>();

const delegatedProps = reactiveOmit(props, 'class');
</script>

<template>
  <AvatarFallback
    data-slot="avatar-fallback"
    :class="
      cn(
        'flex size-full items-center justify-center rounded-full bg-muted',
        props.class,
      )
    "
    v-bind="delegatedProps"
  >
    <slot />
  </AvatarFallback>
</template>
