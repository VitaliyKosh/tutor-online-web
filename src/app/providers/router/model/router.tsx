import { createBrowserRouter } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

import { ScreenLayout } from '@/app/layouts/screen-layout';
import { paths } from '@/shared/lib/path';
import { RouteNames } from '@/shared/consts/paths';
import { PageError } from '@/pages/page-error';

export const router = createBrowserRouter([
    {
        path: paths.getRoutePath(RouteNames.MAIN),
        element: <Outlet />,
        errorElement: <PageError />,
        children: Object.values(RouteNames).map((routeName) => ({
            path: paths.getRoutePath(routeName),
            element: <ScreenLayout routeName={routeName} />,
        })),
    },
]);
