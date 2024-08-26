import { Suspense, useState } from 'react';
import { pagesProps } from '@/app/providers/router/model/page-props';
import { RouteNames } from '@/shared/consts/paths';
import { AppFooter } from '@/widgets/app-footer';
import { AppHeader } from '@/widgets/app-header';
import s from './index.module.css';
import classNames from 'classnames';
import { isStandaloneIphoneX } from '@/shared/lib/mobile';

interface Props {
    routeName: RouteNames;
}

export const ScreenLayout = ({ routeName }: Props) => {
    const { Page, headerTitle, tab, defaultPreviousRouteName } = pagesProps[routeName];
    const [dynamicTitleText, setDynamicTitleText] = useState<string | undefined>(undefined);

    const isHeader = Boolean(dynamicTitleText || headerTitle);
    const isFooter = Boolean(tab);

    const isStandaloneIphoneXValue = isStandaloneIphoneX();

    const titleTextFromProps = headerTitle;

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
