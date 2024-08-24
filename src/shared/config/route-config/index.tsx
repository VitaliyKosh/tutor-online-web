import { AboutPage } from '@/pages/AboutPage';
import { LoginPage } from '@/pages/LoginPage';
import { MainPage } from '@/pages/MainPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { ResetPassPage } from '@/pages/ResetPassPage';
import NotificationsPage from '@/pages/Settings/NotificationsPage/ui/NotificationsPage';
import { SettingsPage } from '@/pages/Settings/SettingsPage';
import { Navigate, PathRouteProps } from 'react-router-dom';

export enum AppRoutes {
    RESET_PASS = 'RESET_PASS',
    LOGIN = 'LOGIN',
    NO_PWA = 'NO_PWA',
}

export interface IRouteProps extends PathRouteProps {
    title: string;
    showMenu: boolean | 1;
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.RESET_PASS]: '/app/resetPassword/:link',
    [AppRoutes.LOGIN]: '/app/login',
    [AppRoutes.NO_PWA]: '/app/*',
};

export const routeNames: Record<AppRoutes, string> = {
    [AppRoutes.RESET_PASS]: 'Сброс пароля',
    [AppRoutes.LOGIN]: 'Авторизация',
    [AppRoutes.NO_PWA]: '/app',
};

export const routeConfig: Record<AppRoutes, IRouteProps> = {
    [AppRoutes.RESET_PASS]: {
        path: RoutePath.RESET_PASS,
        title: routeNames.RESET_PASS,
        showMenu: false,
        element: <ResetPassPage />,
    },
    [AppRoutes.LOGIN]: {
        path: RoutePath.LOGIN,
        title: routeNames.LOGIN,
        showMenu: false,
        element: <LoginPage />,
    },
    [AppRoutes.NO_PWA]: {
        path: RoutePath.NO_PWA,
        title: routeNames.NO_PWA,
        showMenu: false,
        element: <LoginPage />,
    },
};

export enum PrivateAppRoutes {
    MAIN = 'MAIN',
    MAIN_REDIRECT = 'MAIN_REDIRECT',
    SETTINGS = 'SETTINGS',
    SETTINGS_MAIN = 'SETTINGS_MAIN',
    SETTINGS_UPDATE = 'SETTINGS_UPDATE',
    SETTINGS_NOTIFICATION = 'SETTINGS_NOTIFICATION',
    NOT_FOUND = 'NOT_FOUND',
}

export const privateRoutePath: Record<PrivateAppRoutes, string> = {
    [PrivateAppRoutes.MAIN]: '/app/main',
    [PrivateAppRoutes.MAIN_REDIRECT]: '/app/',
    [PrivateAppRoutes.SETTINGS]: '/app/settings',
    [PrivateAppRoutes.SETTINGS_MAIN]: '/app/settings/main',
    [PrivateAppRoutes.SETTINGS_UPDATE]: '/app/settings/update',
    [PrivateAppRoutes.SETTINGS_NOTIFICATION]: '/app/settings/notifications',
    [PrivateAppRoutes.NOT_FOUND]: '/app/*',
};

export const privateRouteNames: Record<PrivateAppRoutes, string> = {
    [PrivateAppRoutes.MAIN]: 'Личный кабинет',
    [PrivateAppRoutes.MAIN_REDIRECT]: 'Личный кабинет',
    [PrivateAppRoutes.SETTINGS]: 'Настройки',
    [PrivateAppRoutes.SETTINGS_MAIN]: 'Основные',
    [PrivateAppRoutes.SETTINGS_UPDATE]: 'Обновление',
    [PrivateAppRoutes.SETTINGS_NOTIFICATION]: 'Уведомления',
    [PrivateAppRoutes.NOT_FOUND]: '/pwa/*',
};

export const privateRouteConfig: Record<PrivateAppRoutes, IRouteProps> = {
    [PrivateAppRoutes.MAIN]: {
        path: privateRoutePath.MAIN,
        title: privateRouteNames.MAIN,
        showMenu: true,
        element: <MainPage />,
    },
    [PrivateAppRoutes.MAIN_REDIRECT]: {
        path: privateRoutePath.MAIN_REDIRECT,
        title: privateRouteNames.MAIN_REDIRECT,
        showMenu: true,
        element: <Navigate to='/app/main' replace />,
    },
    [PrivateAppRoutes.SETTINGS]: {
        path: privateRoutePath.SETTINGS,
        title: privateRouteNames.SETTINGS,
        showMenu: true,
        element: <SettingsPage />,
    },
    [PrivateAppRoutes.SETTINGS_MAIN]: {
        path: privateRoutePath.SETTINGS_MAIN,
        title: privateRouteNames.SETTINGS_MAIN,
        showMenu: true,
        element: <AboutPage />,
    },
    [PrivateAppRoutes.SETTINGS_UPDATE]: {
        path: privateRoutePath.SETTINGS_UPDATE,
        title: privateRouteNames.SETTINGS_UPDATE,
        showMenu: true,
        element: <AboutPage />,
    },
    [PrivateAppRoutes.SETTINGS_NOTIFICATION]: {
        path: privateRoutePath.SETTINGS_NOTIFICATION,
        title: privateRouteNames.SETTINGS_NOTIFICATION,
        showMenu: true,
        element: <NotificationsPage />,
    },
    [PrivateAppRoutes.NOT_FOUND]: {
        path: privateRoutePath.NOT_FOUND,
        title: privateRouteNames.NOT_FOUND,
        showMenu: true,
        element: <NotFoundPage />,
    },
};

export enum AdminAppRoutes {
    ALL_USERS = 'ALL_USERS',
}

export const adminRoutePath: Record<AdminAppRoutes, string> = {
    [AdminAppRoutes.ALL_USERS]: '/app/chat/users',
};

export const adminRouteNames: Record<AdminAppRoutes, string> = {
    [AdminAppRoutes.ALL_USERS]: 'Все пользователи',
};

export const adminRouteConfig: Record<AdminAppRoutes, IRouteProps> = {
    [AdminAppRoutes.ALL_USERS]: {
        path: adminRoutePath.ALL_USERS,
        title: adminRouteNames.ALL_USERS,
        showMenu: true,
        element: <div></div>,
    },
};
