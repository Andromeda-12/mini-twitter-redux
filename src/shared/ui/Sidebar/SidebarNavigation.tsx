import { SidebarNavigationItem } from './SidebarNavigationItem';
import { NavigationItem } from '@/shared/lib';

interface SidebarNavigationProps {
  navigationItems: NavigationItem[];
  isSidebarCollapsed: boolean;
}

export const SidebarNavigation = ({
  navigationItems,
  isSidebarCollapsed,
}: SidebarNavigationProps) => (
  <ul className="space-y-[4px] flex flex-col flex-1">
    {navigationItems.map(({ route, iconName, text }, index) => (
      <SidebarNavigationItem
        route={route}
        text={text}
        iconName={iconName}
        isSidebarCollapsed={isSidebarCollapsed}
        key={`nav-item-${index}`}
      />
    ))}
  </ul>
);
