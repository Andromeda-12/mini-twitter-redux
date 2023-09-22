import { ReactNode, useState } from 'react';
import clsx from 'clsx';
import { NavigationItem } from '@/shared/lib';
import { Sidebar } from './Sidebar';

interface SidebarLayoutProps {
  className?: string;
  navigationItems: NavigationItem[];
  children: ReactNode;
}

export const SidebarLayout = ({
  className,
  navigationItems,
  children,
}: SidebarLayoutProps) => {
  const defaultSidebarState =
    localStorage.getItem('isSidebarCollapsed') === 'true';
  const [isSidebarCollapsed, setIsSidebarCollapsed] =
    useState(defaultSidebarState);

  const handleSidebarStateToggle = () => {
    localStorage.setItem('isSidebarCollapsed', `${!isSidebarCollapsed}`);
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <div className={clsx('flex', className)}>
      <Sidebar
        isSidebarCollapsed={isSidebarCollapsed}
        navigationItems={navigationItems}
        onOpenStateChange={handleSidebarStateToggle}
      />

      <div
        className={clsx(
          'w-full h-full duration-300',
          'md:px-[30px] md:py-[24px]',
          isSidebarCollapsed ? 'md:pl-[94px]' : 'md:pl-[306px]'
        )}
      >
        {children}
      </div>
    </div>
  );
};
