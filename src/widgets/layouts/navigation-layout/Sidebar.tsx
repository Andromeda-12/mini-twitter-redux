import clsx from 'clsx';
import {
  Icon,
  IconButton,
  Logo,
  SidebarContainer,
  SidebarNavigation,
  SidebarNavigationItemContainer,
} from '@/shared/ui';
import { NavigationItem, useTypedDispatch } from '@/shared/lib';
import { signOutModel } from '@/features/auth/sign-out';

interface SidebarProps {
  className?: string;
  navigationItems: NavigationItem[];
  isSidebarCollapsed: boolean;
  onOpenStateChange: () => void;
}

const SidebarHeader = ({
  isSidebarCollapsed,
  onCollapse,
}: {
  isSidebarCollapsed: boolean;
  onCollapse: () => void;
}) => (
  <div className="p-[12px] flex justify-between items-center flex-shrink-0 h-[60px] mb-[80px]">
    <div className="flex items-center space-x-[8px]">
      <Logo size="sm" />
      {!isSidebarCollapsed && (
        <span className="font-bold text-black/60">KozhinDev</span>
      )}
    </div>

    <IconButton
      onClick={onCollapse}
      className={clsx('!p-0 !h-[24px] !w-[24px] !duration-0', {
        'rotate-180 p-[2px] relative -right-2 bg-white rounded-full':
          isSidebarCollapsed,
      })}
      iconName={isSidebarCollapsed ? 'chevron' : 'burger'}
      variant="ghost"
    />
  </div>
);

const SidebarBottom = ({
  isSidebarCollapsed,
}: {
  isSidebarCollapsed: boolean;
}) => {
  const dispath = useTypedDispatch();
  const hanldeSignOutButtonClick = (
    e: React.MouseEvent<HTMLLIElement, MouseEvent>
  ) => {
    e.preventDefault();
    dispath(signOutModel.signOut());
  };

  return (
    <ul className="border-t border-gray flex-shrink-0">
      <SidebarNavigationItemContainer
        className="text-red"
        isActive={false}
        onClick={hanldeSignOutButtonClick}
      >
        <div>
          <Icon iconName="sign-out" className="block" />
        </div>

        {!isSidebarCollapsed && (
          <span className="ml-[8px] whitespace-nowrap">Выйти из аккаунта</span>
        )}
      </SidebarNavigationItemContainer>
    </ul>
  );
};

export const Sidebar = ({
  className,
  isSidebarCollapsed,
  navigationItems,
  onOpenStateChange,
}: SidebarProps) => (
  <SidebarContainer className={className} isCollapsed={isSidebarCollapsed}>
    <SidebarHeader
      isSidebarCollapsed={isSidebarCollapsed}
      onCollapse={onOpenStateChange}
    />

    <SidebarNavigation
      isSidebarCollapsed={isSidebarCollapsed}
      navigationItems={navigationItems}
    />

    <SidebarBottom isSidebarCollapsed={isSidebarCollapsed} />
  </SidebarContainer>
);
