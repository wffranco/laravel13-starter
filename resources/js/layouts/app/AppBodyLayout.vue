<script setup lang="ts">
import { footerVariants } from '@/components/ui/app';
import AppContainer from '@/components/ui/app/AppContainer.vue';
import AppContent from '@/components/ui/app/AppContent.vue';
import AppHeader from '@/components/ui/app/AppHeader.vue';
import { cn } from '@/lib/utils';
import type { LayoutOptions } from '@/types/navigation';

interface Props extends LayoutOptions {
  variant?: 'header' | 'sidebar';
}

withDefaults(defineProps<Props>(), {
  variant: 'header',
});
</script>

<template>
  <AppHeader v-bind="{ ...header, variant }" />
  <AppContent :variant="variant">
    <AppContainer v-bind="{ content, title }">
      <slot />
    </AppContainer>
  </AppContent>
  <footer
    :class="cn(footerVariants({ position: footer?.position }), footer?.class)"
  />
</template>
