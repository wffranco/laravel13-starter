<script setup lang="ts">
import type { ContentProps } from '@/types';
import Container from '../container/Container.vue';

interface Props {
  content?: ContentProps | null;
  title?: string;
}

defineProps<Props>();
</script>

<template>
  <Container
    v-if="content"
    data-slot="layout-content"
    tag="section"
    :aria-label="content?.title !== false ? title : undefined"
    v-bind="content"
  >
    <slot />
  </Container>
  <section
    v-else
    class="flex flex-1 flex-col"
    data-slot="layout-content"
    :aria-label="content !== null ? title : undefined"
  >
    <slot />
  </section>
</template>
