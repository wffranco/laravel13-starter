import { cva } from 'class-variance-authority';
import type { VariantProps } from 'class-variance-authority';

export const footerVariants = cva('grid text-xl font-bold', {
  variants: {
    position: {
      fixed: 'fixed inset-x-0 bottom-0',
      sticky: 'sticky inset-x-0 bottom-0',
      static: null,
    },
  },
  defaultVariants: {
    position: 'static',
  },
});
export type FooterVariants = VariantProps<typeof footerVariants>;

export const headerVariants = cva('bg-background text-xl font-bold', {
  variants: {
    variant: {
      header: 'grid',
      sidebar:
        'flex min-h-12 shrink-0 items-center justify-between gap-2 border-b border-sidebar-border/70 transition-[width,height] ease-linear',
    },
    position: {
      fixed: 'fixed inset-x-0 top-0',
      sticky: 'sticky inset-x-0 top-0',
      static: null,
    },
  },
  defaultVariants: {
    position: 'sticky',
  },
});
export type HeaderVariants = VariantProps<typeof headerVariants>;
