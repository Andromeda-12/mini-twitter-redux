import React, {ReactNode} from 'react';
import clsx from 'clsx';

interface SidebarNavigationItemContainerProps
    extends React.LiHTMLAttributes<HTMLLIElement> {
    children: ReactNode;
    className?: string;
    isActive: boolean;
}

export const SidebarNavigationItemContainer = ({
    children,
    className,
    isActive,
    ...props
}: SidebarNavigationItemContainerProps) => (
    <li
        {...props}
        className={clsx(
            'p-[12px] block rounded-xl text-[#626262] cursor-pointer duration-200',
            'hover:text-gray-dark hover:bg-gray-light',
            'relative flex items-center',
            'outline-none focus-visible:ring ring-primary ring-offset-2',
            {
                'rounded-l-none bg-gray text-gray-dark': isActive,
            },
            className,
        )}
    >
        {isActive && (
            <div className="w-[8px] h-full bg-primary absolute -left-2" />
        )}
        {children}
    </li>
);
