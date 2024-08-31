import { FooterTabs } from '@/entities/app-footer';
import { ModulePage } from '@/pages/module';
import { ScreenLayoutProps } from '../types';
import { AccountTypes } from 'tutor-online-global-shared';
import { ModulePageFallback } from '@/pages/module/ui/fallback';

export const ModulePageLayoutProps: ScreenLayoutProps = {
    Page: ModulePage,
    Fallback: ModulePageFallback,
    tab: FooterTabs.MAIN,
    allowedAccountTypes: [AccountTypes.USER],
    dynamicHeader: true,
};
