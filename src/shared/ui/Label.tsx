import React, {LabelHTMLAttributes, ReactNode} from 'react';
import {Label as RadixLabel} from '@radix-ui/react-label';
import clsx from 'clsx';

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
    children: ReactNode;
    disabled?: boolean;
}

export const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
    ({className, children, disabled, ...props}, ref) => (
        <RadixLabel
            {...props}
            ref={ref}
            className={clsx(
                'text-base font-normal cursor-pointer',
                {
                    'text-gray-500 !cursor-not-allowed': disabled,
                },
                className,
            )}
        >
            {children}
        </RadixLabel>
    ),
);
