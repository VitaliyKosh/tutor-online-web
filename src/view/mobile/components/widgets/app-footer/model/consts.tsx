import { FooterTabs } from '@/view/mobile/components/app-footer';
import { RouteNames } from '@/view/mobile/shared/consts/paths';
import { FooterNavBarLink } from '@/view/mobile/components/ui/footer-nav-bar';
import { faHouse, faGraduationCap, faBookBookmark } from '@fortawesome/free-solid-svg-icons';
import { AppFooterIcon } from '../ui/icon';
import { FooterNavBarContent } from '@/view/mobile/components/ui/footer-nav-bar/model/types';

const footerText: Record<FooterTabs, string> = {
    [FooterTabs.MAIN]: 'Главная',
    [FooterTabs.STUDY]: 'Обучение',
    [FooterTabs.PROGRESS]: 'Прогресс',
    [FooterTabs.TESTS]: 'Тесты',
    [FooterTabs.MAIN_MENU]: 'Меню',
};

const footerIcons: Record<FooterTabs, FooterNavBarContent> = {
    [FooterTabs.MAIN]: ({ active }) => <AppFooterIcon icon={faHouse} active={active} />,
    [FooterTabs.STUDY]: ({ active }) => <AppFooterIcon icon={faBookBookmark} active={active} />,
    [FooterTabs.PROGRESS]: ({ active }) => <AppFooterIcon icon={faGraduationCap} active={active} />,
    [FooterTabs.TESTS]: ({ active }) => <AppFooterIcon icon={faGraduationCap} active={active} />,
    [FooterTabs.MAIN_MENU]: ({ active }) => <AppFooterIcon icon={faBookBookmark} active={active} />,
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
    Content: footerIcons[tab],
    label: footerText[tab],
}));
