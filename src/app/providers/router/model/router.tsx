import { createBrowserRouter } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

import { ScreenLayout } from '@/app/layouts/screen-layout';
import { paths } from '@/shared/lib/path';
import { GlobalRouteNames, RouteNames } from '@/shared/consts/paths';
import { PageError } from '@/pages/page-error';
import { NotFoundPage } from '@/pages/not-found';
import NoPWAPage from '@/pages/no-pwa/ui';

export const router = createBrowserRouter([
    {
        path: paths.getRoutePath(GlobalRouteNames.NO_PWA),
        element: <NoPWAPage />,
        errorElement: <PageError />,
    },
    {
        path: '/app',
        element: <Outlet />,
        errorElement: <PageError />,
        children: Object.values(RouteNames).map((routeName) => ({
            path: paths.getRoutePath(routeName),
            element: <ScreenLayout routeName={routeName} />,
        })),
    },
    {
        path: '*',
        element: <NotFoundPage />,
        errorElement: <PageError />,
    },
]);
