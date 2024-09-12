import { RouterProvider as ReactRouterProvider } from 'react-router-dom';

import { router } from '../model/router';

export const RouterProvider = () => <ReactRouterProvider router={router} />;
