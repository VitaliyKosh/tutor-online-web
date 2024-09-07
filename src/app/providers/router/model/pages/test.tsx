import { TestPage } from '@/pages/test';
import { ScreenLayoutProps } from '../types';
import { TestPageFallback } from '@/pages/test/ui/fallback';

export const testPageLayoutProps: ScreenLayoutProps = {
    Page: TestPage,
    Fallback: TestPageFallback,
    dynamicHeader: true,
};
