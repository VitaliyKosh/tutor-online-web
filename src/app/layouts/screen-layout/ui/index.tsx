import { Suspense, useLayoutEffect, useState } from 'react';
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
    const [dynamicTitleText, setDynamicTitleText] = useState<string | undefined>(undefined);

    const params = useParams();

    const user = useAppSelector((s) => s.user.user);
    const authStatus = useAppSelector((s) => s.user.authStatus);
    const location = useLocation();

    const isHeader = Boolean(dynamicTitleText || headerTitle || dynamicHeader);
    const isFooter = Boolean(tab);

    const isStandaloneIphoneXValue = isStandaloneIphoneX();
    const titleTextFromProps = headerTitle;

    const useHeaderTitle = (value: string | undefined) => {
        useLayoutEffect(() => {
            setDynamicTitleText(value);

            return () => {
                setDynamicTitleText(undefined);
            };
        }, [value]);

        return setDynamicTitleText;
    };

    if (
        authStatus === UserAuthStatus.SIGN_OUT &&
        location.pathname !== paths.getRoutePath(RouteNames.LOGIN)
    ) {
        return <Navigate to={paths.getRoutePath(RouteNames.LOGIN)} />;
    }

    if (!user && location.pathname !== paths.getRoutePath(RouteNames.LOGIN)) {
        return <Navigate to={paths.getRoutePath(RouteNames.LOGIN)} />;
    }

    if (
        allowedAccountTypes &&
        user &&
        (!user.accountType || !allowedAccountTypes.includes(user.accountType))
    ) {
        if (user.accountType === AccountTypes.NOT_ACTIVATED) {
            return <Navigate to={paths.getRoutePath(RouteNames.NOT_ACTIVATED)} />;
        } else {
            return <Navigate to={paths.getRoutePath(RouteNames.ERROR_404)} />;
        }
    }

    const pageKey = params.id ?? routeName;

    const pageProps = {
        className: classNames(s.page, {
            [s.iphonePadding]: isStandaloneIphoneXValue && !isFooter,
        }),
        header: isHeader,
        footer: isFooter,
        isStandaloneIphoneX: isStandaloneIphoneXValue,
        useHeaderTitle: useHeaderTitle,
        params: params,
    };

    return (
        <div className={s.screenLayout}>
            {isHeader && (
                <AppHeader
                    header={titleTextFromProps ?? dynamicTitleText ?? ''}
                    defaultPreviousRouteName={defaultPreviousRouteName}
                    showBackButton={showBackButton}
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
