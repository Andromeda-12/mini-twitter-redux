import { NavigationItem } from '@/shared/lib';
import { MobileNavbarNavigationItem } from './MobileNavbarNavigationItem';

interface MobileNavbarNavigationProps {
  items: NavigationItem[];
}

export const MobileNavbarNavigation = ({
  items,
}: MobileNavbarNavigationProps) => (
  <ul className="px-[16px] space-y-[16px]">
    {items.map(({ route, iconName, text }, index) => (
      <MobileNavbarNavigationItem
        route={route}
        text={text}
        iconName={iconName}
        key={`nav-item-${index}`}
      />
    ))}
  </ul>
);
