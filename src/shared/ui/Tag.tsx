import React, { HTMLProps, ReactNode } from 'react';
import clsx from 'clsx';

interface TagProps extends HTMLProps<HTMLSpanElement> {
  children?: ReactNode;
  text?: string;
}

export const Tag = React.forwardRef<HTMLLabelElement, TagProps>(
  ({ className, children, text, ...props }, ref) => (
    <span
      {...props}
      ref={ref}
      className={clsx(
        'text-xs font-normal h-[24px] text-white bg-primary rounded-lg px-2 py-1',
        className
      )}
    >
      {children || text}
    </span>
  )
);
