import { FooterTabs } from '@/entities/app-footer';
import { MainPage } from '@/pages/main';
import { ScreenLayoutProps } from '../types';
import { AccountTypes } from 'tutor-online-global-shared';

export const MainMenuPageLayoutProps: ScreenLayoutProps = {
    Page: MainPage,
    tab: FooterTabs.MAIN_MENU,
    allowedAccountTypes: [AccountTypes.USER]
};
