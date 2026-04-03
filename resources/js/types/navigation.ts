import type { InertiaLinkProps } from '@inertiajs/vue3';
import type { LucideIcon } from 'lucide-vue-next';
import type { ClassValue, VNode } from 'vue';
import type { FooterVariants, HeaderVariants } from '@/components/ui/app';
import type { ButtonVariants } from '@/components/ui/button';
import type {
  ContentVariants,
  SectionVariants,
} from '@/components/ui/container';
import type { RouteDefinition } from '@/wayfinder';

export type ActionItem =
  | { vnode: VNode }
  | {
      class?: string;
      href: string | RouteDefinition<'get'>;
      icon?: LucideIcon;
      size?: ButtonVariants['size'];
      title: string;
      variant?: ButtonVariants['variant'];
    };

export interface AppOptions {
  layout?: LayoutOptions | ((props: any) => LayoutOptions);
}

export type BreadcrumbHref =
  | NonNullable<InertiaLinkProps['href']>
  | ((url: string) => NonNullable<InertiaLinkProps['href']>);

export type BreadcrumbItem =
  | { vnode: VNode }
  | {
      href?: BreadcrumbHref;
      title: string;
    };

export interface ContentProps {
  class?: ClassValue;
  maxWidth?: ContentVariants['maxWidth'];
  page?: boolean;
  size?: SectionVariants['size'];
  /** If false, the aria-label is not set. */
  title?: boolean;
}

export interface FooterProps {
  class?: ClassValue;
  position?: FooterVariants['position'];
}

export interface HeaderProps {
  class?: ClassValue;
  position?: HeaderVariants['position'];
}

export interface LayoutOptions {
  readonly actions?: ActionItem[];
  readonly breadcrumbs?: BreadcrumbItem[];
  /** Content options. If null, the aria-label is not set. */
  readonly content?: ContentProps | null;
  readonly footer?: FooterProps;
  readonly header?: HeaderProps;
  readonly title: string;
}

export interface NavItem {
  href: NonNullable<InertiaLinkProps['href']>;
  icon?: LucideIcon;
  isActive?: (url: string) => boolean;
  title: string;
}
