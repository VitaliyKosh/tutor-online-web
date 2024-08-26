import { FooterTabs } from '@/entities/app-footer';
import { MainPage } from '@/pages/main';
import { ScreenLayoutProps } from '../types';

export const ProgressPageLayoutProps: ScreenLayoutProps = {
    Page: MainPage,
    headerTitle: 'Main',
    tab: FooterTabs.PROGRESS,
};