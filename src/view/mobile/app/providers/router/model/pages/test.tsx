import { TestPage } from '@/view/mobile/pages/test';
import { ScreenLayoutProps } from '../types';
import { TestPageFallbackGlobal } from '@/view/mobile/pages/test/ui/fallback';

export const testPageLayoutProps: ScreenLayoutProps = {
    Page: TestPage,
    Fallback: TestPageFallbackGlobal,
    dynamicHeader: true,
};
