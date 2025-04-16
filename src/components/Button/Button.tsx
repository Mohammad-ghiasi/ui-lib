import { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import { type VariantProps } from 'class-variance-authority';

import { cn } from '../../utils';
import { buttonVariants } from './Button.styles';

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: ReactNode;
}

export const Button: FC<ButtonProps> = ({ children, variant, size }) => {
  return (
    <button className={cn(buttonVariants({ variant, size }))}>
      {children}
    </button>
  );
};
