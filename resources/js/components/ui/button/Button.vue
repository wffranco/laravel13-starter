<script setup lang="ts">
import { Link } from '@inertiajs/vue3';
import type { LucideIcon } from 'lucide-vue-next';
import type { PrimitiveProps } from 'reka-ui';
import { Primitive } from 'reka-ui';
import { computed } from 'vue';
import type { HTMLAttributes } from 'vue';
import { Spinner } from '@/components/ui/spinner';
import { cn, toUrl } from '@/lib/utils';
import type { RouteDefinition } from '@/wayfinder';
import type { ButtonVariants } from '.';
import { buttonVariants } from '.';

interface Props extends PrimitiveProps {
  'aria-label': string; // Fix an error with required aria-label prop
  ariaLabel?: string;
  class?: HTMLAttributes['class'];
  disabled?: boolean;
  external?: boolean;
  href?: string | RouteDefinition<any>;
  icon?: LucideIcon;
  size?: ButtonVariants['size'];
  spinner?: boolean;
  variant?: ButtonVariants['variant'];
}

const props = withDefaults(defineProps<Props>(), {
  as: 'button',
});
const url = computed(() => (!props.href ? undefined : toUrl(props.href)));
</script>

<template>
  <Primitive
    data-slot="button"
    :as="url ? (external ? 'a' : Link) : as"
    :as-child="asChild"
    :aria-label="ariaLabel"
    :class="cn(buttonVariants({ variant, size }), props.class)"
    :disabled="disabled || null"
    :href="url"
    :target="url && external ? '_blank' : undefined"
  >
    <Spinner v-if="spinner && disabled" />
    <component v-else-if="icon" :is="icon" />

    <slot> {{ size && /^icon/.test(size) ? '' : ariaLabel }} </slot>
  </Primitive>
</template>
