<script setup lang="ts">
import { Link, usePage } from '@inertiajs/vue3';
import { computed, useSlots } from 'vue';
import type {
  BreadcrumbHref,
  BreadcrumbItem as BreadcrumbItemType,
} from '@/types';
import Breadcrumb from '../breadcrumb/Breadcrumb.vue';
import BreadcrumbItem from '../breadcrumb/BreadcrumbItem.vue';
import BreadcrumbLink from '../breadcrumb/BreadcrumbLink.vue';
import BreadcrumbList from '../breadcrumb/BreadcrumbList.vue';
import BreadcrumbPage from '../breadcrumb/BreadcrumbPage.vue';
import BreadcrumbSeparator from '../breadcrumb/BreadcrumbSeparator.vue';
import Portal from '../portal/Portal.vue';

export type BreadcrumbItem = BreadcrumbItemType | { slot: string };

const props = defineProps<{
  breadcrumbs?: BreadcrumbItem[];
}>();

const slots = useSlots();

const items = computed(() =>
  props.breadcrumbs?.length
    ? (props.breadcrumbs
        .map((breadcrumb) => {
          if ('slot' in breadcrumb) {
            const vnode = slots?.[breadcrumb.slot];

            return vnode ? { vnode } : null;
          }

          return breadcrumb;
        })
        .filter(Boolean) as BreadcrumbItemType[])
    : slots?.default
      ? slots.default().map((vnode) => ({ vnode }))
      : [],
);

const page = usePage();

const parseHref = (href?: BreadcrumbHref) =>
  typeof href === 'function' ? href(page.url) : href;
</script>

<template>
  <Portal v-if="items.length" to="header [breadcrumbs]">
    <Breadcrumb>
      <BreadcrumbList>
        <template v-for="(item, index) in items" :key="index">
          <BreadcrumbItem>
            <template v-if="index === items.length - 1">
              <BreadcrumbPage>
                <component v-if="'vnode' in item" :is="item.vnode" />
                <template v-else>{{ item.title }}</template>
              </BreadcrumbPage>
            </template>
            <template v-else>
              <BreadcrumbLink as-child>
                <component v-if="'vnode' in item" :is="item.vnode" />
                <Link v-else :href="parseHref(item.href)">
                  {{ item.title }}
                </Link>
              </BreadcrumbLink>
            </template>
          </BreadcrumbItem>
          <BreadcrumbSeparator v-if="index !== items.length - 1" />
        </template>
      </BreadcrumbList>
    </Breadcrumb>
  </Portal>
</template>
