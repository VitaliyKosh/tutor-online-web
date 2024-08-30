import { FooterTabs } from '@/entities/app-footer';
import { MainPage } from '@/pages/main';
import { ScreenLayoutProps } from '../types';
import { AccountTypes } from 'tutor-online-global-shared';

export const TestsPageLayoutProps: ScreenLayoutProps = {
    Page: MainPage,
    headerTitle: 'TESTS',
    tab: FooterTabs.TESTS,
    allowedAccountTypes: [AccountTypes.USER]
};
