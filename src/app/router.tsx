import { Navigate, RouteObject, createBrowserRouter } from 'react-router-dom';
import { NotFoundPage } from '@/pages/404';
import { SignInPage } from '@/pages/sign-in';
import { SignUpPage } from '@/pages/sign-up';
import { NewsPage } from '@/pages/news';
import { ProfilePage } from '@/pages/profile';
import { AuthLayout, NavigationLayout } from '@/widgets/layouts';
import { routes } from '@/shared/constants';
import { AuthGuard, GuestGuard } from './guards';

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
        element: <NavigationLayout />,
        children: [
          {
            path: '/',
            element: <Navigate to={NewsPage.Route} replace />,
          },
          {
            path: NewsPage.Route,
            element: <NewsPage.View />,
          },
          {
            path: ProfilePage.Route,
            element: <ProfilePage.View />,
          },
        ],
      },
    ],
  },
  { path: NotFoundPage.Route, element: <NotFoundPage.View /> },
  { path: '*', element: <Navigate to={routes.NOT_FOUND_PAGE_PATH} replace /> },
];

export const router = createBrowserRouter(routesConfig);
