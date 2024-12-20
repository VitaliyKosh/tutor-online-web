import { FooterTabs } from '@/view/mobile/components/app-footer';
import { MenuPage } from '@/view/mobile/pages/menu';
import { ScreenLayoutProps } from '../types';
import { AccountTypes } from 'tutor-online-global-shared';

export const mainMenuPageLayoutProps: ScreenLayoutProps = {
    Page: MenuPage,
    tab: FooterTabs.MAIN_MENU,
    allowedAccountTypes: [AccountTypes.USER],
    showBackButton: false,
};
