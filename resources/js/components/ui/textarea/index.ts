import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

export { default as Textarea } from './Textarea.vue';

export const textareaVariants = cva('scrollbar-thin-accent', {
  variants: {
    autosize: {
      true: 'field-sizing-content resize-none',
      false: null,
    },
    ring: {
      default:
        'focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50',
      within:
        'focus-within:border-ring focus-within:ring-[3px] focus-within:ring-ring/50',
      hidden: 'focus-visible:outline-hidden!',
    },
    variant: {
      box: [
        'w-full min-w-0 rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none selection:bg-primary selection:text-primary-foreground file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:bg-input/30',
        'aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40',
      ],
      transparent: ['w-full min-w-0'],
    },
  },
  defaultVariants: {
    ring: 'default',
    variant: 'box',
  },
});
export type TextareaVariants = VariantProps<typeof textareaVariants>;
