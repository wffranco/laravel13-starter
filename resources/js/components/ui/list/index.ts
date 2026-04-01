import { cva } from 'class-variance-authority';
import type { VariantProps } from 'class-variance-authority';

export { default as List } from './List.vue';
export { default as ListItem } from './ListItem.vue';

export const listVariants = cva('grid', {
  variants: {
    border: {
      full: 'border shadow-sm in-not-first:border-t',
      none: 'border-none shadow-none',
      outlined: 'border shadow-sm',
    },
    color: {
      default: 'bg-card text-card-foreground',
      none: '',
    },
    rounded: {
      sm: 'rounded-sm',
      md: 'rounded-md',
      lg: 'rounded-lg',
      xl: 'rounded-xl',
      full: 'rounded-full',
      none: 'rounded-none',
    },
  },
  defaultVariants: {
    color: 'default',
  },
});
export type ListVariants = VariantProps<typeof listVariants>;

export const listItemVariants = cva('grid', {
  variants: {
    color: {
      default: 'hover:bg-accent/50 hover:text-accent-foreground',
      none: '',
    },
  },
  defaultVariants: {
    color: 'default',
  },
});
export type ListItemVariants = VariantProps<typeof listItemVariants>;
