import React from 'react';
import { ViewerAvatar } from '@/entities/user';
import {
  MobileNavbarContainer,
  IconButton,
  Logo,
  MobileNavbarNavigation,
  MobileNavbarNavigationItemContainer,
} from '@/shared/ui';
import { NavigationItem, useTypedDispatch } from '@/shared/lib';
import { signOutModel } from '@/features/auth/sign-out';

interface MobileNavbarProps {
  className?: string;
  isOpen: boolean;
  navigationItems: NavigationItem[];
  onOpenStateChange: () => void;
}

export const SignOutButton = () => {
  const dispath = useTypedDispatch();
  const hanldeSignOutButtonClick = (
    e: React.MouseEvent<HTMLLIElement, MouseEvent>
  ) => {
    e.preventDefault();
    dispath(signOutModel.signOut());
  };

  return (
    <MobileNavbarNavigationItemContainer onClick={hanldeSignOutButtonClick}>
      <span className="text-red">Выйти из аккаунта</span>
    </MobileNavbarNavigationItemContainer>
  );
};

const MobileNavbarNavigationBody = ({
  navigationItems,
}: {
  navigationItems: NavigationItem[];
}) => (
  <div className="fixed inset-0 flex flex-col justify-between w-full top-[52px] bg-white pt-[32px]">
    <MobileNavbarNavigation items={navigationItems} />
    <div className="mx-[10px] py-[16px] border-t border-gray">
      <SignOutButton />
    </div>
  </div>
);

export const MobileNavbar = ({
  className,
  isOpen,
  onOpenStateChange,
  navigationItems,
}: MobileNavbarProps) => (
  <MobileNavbarContainer className={className}>
    <Logo size="sm" />
    <div className="flex items-center space-x-[6px]">
      <ViewerAvatar size="sm" />

      <IconButton
        iconName={isOpen ? 'cross' : 'burger-mobile'}
        variant="ghost"
        onClick={onOpenStateChange}
      />
    </div>

    {isOpen && <MobileNavbarNavigationBody navigationItems={navigationItems} />}
  </MobileNavbarContainer>
);
