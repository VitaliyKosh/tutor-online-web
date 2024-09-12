import { PC } from '@/view/mobile/shared/types/page';
import { FooterTabs } from '@/view/mobile/components/app-footer';
import { RouteNames } from '@/view/mobile/shared/consts/paths';
import { AccountTypes } from 'tutor-online-global-shared';

export interface ScreenLayoutProps {
    Page: PC;
    Fallback?: PC;
    headerTitle?: string;
    tab?: FooterTabs;
    defaultPreviousRouteName?: RouteNames;
    showBackButton?: boolean;
    allowedAccountTypes?: AccountTypes[];
    dynamicHeader?: boolean;
}
