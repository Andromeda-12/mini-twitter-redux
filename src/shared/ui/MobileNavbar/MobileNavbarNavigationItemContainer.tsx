import React, { ReactNode } from 'react';
import clsx from 'clsx';

interface MobileNavbarNavigationItemContainerProps
  extends React.LiHTMLAttributes<HTMLLIElement> {
  children: ReactNode;
  className?: string;
  isActive?: boolean;
}

export const MobileNavbarNavigationItemContainer = ({
  children,
  className,
  isActive,
  ...props
}: MobileNavbarNavigationItemContainerProps) => (
  <li
    {...props}
    className={clsx(
      'space-x-[8px] p-[12px] h-[48px] block font-medium rounded-xl hover:bg-gray-light',
      'outline-none focus-visible:ring ring-primary ring-offset-2 cursor-pointer',
      {
        'text-primary': isActive,
      },
      className
    )}
  >
    {children}
  </li>
);
