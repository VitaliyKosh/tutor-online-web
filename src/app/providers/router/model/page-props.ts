import { RouteNames } from '@/shared/consts/paths';
import { ScreenLayoutProps } from './types';
import { studyPageLayoutProps } from './pages/study';
import { errorPageLayoutProps } from './pages/error-page';
import { loginPageLayoutProps } from './pages/login';
import { mainPageLayoutProps } from './pages/main';
import { mainMenuPageLayoutProps } from './pages/main-menu';
import { modulePageLayoutProps } from './pages/module';
import { notActivatedPageLayoutProps } from './pages/not-activated';
import { notFoundPageLayoutProps } from './pages/not-found';
import { progressPageLayoutProps } from './pages/progress';
import { sduiPageLayoutProps } from './pages/sdui';
import { testsPageLayoutProps } from './pages/tests';
import { testPageLayoutProps } from './pages/test';

export const pagesProps: Record<RouteNames, ScreenLayoutProps> = {
    [RouteNames.MAIN]: mainPageLayoutProps,
    [RouteNames.STUDY]: studyPageLayoutProps,
    [RouteNames.PROGRESS]: progressPageLayoutProps,
    [RouteNames.TESTS]: testsPageLayoutProps,
    [RouteNames.ERROR]: errorPageLayoutProps,
    [RouteNames.MAIN_MENU]: mainMenuPageLayoutProps,
    [RouteNames.LOGIN]: loginPageLayoutProps,
    [RouteNames.ERROR_404]: notFoundPageLayoutProps,
    [RouteNames.NOT_ACTIVATED]: notActivatedPageLayoutProps,
    [RouteNames.MODULE]: modulePageLayoutProps,
    [RouteNames.SDUI]: sduiPageLayoutProps,
    [RouteNames.TEST]: testPageLayoutProps,
};
