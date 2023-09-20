import { Navigate, Outlet } from 'react-router-dom';
import { sessionModel } from '@/entities/session';

export function GuestGuard() {
  const isAuthorized = sessionModel.selectors.useIsAuthorized();

  if (!isAuthorized)
    return <Navigate to="/signin" state={{ returnUrl: '/test' }} />;

  return <Outlet />;
}
