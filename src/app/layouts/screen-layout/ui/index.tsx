import { Suspense, useState } from 'react';
import { pagesProps } from '@/app/providers/router/model/page-props';
import { RouteNames } from '@/shared/consts/paths';
import { AppFooter } from '@/widgets/app-footer';
import { AppHeader } from '@/widgets/app-header';
import s from './index.module.css';
import classNames from 'classnames';
import { isStandaloneIphoneX } from '@/shared/lib/mobile';
import { useAppSelector } from '@/shared/hooks/use-app-selector';
import { Navigate, useLocation } from 'react-router-dom';
import { paths } from '@/shared/lib/path';
import { AccountTypes } from 'tutor-online-global-shared';
import { UserAuthStatus } from '@/shared/store/slices/user/types';

interface Props {
    routeName: RouteNames;
}

export const ScreenLayout = ({ routeName }: Props) => {
    const { Page, headerTitle, tab, defaultPreviousRouteName, allowedAccountTypes } =
        pagesProps[routeName];
    const [dynamicTitleText, setDynamicTitleText] = useState<string | undefined>(undefined);

    const user = useAppSelector((s) => s.user.user);
    const authStatus = useAppSelector((s) => s.user.authStatus);
    const location = useLocation();

    const isHeader = Boolean(dynamicTitleText || headerTitle);
    const isFooter = Boolean(tab);

    const isStandaloneIphoneXValue = isStandaloneIphoneX();
    const titleTextFromProps = headerTitle;    

    if (
        authStatus === UserAuthStatus.SIGN_OUT &&
        location.pathname !== paths.getRoutePath(RouteNames.LOGIN)
    ) {
        return <Navigate to={paths.getRoutePath(RouteNames.LOGIN)} />;
    }

    if (!user && location.pathname !== paths.getRoutePath(RouteNames.LOGIN)) {
        return <Navigate to={paths.getRoutePath(RouteNames.LOGIN)} />;
    }

    console.log(allowedAccountTypes, user, user?.accountType, user && allowedAccountTypes?.includes(user?.accountType));
    

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

    return (
        <div className={s.screenLayout}>
            {isHeader && (
                <AppHeader
                    header={titleTextFromProps ?? dynamicTitleText}
                    defaultPreviousRouteName={defaultPreviousRouteName}
                />
            )}
            <div className={s.pageWrapper}>
                <Suspense fallback={'Loading...'}>
                    <Page
                        className={classNames(s.page, {
                            [s.iphonePadding]: isStandaloneIphoneXValue && !isFooter,
                        })}
                        header={isHeader}
                        footer={isFooter}
                        isStandaloneIphoneX={isStandaloneIphoneXValue}
                        setHeaderTitle={setDynamicTitleText}
                    />
                </Suspense>
            </div>
            {isFooter && tab && (
                <AppFooter activeTab={tab} isStandaloneIphoneX={isStandaloneIphoneXValue} />
            )}
        </div>
    );
};
