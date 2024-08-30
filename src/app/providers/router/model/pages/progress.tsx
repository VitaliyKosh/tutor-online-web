import { FooterTabs } from '@/entities/app-footer';
import { MainPage } from '@/pages/main';
import { ScreenLayoutProps } from '../types';
import { AccountTypes } from 'tutor-online-global-shared';

export const ProgressPageLayoutProps: ScreenLayoutProps = {
    Page: MainPage,
    headerTitle: 'PROGRESS',
    tab: FooterTabs.PROGRESS,
    allowedAccountTypes: [AccountTypes.USER]
};
