import clsx from 'clsx';
import { Outlet } from 'react-router-dom';
import { NotificationHub } from '@/shared/lib/notification';
import { Logo } from '@/shared/ui';
import { AuthTab } from './AuthTab';

export const AuthLayout = () => (
  <div className="min-h-screen flex">
    <div
      className={clsx(
        'w-1/2 min-h-screen bg-gradient-to-tr from-pink-600 to-primary',
        'hidden lg:block'
      )}
    />

    <div
      className={clsx(
        'h-full min-h-screen flex justify-center items-center py-[58px]',
        'w-full lg:w-1/2 px-[20px]'
      )}
    >
      <div className="w-[540px] h-full relative">
        <div className="text-center mb-[40px]">
          <Logo size="lg" />
        </div>

        <AuthTab />

        <Outlet />

        <NotificationHub className="mt-[64px]" />
      </div>
    </div>
  </div>
);
