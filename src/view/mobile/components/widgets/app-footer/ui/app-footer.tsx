import { FooterTabs } from '@/view/mobile/components/app-footer';
import { FooterNavBar } from '@/view/mobile/components/ui/footer-nav-bar';
import { footerLinks } from '../model/consts';

interface Props {
    activeTab: FooterTabs;
    isStandaloneIphoneX: boolean;
    isKeyboardOpened: boolean;
}

export const AppFooter = ({ activeTab, isStandaloneIphoneX, isKeyboardOpened }: Props) => {
    return (
        <FooterNavBar
            iphonePadding={isStandaloneIphoneX}
            footerLinks={footerLinks}
            activeTab={activeTab}
            hide={isKeyboardOpened}
        />
    );
};
