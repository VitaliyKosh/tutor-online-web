import { FooterTabs } from '@/entities/app-footer';
import { MainPage } from '@/pages/main';
import { ScreenLayoutProps } from '../types';
import { AccountTypes } from 'tutor-online-global-shared';

export const progressPageLayoutProps: ScreenLayoutProps = {
    Page: MainPage,
    headerTitle: 'Прогресс',
    tab: FooterTabs.PROGRESS,
    allowedAccountTypes: [AccountTypes.USER],
    showBackButton: false,
};
