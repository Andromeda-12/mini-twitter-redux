import { Link, useLocation } from 'react-router-dom';
import { Tabs, TabsList, TabsTrigger } from '@/shared/ui';
import { routes } from '@/shared/constants';

const SIGN_IN_TAB = 'signin';
const SIGN_UP_TAB = 'signun';

const tabs = [
  {
    title: 'Авторизация',
    value: SIGN_IN_TAB,
  },
  {
    title: 'Регистрация',
    value: SIGN_UP_TAB,
  },
];

export const AuthTab = () => {
  const location = useLocation();

  const tabValue =
    location?.pathname === routes.SIGN_IN_PATH ? SIGN_IN_TAB : SIGN_UP_TAB;

  return (
    <Tabs value={tabValue} className="mb-[32px]">
      <TabsList className="grid w-full grid-cols-2">
        {tabs.map(({ title, value }) => (
          <Link
            to={
              value === SIGN_IN_TAB ? routes.SIGN_IN_PATH : routes.SIGN_UP_PATH
            }
            key={`auth-tab-${value}`}
          >
            <TabsTrigger value={value}>
              <span className="text-base font-normal">{title}</span>
            </TabsTrigger>
          </Link>
        ))}
      </TabsList>
    </Tabs>
  );
};
