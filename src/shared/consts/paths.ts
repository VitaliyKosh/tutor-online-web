export enum GlobalRouteNames {
    NO_PWA = 'NO_PWA',
}

export enum RouteNames {
    MAIN = 'MAIN',
    STUDY = 'STUDY',
    PROGRESS = 'PROGRESS',
    TESTS = 'TESTS',
    MAIN_MENU = 'MAIN_MENU',
    ERROR = 'ERROR',
    LOGIN = 'LOGIN',
    ERROR_404 = 'ERROR_404',
    NOT_ACTIVATED = 'NOT_ACTIVATED',
    MODULE = 'MODULE',
    SDUI = 'SDUI',
    TEST = 'TEST',
}

export const routePaths: Record<RouteNames | GlobalRouteNames, string> = {
    [GlobalRouteNames.NO_PWA]: '/',
    // app
    [RouteNames.MAIN]: '/app',
    [RouteNames.STUDY]: '/app/study',
    [RouteNames.PROGRESS]: '/app/progress',
    [RouteNames.TESTS]: '/app/tests',
    [RouteNames.MAIN_MENU]: '/app/mainMenu',
    [RouteNames.ERROR]: '/app/error',
    [RouteNames.LOGIN]: '/app/login',
    [RouteNames.ERROR_404]: '/app/notFound',
    [RouteNames.NOT_ACTIVATED]: '/app/notActivated',
    [RouteNames.MODULE]: '/app/module/:id',
    [RouteNames.SDUI]: '/app/sdui/:id',
    [RouteNames.TEST]: '/app/test/:id',
};
