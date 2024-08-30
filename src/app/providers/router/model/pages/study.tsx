import { FooterTabs } from '@/entities/app-footer';
import { MainPage } from '@/pages/main';
import { ScreenLayoutProps } from '../types';
import { AccountTypes } from 'tutor-online-global-shared';

export const StudyPageLayoutProps: ScreenLayoutProps = {
    Page: MainPage,
    headerTitle: 'STUDY',
    tab: FooterTabs.STUDY,
    allowedAccountTypes: [AccountTypes.USER]
};
