import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import type { ClassValue } from 'vue';

export { default as Input } from './Input.vue';

export const inputVariants = cva(
  'transition-[color,box-shadow] selection:bg-primary selection:text-primary-foreground file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      type: {
        file: 'py-1 file:-translate-x-2 file:cursor-pointer file:rounded file:bg-primary file:bg-secondary file:px-3 file:py-2 file:text-sm/2 file:text-secondary-foreground',
      } as Record<HTMLInputElement['type'], ClassValue | undefined>,
      variant: {
        box: [
          'w-full min-w-0 rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-xs outline-none md:text-sm dark:bg-input/30',
          'focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50',
          'aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40',
        ],
        inline: [
          'w-auto min-w-0 rounded-md bg-transparent py-2 pr-8 pl-0 shadow-xs outline-none md:text-sm',
          'bg-transparent text-[length:inherit] dark:bg-transparent',
          'border-none focus:border-none focus:ring-transparent dark:focus:border-none dark:focus:ring-transparent',
          'underline decoration-indigo-500 decoration-dotted decoration-2 underline-offset-2',
          'field-sizing-content',
        ],
      },
    },
    defaultVariants: {
      variant: 'box',
    },
  },
);
export type InputVariants = VariantProps<typeof inputVariants>;
