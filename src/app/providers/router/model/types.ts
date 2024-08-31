import { PC } from '@/shared/types/page';
import { FooterTabs } from '@/entities/app-footer';
import { RouteNames } from '@/shared/consts/paths';
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
