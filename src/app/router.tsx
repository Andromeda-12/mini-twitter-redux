import { createBrowserRouter } from 'react-router-dom';
import { ComponentsPreview } from '@/pages/ComponentsPreview';

const Spinner = () => (
  <div className="animate-spin  border-r-4 border-t-4 border-primary rounded-full h-32 w-32"></div>
);

// const notFoundRoute = new Route({
//   getParentRoute: () => rootRoute,
//   component: test,
//   pendingComponent: Spinner,
//   loader: async () => {
//     const promise = new Promise<{ data: string }>(res =>
//       setTimeout(
//         () =>
//           res({
//             data: 'slow data',
//           }),
//         500
//       )
//     );
//     const data = await promise;
//     return {
//       loadedData: data,
//     };
//   },
//   path: '*',
//   id: 'notfound',
// });

export const router = createBrowserRouter([
  {
    path: '/',
    element: <ComponentsPreview />,
    errorElement: <div>not found</div>,
  },
]);
