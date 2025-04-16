import { cva } from 'class-variance-authority';

export const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background cursor-pointer',
  {
    variants: {
      variant: {
        primary:
          'bg-purple-600 text-white hover:bg-primary-dark dark:bg-primary-dark dark:hover:bg-primary',
        secondary:
          'bg-amber-600 text-white hover:bg-secondary-dark dark:bg-secondary-dark dark:hover:bg-secondary',
        outline:
          'border border-input hover:bg-accent hover:text-accent-foreground',
        destructive:
          'bg-red-600 text-white hover:bg-destructive-dark dark:bg-destructive-dark dark:hover:bg-destructive',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'underline-offset-4 hover:underline text-primary',
      },
      size: {
        sm: 'h-9 px-3 rounded-md',
        md: 'h-10 px-4 py-2',
        lg: 'h-11 px-8 rounded-md',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
);
