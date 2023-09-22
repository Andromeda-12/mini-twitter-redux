import { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SidebarNavigationItemContainer } from './SidebarNavigationItemContainer';
import { Icon, IconNames } from '../Icon';

interface SidebarNavigationItemProps {
  route: string;
  text: string;
  iconName: IconNames;
  isSidebarCollapsed: boolean;
}

const SidebarNavigationItemWithLink = ({
  route,
  children,
}: {
  children: ReactNode;
  route: string;
}) => (
  <Link to={{ pathname: route }} className="outline-none rounded-xl">
    {children}
  </Link>
);

export const SidebarNavigationItem = ({
  route,
  text,
  iconName,
  isSidebarCollapsed,
}: SidebarNavigationItemProps) => {
  const location = useLocation();
  const isRouteActive = location.pathname === route;

  return (
    <SidebarNavigationItemWithLink route={route}>
      <SidebarNavigationItemContainer isActive={isRouteActive}>
        <div>
          <Icon iconName={iconName} />
        </div>
        {!isSidebarCollapsed && (
          <span className="ml-[8px] whitespace-nowrap">{text}</span>
        )}
      </SidebarNavigationItemContainer>
    </SidebarNavigationItemWithLink>
  );
};
