import { Navigate, RouteObject, createBrowserRouter } from 'react-router-dom';
import { NotFoundPage } from '@/pages/404';
import { SignInPage } from '@/pages/sign-in';
import { SignUpPage } from '@/pages/sign-up';
import { routes } from '@/shared/constants';
import { AuthLayout } from '@/widgets/layouts';
import { AuthGuard, GuestGuard } from './guards';
import { useMeQuery } from '@/entities/session/api';

const MainPage = () => {
  const { data } = useMeQuery();
  return <div>main page</div>;
};

export const routesConfig: RouteObject[] = [
  {
    element: <AuthGuard />,
    children: [
      {
        element: <AuthLayout />,
        children: [
          {
            path: SignInPage.Route,
            element: <SignInPage.View />,
          },
          {
            path: SignUpPage.Route,
            element: <SignUpPage.View />,
          },
        ],
      },
    ],
  },
  {
    element: <GuestGuard />,
    children: [
      {
        path: '/',
        element: <MainPage />,
      },
    ],
  },
  { path: NotFoundPage.Route, element: <NotFoundPage.View /> },
  { path: '*', element: <Navigate to={routes.NOT_FOUND_PAGE_PATH} replace /> },
];

export const router = createBrowserRouter(routesConfig);
