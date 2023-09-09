import React, {TextareaHTMLAttributes} from 'react';
import clsx from 'clsx';

export interface TextareaProps
    extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    error?: boolean;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
    ({className, disabled, error, ...props}, ref) => (
        <textarea
            {...props}
            ref={ref}
            disabled={disabled}
            className={clsx(
                'px-[8px] py-[5px] w-full border border-gray rounded-xl',
                'outline-none focus-visible:ring ring-primary ring-offset-2',
                {
                    'border-red ring-red': error,
                    'cursor-not-allowed bg-gray-100 text-black/40 resize-none':
                        disabled,
                },
                className,
            )}
        />
    ),
);
