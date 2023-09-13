import { RouterProvider } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { router } from './router';
import { appStore } from './store';
import './index.css';

export function App() {
  return (
    <ReduxProvider store={appStore}>
      <RouterProvider router={router} />;
    </ReduxProvider>
  );
}
