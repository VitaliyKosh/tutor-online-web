import { SDUIPage } from '@/pages/sdui';
import { ScreenLayoutProps } from '../types';
import { SDUIPageFallback } from '@/pages/sdui/ui/fallback';

export const sduiPageLayoutProps: ScreenLayoutProps = {
    Page: SDUIPage,
    Fallback: SDUIPageFallback,
    dynamicHeader: true,
};
