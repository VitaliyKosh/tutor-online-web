import { createBrowserRouter } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

import { ScreenLayout } from '@/view/mobile/app/layouts/screen-layout';
import { paths } from '@/view/mobile/shared/lib/path';
import { GlobalRouteNames, RouteNames } from '@/view/mobile/shared/consts/paths';
import { PageError } from '@/view/mobile/pages/page-error';
import { NotFoundPage } from '@/view/mobile/pages/not-found';
import NoPWAPage from '@/view/mobile/pages/no-pwa/ui';

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
