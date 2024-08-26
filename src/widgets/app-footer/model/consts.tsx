import { FooterTabs } from '@/entities/app-footer';
import { RouteNames } from '@/shared/consts/paths';
import { FooterNavBarLink } from '@/shared/ui/footer-nav-bar';
import { faHouse, faGraduationCap, faBookBookmark } from '@fortawesome/free-solid-svg-icons';
import { ReactNode } from 'react';
import { AppFooterIcon } from '../ui/icon';

const footerText: Record<FooterTabs, string> = {
    [FooterTabs.MAIN]: 'Главная',
    [FooterTabs.STUDY]: 'Обучение',
    [FooterTabs.PROGRESS]: 'Прогресс',
    [FooterTabs.TESTS]: 'Сообщения',
    [FooterTabs.MAIN_MENU]: 'Меню',
};

const footerIcons: Record<FooterTabs, ReactNode> = {
    [FooterTabs.MAIN]: <AppFooterIcon icon={faHouse} />,
    [FooterTabs.STUDY]: <AppFooterIcon icon={faBookBookmark} />,
    [FooterTabs.PROGRESS]: <AppFooterIcon icon={faGraduationCap} />,
    [FooterTabs.TESTS]: <AppFooterIcon icon={faGraduationCap} />,
    [FooterTabs.MAIN_MENU]: <AppFooterIcon icon={faBookBookmark} />,
};

const footerRoutes: Record<FooterTabs, RouteNames> = {
    [FooterTabs.MAIN]: RouteNames.MAIN,
    [FooterTabs.STUDY]: RouteNames.STUDY,
    [FooterTabs.PROGRESS]: RouteNames.PROGRESS,
    [FooterTabs.TESTS]: RouteNames.TESTS,
    [FooterTabs.MAIN_MENU]: RouteNames.MAIN_MENU,
};

export const footerLinks: FooterNavBarLink[] = Object.values(FooterTabs).map((tab) => ({
    key: tab,
    to: footerRoutes[tab],
    content: footerIcons[tab],
    label: footerText[tab],
}));
