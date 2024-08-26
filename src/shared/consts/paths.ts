export enum RouteNames {
    MAIN = 'MAIN',
    ERROR = 'ERROR',
    STUDY = 'STUDY',
    PROGRESS = 'PROGRESS',
    TESTS = 'TESTS',
    MAIN_MENU = 'MAIN_MENU',
}

export const routePaths: Record<RouteNames, string> = {
    [RouteNames.MAIN]: '/app',
    [RouteNames.ERROR]: '/app/error',
    [RouteNames.STUDY]: '/app/study',
    [RouteNames.PROGRESS]: '/app/progress',
    [RouteNames.TESTS]: '/app/tests',
    [RouteNames.MAIN_MENU]: '/app/mainMenu',
};
