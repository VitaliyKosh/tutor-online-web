import { SDUIPage } from '@/view/mobile/pages/sdui';
import { ScreenLayoutProps } from '../types';
import { SDUIPageFallback } from '@/view/mobile/pages/sdui/ui/fallback';

export const sduiPageLayoutProps: ScreenLayoutProps = {
    Page: SDUIPage,
    Fallback: SDUIPageFallback,
    dynamicHeader: true,
};
