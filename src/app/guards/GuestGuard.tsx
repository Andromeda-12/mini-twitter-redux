import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { sessionModel } from '@/entities/session';

export function GuestGuard() {
  const isAuthorized = sessionModel.selectors.useIsAuthorized();
  const locate = useLocation();

  if (!isAuthorized)
    return <Navigate to="/signin" state={{ returnUrl: locate.pathname }} />;

  return <Outlet />;
}
