import { ReactNode } from 'react';
import clsx from 'clsx';

interface SidebarContainerProps {
  children: ReactNode;
  isCollapsed: boolean;
  className?: string;
}

export const SidebarContainer = ({
  children,
  isCollapsed,
  className,
}: SidebarContainerProps) => (
  <aside
    className={clsx(
      isCollapsed ? 'w-16' : 'w-[276px]',
      'duration-300 h-screen bg-white fixed',
      className
    )}
    aria-label="Sidebar"
  >
    <div className={clsx('h-full w-full flex flex-col p-[8px]')}>
      {children}
    </div>
  </aside>
);
