import { FooterTabs } from '@/view/mobile/components/app-footer';
import { StudyPage } from '@/view/mobile/pages/study';
import { ScreenLayoutProps } from '../types';
import { AccountTypes } from 'tutor-online-global-shared';
import { StudyPageFallback } from '@/view/mobile/pages/study/ui/fallback';

export const studyPageLayoutProps: ScreenLayoutProps = {
    Page: StudyPage,
    Fallback: StudyPageFallback,
    headerTitle: 'Обучение',
    tab: FooterTabs.STUDY,
    allowedAccountTypes: [AccountTypes.USER],
    showBackButton: false,
};
