import React, {ReactNode} from 'react';
import clsx from 'clsx';

interface MobileNavbarContainerProps {
    children: ReactNode;
    className?: string;
}

export const MobileNavbarContainer = ({
    children,
    className,
}: MobileNavbarContainerProps) => (
    <header
        className={clsx(
            'h-[52px] w-full bg-white px-[16px] py-[8px] border-b border-gray flex justify-between items-center',
            'fixed top-0 z-[100]',
            className,
        )}
    >
        {children}
    </header>
);
