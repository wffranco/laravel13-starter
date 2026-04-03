<script setup lang="ts">
import { usePage } from '@inertiajs/vue3';
import { Head } from '@inertiajs/vue3';
import { computed } from 'vue';
import AppShell from '@/components/ui/app/AppShell.vue';
import AppSidebar from '@/components/ui/app/AppSidebar.vue';
import Actions from '@/components/ui/portal/Actions.vue';
import Breadcrumbs from '@/components/ui/portal/Breadcrumbs.vue';
import type { LayoutOptions } from '@/types/navigation';
import AppBodyLayout from './app/AppBodyLayout.vue';

type Props = LayoutOptions;

defineProps<Props>();

const page = usePage();
const variant = computed(() => page.props.layout || 'header');
</script>

<template>
  <template v-if="title">
    <Head :title="title" />
    <h1 class="sr-only">{{ title }}</h1>
  </template>

  <AppShell :variant="variant" v-bind="$attrs">
    <template v-if="variant === 'sidebar'">
      <AppSidebar />
      <div class="flex flex-1 flex-col">
        <AppBodyLayout v-bind="{ content, footer, header, title, variant }">
          <slot />
        </AppBodyLayout>
      </div>
    </template>
    <AppBodyLayout v-else v-bind="{ content, footer, header, title, variant }">
      <slot />
    </AppBodyLayout>
  </AppShell>

  <Actions v-if="actions?.length" :actions="actions" />
  <Breadcrumbs v-if="breadcrumbs?.length" :breadcrumbs="breadcrumbs" />
</template>
