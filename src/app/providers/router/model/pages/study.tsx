import { FooterTabs } from '@/entities/app-footer';
import { MainPage } from '@/pages/main';
import { ScreenLayoutProps } from '../types';

export const StudyPageLayoutProps: ScreenLayoutProps = {
    Page: MainPage,
    headerTitle: 'Main',
    tab: FooterTabs.STUDY,
};