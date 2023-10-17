import { ReactNode, useState } from 'react';
import clsx from 'clsx';
import { NavigationItem } from '@/shared/lib';
import { MobileNavbar } from './MobileNavbar';

interface MobileNavbarLayoutProps {
  className?: string;
  navigationItems: NavigationItem[];
  children: ReactNode;
}

export const MobileNavbarLayout = ({
  className,
  navigationItems,
  children,
}: MobileNavbarLayoutProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={clsx('flex h-full', className)}>
      <MobileNavbar
        isOpen={isOpen}
        navigationItems={navigationItems}
        onOpenStateChange={() => setIsOpen(!isOpen)}
      />

      <div
        className={clsx(
          'w-full h-full duration-300',
          'px-[20px] pt-[76px] pb-[24px]'
        )}
      >
        {children}
      </div>
    </div>
  );
};
