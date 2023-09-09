import React from 'react';
import clsx from 'clsx';
import {Icon} from './Icon';

const sizeMap = {
    sm: 'h-[24px] w-[24px]',
    base: 'h-[60px] w-[60px]',
    lg: 'h-[80px] w-[80px]',
};

interface LogoProps {
    className?: string;
    size?: 'sm' | 'base' | 'lg';
}

export const Logo = ({className, size = 'base'}: LogoProps) => (
    <div>
        <Icon
            role="img"
            aria-labelledby="logo-desc"
            focusable="false"
            iconName="logo"
            className={clsx(sizeMap[size], className)}
        />
        <span
            id="logo-desc"
            className="sr-only"
        >
            Company&apos;s logo
        </span>
    </div>
);
