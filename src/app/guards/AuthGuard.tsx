import { Navigate, Outlet } from 'react-router-dom';
import { sessionModel } from '@/entities/session';

export function AuthGuard() {
  const isAuthorized = sessionModel.selectors.useIsAuthorized();

  if (isAuthorized) return <Navigate to="/" />;

  return <Outlet />;
}
