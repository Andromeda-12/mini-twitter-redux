import React from 'react';
import clsx from 'clsx';
import { VariantProps, cva } from 'class-variance-authority';

const buttonVariants = cva(
  clsx(
    'inline-flex items-center justify-center rounded-xl text-base font-medium duration-300 outline-none',
    'focus-visible:ring ring-primary ring-offset-2',
    'active:scale-95 disabled:active:scale-100 disabled:cursor-not-allowed'
  ),
  {
    variants: {
      variant: {
        default:
          'bg-primary text-white hover:bg-primary/90 disabled:bg-gray disabled:text-black/10',
        outline:
          'border border-gray bg-transparent disabled:bg-gray disabled:text-black/10',
        ghost: 'hover:bg-primary hover:text-white',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-[46px] px-[8px] py-[11px]',
        sm: 'h-[34px] px-[12px] py-[5px] text-sm leading-6',
        lg: 'h-[56px] px-[12px] py-[16px] font-semibold',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button
      ref={ref}
      className={buttonVariants({ variant, size, className })}
      {...props}
    />
  )
);

Button.displayName = 'Button';
