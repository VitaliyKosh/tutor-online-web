import { FooterTabs } from '@/entities/app-footer';
import { FooterNavBar } from '@/shared/ui/footer-nav-bar';
import { footerLinks } from '../model/consts';

interface Props {
    activeTab: FooterTabs;
    isStandaloneIphoneX: boolean;
}

export const AppFooter = ({ activeTab, isStandaloneIphoneX }: Props) => {
    return (
        <FooterNavBar
            iphonePadding={isStandaloneIphoneX}
            footerLinks={footerLinks}
            activeTab={activeTab}
        />
    );
};
