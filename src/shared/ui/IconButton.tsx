import React from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import { Icon, IconNames } from './Icon';
import { cn } from '../lib';

const iconButtonVariants = cva(
  cn(
    'text-base font-medium duration-300',
    'active:scale-95 outline-none focus-visible:ring ring-primary ring-offset-2',
    'disabled:cursor-not-allowed disabled:active:!scale-100'
  ),
  {
    variants: {
      variant: {
        default: 'text-white bg-primary',
        outline: 'border',
        ghost: '',
      },
      size: {
        default: 'h-[40px] w-[40px]',
        sm: 'h-[32px] w-[32px]',
        lg: 'h-[46px] w-[46px]',
        custom: '',
      },
      shape: {
        square: 'rounded-xl',
        rounded: 'rounded-full',
      },
    },
    compoundVariants: [
      {
        variant: 'ghost',
        size: ['default', 'sm', 'lg'],
        className: 'w-fit h-fit',
      },
    ],
    defaultVariants: {
      variant: 'default',
      size: 'default',
      shape: 'square',
    },
  }
);

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof iconButtonVariants> {
  iconName: IconNames;
}

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ className, iconName, variant, size, shape, ...props }, ref) => (
    <button
      ref={ref}
      type="button"
      className={cn(iconButtonVariants({ variant, size, shape }), className)}
      {...props}
    >
      <Icon iconName={iconName} />
    </button>
  )
);
