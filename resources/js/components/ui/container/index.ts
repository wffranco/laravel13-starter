import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

export { default as Container } from './Container.vue';

export const sectionVariants = cva('flex flex-1 flex-col items-center', {
  variants: {
    size: {
      md: 'p-4 sm:px-6 lg:px-8',
    },
  },
  // defaultVariants: {},
});
export type SectionVariants = VariantProps<typeof sectionVariants>;

export const contentVariants = cva('flex w-full flex-1', {
  variants: {
    maxWidth: {
      '4xl': 'max-w-4xl',
      '5xl': 'max-w-5xl',
      '7xl': 'max-w-7xl',
      none: '',
    },
  },
  defaultVariants: {
    maxWidth: '5xl',
  },
});
export type ContentVariants = VariantProps<typeof contentVariants>;
