import { Outlet } from 'react-router-dom';
import { NavigationItem } from '@/shared/lib';
import { routes } from '@/shared/constants';
import { NotificationHub } from '@/shared/lib/notification';
import { MobileNavbarLayout } from './MobileNavbarLayout';
import { SidebarLayout } from './SidebarLayout';

const navigationItems: NavigationItem[] = [
  {
    route: routes.MAIN_PAGE_PATH,
    iconName: 'home',
    text: 'Новости',
  },
  {
    route: routes.SUBSCRIBERS_PATH,
    iconName: 'group',
    text: 'Подписчики',
  },
  {
    route: routes.PROFILE_PATH,
    iconName: 'user',
    text: 'Профиль',
  },
];

export const NavigationLayout = () => (
  <>
    <MobileNavbarLayout className="md:hidden" navigationItems={navigationItems}>
      <Outlet />
    </MobileNavbarLayout>

    <SidebarLayout
      className="hidden md:block"
      navigationItems={navigationItems}
    >
      <Outlet />
    </SidebarLayout>

    <NotificationHub className="fixed mb-5 w-full md:w-fit" />
  </>
);
