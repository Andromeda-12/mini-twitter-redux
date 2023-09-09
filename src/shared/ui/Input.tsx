import React from 'react';
import clsx from 'clsx';
import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '../lib';

const inputVariants = cva(
  clsx(
    'w-full font-medium text-base',
    'outline-none focus-visible:ring ring-primary ring-offset-2',
    'disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-black/40'
  ),
  {
    variants: {
      variant: {
        default: 'border border-gray rounded-xl',
      },
      size: {
        default: 'h-[46px] py-[11px] px-2',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

type InputPropsWithoutSize = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'size'
>;

export interface InputProps
  extends InputPropsWithoutSize,
    VariantProps<typeof inputVariants> {
  startNode?: React.ReactNode;
  endNode?: React.ReactNode;
  error?: boolean;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { className, disabled, variant, size, error, startNode, endNode, ...props },
    ref
  ) => (
    <div
      className={clsx(
        'relative w-full flex items-center rounded-xl text-black'
      )}
    >
      {startNode && <span className="absolute left-2">{startNode}</span>}

      <input
        {...props}
        ref={ref}
        disabled={disabled}
        className={cn(
          inputVariants({ variant, size }),
          {
            'border-red ring-red': error,
            'pl-9': !!startNode,
            'pr-9': !!endNode,
          },
          className
        )}
      />

      {endNode && <span className="absolute right-2">{endNode}</span>}
    </div>
  )
);

Input.displayName = 'Input';
