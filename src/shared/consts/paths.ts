export enum RouteNames {
    MAIN = 'MAIN',
    ERROR = 'ERROR',
    STUDY = 'STUDY',
    PROGRESS = 'PROGRESS',
    TESTS = 'TESTS',
    MAIN_MENU = 'MAIN_MENU',
}

export const routePaths: Record<RouteNames, string> = {
    [RouteNames.MAIN]: '/',
    [RouteNames.ERROR]: '/error',
    [RouteNames.STUDY]: '/study',
    [RouteNames.PROGRESS]: '/progress',
    [RouteNames.TESTS]: '/tests',
    [RouteNames.MAIN_MENU]: '/mainMenu',
};
