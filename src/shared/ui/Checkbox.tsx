import React, {ButtonHTMLAttributes} from 'react';
import clsx from 'clsx';
import {Root as CheckboxRoot, Indicator} from '@radix-ui/react-checkbox';
import {Icon} from './Icon';

interface CheckboxProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    checked?: boolean;
    onChange?: () => void;
}

export const Checkbox = React.forwardRef<HTMLButtonElement, CheckboxProps>(
    ({className, checked, onChange, ...rest}, ref) => (
        <CheckboxRoot
            {...rest}
            ref={ref}
            onCheckedChange={onChange}
            checked={checked}
            className={clsx(
                'h-5 w-5 rounded-md flex justify-center items-center',
                'radix-state-unchecked:border radix-state-unchecked:border-gray',
                'focus:outline-none focus-visible:ring ring-primary ring-offset-2',
                'disabled:radix-state-checked:bg-primary/50 disabled:cursor-not-allowed',
                'radix-state-checked:bg-primary',
                className,
            )}
        >
            <Indicator className="flex items-center justify-center">
                <Icon
                    iconName="check"
                    className="!w-[10px] !h-[8px] text-white"
                />
            </Indicator>
        </CheckboxRoot>
    ),
);
