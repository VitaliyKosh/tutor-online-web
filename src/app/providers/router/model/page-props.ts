import { RouteNames } from '@/shared/consts/paths';
import {
    MainPageLayoutProps,
    MainMenuPageLayoutProps,
    ErrorPageLayoutProps,
    StudyPageLayoutProps,
    ProgressPageLayoutProps,
    TestsPageLayoutProps,
    LoginPageLayoutProps,
    NotFoundPageLayoutProps,
    NotActivatedPageLayoutProps,
} from './pages/index';
import { ScreenLayoutProps } from './types';

export const pagesProps: Record<RouteNames, ScreenLayoutProps> = {
    [RouteNames.MAIN]: MainPageLayoutProps,
    [RouteNames.STUDY]: StudyPageLayoutProps,
    [RouteNames.PROGRESS]: ProgressPageLayoutProps,
    [RouteNames.TESTS]: TestsPageLayoutProps,
    [RouteNames.ERROR]: ErrorPageLayoutProps,
    [RouteNames.MAIN_MENU]: MainMenuPageLayoutProps,
    [RouteNames.LOGIN]: LoginPageLayoutProps,
    [RouteNames.ERROR_404]: NotFoundPageLayoutProps,
    [RouteNames.NOT_ACTIVATED]: NotActivatedPageLayoutProps,
};
