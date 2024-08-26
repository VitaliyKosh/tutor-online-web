import { PC } from '@/shared/types/page';
import { FooterTabs } from '@/entities/app-footer';
import { RouteNames } from '@/shared/consts/paths';

export interface ScreenLayoutProps {
    Page: PC;
    headerTitle?: string;
    tab?: FooterTabs;
    defaultPreviousRouteName?: RouteNames;
}
