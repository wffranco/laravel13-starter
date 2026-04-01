import type { InertiaLinkProps } from '@inertiajs/vue3';
import type { LucideIcon } from 'lucide-vue-next';
import type { ClassValue } from 'vue';
import type {
  ContentVariants,
  SectionVariants,
} from '@/components/ui/container';
import type { RouteDefinition } from '@/wayfinder';

export interface ActionItem {
  title: string;
  icon?: LucideIcon;
  href: string | RouteDefinition<'get'>;
  class?: string;
}

export type BreadcrumbItem = {
  title: string;
  href: NonNullable<InertiaLinkProps['href']>;
};

export interface ContentProps {
  class?: ClassValue;
  maxWidth?: ContentVariants['maxWidth'];
  page?: boolean;
  size?: SectionVariants['size'];
  /** If false, the aria-label is not set. */
  title?: boolean;
}

export interface LayoutOptions {
  readonly actions?: ActionItem[];
  readonly breadcrumbs?: BreadcrumbItem[];
  readonly title: string;
}

export type NavItem = {
  title: string;
  href: NonNullable<InertiaLinkProps['href']>;
  icon?: LucideIcon;
  isActive?: boolean;
};
