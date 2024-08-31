import { FooterTabs } from '@/entities/app-footer';
import { StudyPage } from '@/pages/study';
import { ScreenLayoutProps } from '../types';
import { AccountTypes } from 'tutor-online-global-shared';
import { StudyPageFallback } from '@/pages/study/ui/fallback';

export const StudyPageLayoutProps: ScreenLayoutProps = {
    Page: StudyPage,
    Fallback: StudyPageFallback,
    headerTitle: 'Обучение',
    tab: FooterTabs.STUDY,
    allowedAccountTypes: [AccountTypes.USER],
    showBackButton: false,
};
