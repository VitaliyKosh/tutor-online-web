import { FooterTabs } from '@/view/mobile/components/app-footer';
import { MainPage } from '@/view/mobile/pages/main';
import { ScreenLayoutProps } from '../types';
import { AccountTypes } from 'tutor-online-global-shared';

export const testsPageLayoutProps: ScreenLayoutProps = {
    Page: MainPage,
    headerTitle: 'Тесты',
    tab: FooterTabs.TESTS,
    allowedAccountTypes: [AccountTypes.USER],
    showBackButton: false,
};
