import { SDUIPage } from '@/pages/sdui';
import { ScreenLayoutProps } from '../types';

export const SDUIPageLayoutProps: ScreenLayoutProps = {
    Page: SDUIPage,
    // Fallback: ModulePageFallback,
    // allowedAccountTypes: [AccountTypes.USER],
    dynamicHeader: true,
};
