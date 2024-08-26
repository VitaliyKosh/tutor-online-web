import { FooterTabs } from '@/entities/app-footer';
import { MainPage } from '@/pages/main';
import { ScreenLayoutProps } from '../types';

export const MainMenuPageLayoutProps: ScreenLayoutProps = {
    Page: MainPage,
    tab: FooterTabs.MAIN_MENU,
};
