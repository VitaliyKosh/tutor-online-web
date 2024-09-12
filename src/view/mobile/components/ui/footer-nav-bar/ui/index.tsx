import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { paths } from '@/view/mobile/shared/lib/path';
import s from './index.module.css';
import { Text } from '@/view/mobile/components/ui/text';
import { FooterNavBarLink } from '../model/types';

interface Props {
    className?: string;
    iphonePadding?: boolean;
    footerLinks: FooterNavBarLink[];
    activeTab: string;
    hide: boolean;
}

export const FooterNavBar = ({
    className,
    iphonePadding = false,
    footerLinks,
    activeTab,
    hide,
}: Props) => {
    return (
        <nav
            className={classNames(s.footerNavBar, className, {
                [s.iphonePadding]: iphonePadding,
                [s.hide]: hide,
            })}
        >
            <ul className={s.linksWrapper}>
                {footerLinks.map((link) => {
                    const Content = link.Content;

                    return (
                        <li key={link.key} className={s.linkLi}>
                            <Link
                                to={paths.getRoutePath(link.to)}
                                className={s.link}
                                replace={true}
                            >
                                <Content active={link.key === activeTab} />
                                <div
                                    className={classNames(s.linkLabel, {
                                        [s.activeLink]: link.key === activeTab,
                                    })}
                                >
                                    <Text
                                        textSize='s'
                                        textColor={link.key === activeTab ? 'primary' : 'tertiary'}
                                    >
                                        {link.label}
                                    </Text>
                                </div>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};
