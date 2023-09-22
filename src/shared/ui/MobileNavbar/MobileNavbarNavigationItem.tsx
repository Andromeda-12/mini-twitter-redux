import { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Icon } from '@/shared/ui';
import { NavigationItem } from '@/shared/lib';
import { MobileNavbarNavigationItemContainer } from './MobileNavbarNavigationItemContainer';

const MobileNavbarNavigationItemWithLink = ({
  route,
  children,
}: {
  children: ReactNode;
  route: string;
}) => (
  <Link to={{ pathname: route }} className="outline-none rounded-xl block">
    {children}
  </Link>
);

export const MobileNavbarNavigationItem = ({
  route,
  text,
  iconName,
}: NavigationItem) => {
  const location = useLocation();
  const isRouteActive = location.pathname === route;

  return (
    <MobileNavbarNavigationItemWithLink route={route}>
      <MobileNavbarNavigationItemContainer isActive={isRouteActive}>
        <Icon iconName={iconName} />
        <span className="ml-[8px]">{text}</span>
      </MobileNavbarNavigationItemContainer>
    </MobileNavbarNavigationItemWithLink>
  );
};
