import { RouteNames } from '@/shared/consts/paths';
import { MainPageLayoutProps, MainMenuPageLayoutProps, ErrorPageLayoutProps } from './pages/index';
import { ScreenLayoutProps } from './types';

export const pagesProps: Record<RouteNames, ScreenLayoutProps> = {
    [RouteNames.MAIN]: MainPageLayoutProps,
    [RouteNames.STUDY]: MainPageLayoutProps,
    [RouteNames.PROGRESS]: MainPageLayoutProps,
    [RouteNames.TESTS]: MainPageLayoutProps,
    [RouteNames.ERROR]: ErrorPageLayoutProps,
    [RouteNames.MAIN_MENU]: MainMenuPageLayoutProps,
};
