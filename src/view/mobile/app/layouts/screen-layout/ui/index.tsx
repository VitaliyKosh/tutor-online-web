import { Suspense, useContext } from 'react';
import { pagesProps } from '@/view/mobile/app/providers/router/model/page-props';
import { RouteNames } from '@/view/mobile/shared/consts/paths';
import { AppFooter } from '@/view/mobile/components/widgets/app-footer';
import { AppHeader } from '@/view/mobile/components/widgets/app-header';
import s from './index.module.css';
import classNames from 'classnames';
import { isStandaloneIphoneX } from '@/view/mobile/shared/lib/mobile';
import { Navigate, useLocation, useParams } from 'react-router-dom';
import { paths } from '@/view/mobile/shared/lib/path';
import { AccountTypes } from 'tutor-online-global-shared';
import { useHeaderTitleLayout } from '../hooks/use-header-title-layout';
import { useHeaderAddonLayout } from '../hooks/use-header-addon-layout';
import { KeyboardContext } from '../../keyboard/keyboard-context';
import { usePwaGate } from '../hooks/use-pwa-gate';
import { user } from '@/core/app';
import { UserAuthStatus } from '@/core/repositories/user-state/types';

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
    const { isOpened: isKeyboardOpened } = useContext(KeyboardContext);

    const userState = user.useUser();
    const authStatus = user.useUserAuthStatus();
    const location = useLocation();

    usePwaGate();

    const isHeader = Boolean(dynamicTitleText || headerTitle || dynamicHeader);
    const isFooter = Boolean(tab);

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
        (!userState?.accountType || !allowedAccountTypes.includes(userState.accountType))
    ) {
        if (userState?.accountType === AccountTypes.NOT_ACTIVATED) {
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

    const isShowFooter = isFooter && tab;
    
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
                <Suspense fallback={Fallback ? <Fallback {...pageProps} /> : 'ererwere'}>
                    <Page key={pageKey} {...pageProps} />
                </Suspense>
            </div>
            {isShowFooter && (
                <AppFooter
                    activeTab={tab}
                    isStandaloneIphoneX={isStandaloneIphoneXValue}
                    isKeyboardOpened={isKeyboardOpened}
                />
            )}
        </div>
    );
};
