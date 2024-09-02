import { Suspense } from 'react';
import { pagesProps } from '@/app/providers/router/model/page-props';
import { RouteNames } from '@/shared/consts/paths';
import { AppFooter } from '@/widgets/app-footer';
import { AppHeader } from '@/widgets/app-header';
import s from './index.module.css';
import classNames from 'classnames';
import { isStandaloneIphoneX } from '@/shared/lib/mobile';
import { useAppSelector } from '@/shared/hooks/use-app-selector';
import { Navigate, useLocation, useParams } from 'react-router-dom';
import { paths } from '@/shared/lib/path';
import { AccountTypes } from 'tutor-online-global-shared';
import { UserAuthStatus } from '@/shared/store/slices/user/types';
import { useHeaderTitleLayout } from '../hooks/use-header-title-layout';
import { useHeaderAddonLayout } from '../hooks/use-header-addon-layout';

interface Props {
    routeName: RouteNames;
}

export const ScreenLayout = ({ routeName }: Props) => {
    const {
        Page,
        Fallback,
        headerTitle,
        tab,
        defaultPreviousRouteName,
        allowedAccountTypes,
        showBackButton = true,
        dynamicHeader = false,
    } = pagesProps[routeName];

    const { dynamicTitleText, useHeaderTitle } = useHeaderTitleLayout();
    const { dynamicTitleRightAddon, useHeaderAddon } = useHeaderAddonLayout();

    const params = useParams();

    const user = useAppSelector((s) => s.user.user);
    const authStatus = useAppSelector((s) => s.user.authStatus);
    const location = useLocation();

    const isHeader = Boolean(dynamicTitleText || headerTitle || dynamicHeader);
    const isFooter = Boolean(tab);

    console.log(authStatus);
    

    if (
        authStatus === UserAuthStatus.SIGN_OUT &&
        location.pathname !== paths.getRoutePath(RouteNames.LOGIN)
    ) {
        return <Navigate to={paths.getRoutePath(RouteNames.LOGIN)} replace={true} />;
    }

    if (!user && location.pathname !== paths.getRoutePath(RouteNames.LOGIN)) {
        return <Navigate to={paths.getRoutePath(RouteNames.LOGIN)} replace={true} />;
    }

    if (
        allowedAccountTypes &&
        user &&
        (!user.accountType || !allowedAccountTypes.includes(user.accountType))
    ) {
        if (user.accountType === AccountTypes.NOT_ACTIVATED) {
            return <Navigate to={paths.getRoutePath(RouteNames.NOT_ACTIVATED)} replace={true} />;
        } else {
            return <Navigate to={paths.getRoutePath(RouteNames.ERROR_404)} replace={true} />;
        }
    }

    const pageKey = routeName + (params.id ?? '');

    const isStandaloneIphoneXValue = isStandaloneIphoneX();

    const pageProps = {
        className: classNames(s.page, {
            [s.iphonePadding]: isStandaloneIphoneXValue && !isFooter,
        }),
        header: isHeader,
        footer: isFooter,
        isStandaloneIphoneX: isStandaloneIphoneXValue,
        useHeaderTitle: useHeaderTitle,
        useHeaderAddon: useHeaderAddon,
        params: params,
    };

    return (
        <div className={s.screenLayout}>
            {isHeader && (
                <AppHeader
                    header={headerTitle ?? dynamicTitleText ?? ''}
                    defaultPreviousRouteName={defaultPreviousRouteName}
                    showBackButton={showBackButton}
                    rightAddon={dynamicTitleRightAddon}
                />
            )}
            <div className={s.pageWrapper}>
                <Suspense fallback={Fallback ? <Fallback {...pageProps} /> : ''}>
                    <Page key={pageKey} {...pageProps} />
                </Suspense>
            </div>
            {isFooter && tab && (
                <AppFooter activeTab={tab} isStandaloneIphoneX={isStandaloneIphoneXValue} />
            )}
        </div>
    );
};
