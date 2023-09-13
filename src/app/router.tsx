import { Navigate, createBrowserRouter } from 'react-router-dom';
import { NotFoundPage } from '@/pages/404';
import { SignInPage } from '@/pages/sign-in';
import { SignUpPage } from '@/pages/sign-up';
import { routes } from '@/shared/constants';

export const router = createBrowserRouter([
  {
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
  { path: NotFoundPage.Route, element: <NotFoundPage.View /> },
  { path: '*', element: <Navigate to={routes.NOT_FOUND_PAGE_PATH} replace /> },
]);
