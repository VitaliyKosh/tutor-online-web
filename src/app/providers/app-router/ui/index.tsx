import { FC, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import classes from './index.module.css';
import { adminRouteConfig, privateRouteConfig, routeConfig } from '@/shared/config/route-config';
import { PageLoader } from '@/widgets/page-loader';
import NoActivatePage from '@/pages/NoActivatePage/ui/NoActivatePage';

const AppRouter: FC = () => {
    const user = {
        authChecked: true,
        auth: false,
        user: {
            isActivated: true,
        },
    };

    if (!user.authChecked) {
        return <PageLoader />;
    }

    if (user.auth && !user.user.isActivated) {
        return (
            <Suspense fallback={<PageLoader />}>
                <div className={[classes.pageWrapper].join(' ')}>
                    <NoActivatePage />
                </div>
            </Suspense>
        );
    }

    if (user.auth) {
        return (
            <Suspense fallback={<PageLoader />}>
                <div className={[classes.pageWrapper].join(' ')}>
                    <Routes>
                        {[
                            ...Object.values(privateRouteConfig).map(({ element, path }) => {
                                return <Route key={path} path={path} element={element} />;
                            }),
                            ...Object.values(adminRouteConfig).map(({ element, path }) => {
                                return <Route key={path} path={path} element={element} />;
                            }),
                        ]}
                        <Route path='/app/*' element={<Navigate to='/app/main' replace />} />
                    </Routes>
                </div>
            </Suspense>
        );
    } else {
        return (
            <Routes>
                {Object.values(routeConfig).map(({ element, path }) => (
                    <Route
                        key={path}
                        path={path}
                        element={<div className={classes.pageWrapper}>{element}</div>}
                    />
                ))}
                <Route path='/app/*' element={<Navigate to='/app' replace />} />
            </Routes>
        );
    }
};

export default AppRouter;
