import { PC } from '@/shared/types/page';
import { FooterTabs } from '@/entities/app-footer';
import { RouteNames } from '@/shared/consts/paths';
import { AccountTypes } from 'tutor-online-global-shared';

export interface ScreenLayoutProps {
    Page: PC;
    headerTitle?: string;
    tab?: FooterTabs;
    defaultPreviousRouteName?: RouteNames;
    allowedAccountTypes?: AccountTypes[];
}
