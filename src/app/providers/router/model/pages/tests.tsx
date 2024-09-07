import { FooterTabs } from '@/entities/app-footer';
import { MainPage } from '@/pages/main';
import { ScreenLayoutProps } from '../types';
import { AccountTypes } from 'tutor-online-global-shared';

export const testsPageLayoutProps: ScreenLayoutProps = {
    Page: MainPage,
    headerTitle: 'Тесты',
    tab: FooterTabs.TESTS,
    allowedAccountTypes: [AccountTypes.USER],
    showBackButton: false,
};
