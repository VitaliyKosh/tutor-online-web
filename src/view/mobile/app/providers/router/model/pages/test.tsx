import { TestPage } from '@/view/mobile/pages/test';
import { ScreenLayoutProps } from '../types';
import { TestPageFallback } from '@/view/mobile/pages/test/ui/fallback';

export const testPageLayoutProps: ScreenLayoutProps = {
    Page: TestPage,
    Fallback: TestPageFallback,
    dynamicHeader: true,
};
