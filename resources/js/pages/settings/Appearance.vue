<script setup lang="ts">
import AppearanceTabs from '@/components/AppearanceTabs.vue';
import Heading from '@/components/Heading.vue';
import { edit } from '@/routes/appearance';
import type { AppOptions } from '@/types';

defineOptions({
  layout: {
    title: 'Appearance settings',
    breadcrumbs: [
      {
        title: 'Appearance settings',
        href: edit(),
      },
    ],
  },
} satisfies AppOptions);
</script>

<template>
  <div class="space-y-6">
    <Heading
      variant="small"
      title="Appearance settings"
      description="Update your account's appearance settings"
    />
    <AppearanceTabs />
  </div>
</template>
