import { FooterTabs } from '@/entities/app-footer';
import { MainPage } from '@/pages/main';
import { ScreenLayoutProps } from '../types';
import { AccountTypes } from 'tutor-online-global-shared';

export const MainPageLayoutProps: ScreenLayoutProps = {
    Page: MainPage,
    headerTitle: 'Main',
    tab: FooterTabs.MAIN,
    allowedAccountTypes: [AccountTypes.USER]
};
