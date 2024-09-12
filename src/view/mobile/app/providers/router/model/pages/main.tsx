import { FooterTabs } from '@/view/mobile/components/app-footer';
import { MainPage } from '@/view/mobile/pages/main';
import { ScreenLayoutProps } from '../types';
import { AccountTypes } from 'tutor-online-global-shared';

export const mainPageLayoutProps: ScreenLayoutProps = {
    Page: MainPage,
    tab: FooterTabs.MAIN,
    allowedAccountTypes: [AccountTypes.USER],
    showBackButton: false,
};
