import { ModulePage } from '@/view/mobile/pages/module';
import { ScreenLayoutProps } from '../types';
import { AccountTypes } from 'tutor-online-global-shared';
import { ModulePageFallback } from '@/view/mobile/pages/module/ui/fallback';

export const modulePageLayoutProps: ScreenLayoutProps = {
    Page: ModulePage,
    Fallback: ModulePageFallback,
    allowedAccountTypes: [AccountTypes.USER],
    dynamicHeader: true,
};
