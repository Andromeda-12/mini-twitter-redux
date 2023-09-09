import React, {HTMLProps, ReactNode} from 'react';
import clsx from 'clsx';

interface TagProps extends HTMLProps<HTMLSpanElement> {
    children: ReactNode;
}

export const Tag = React.forwardRef<HTMLLabelElement, TagProps>(
    ({className, children, ...props}, ref) => (
        <span
            {...props}
            ref={ref}
            className={clsx(
                'text-xs font-normal h-[24px] text-white bg-primary rounded-lg px-[8px] py-[4px]',
                className,
            )}
        >
            {children}
        </span>
    ),
);
