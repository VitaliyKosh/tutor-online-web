import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { paths } from '@/shared/lib/path';
import s from './index.module.css';
import { Text } from '@/shared/ui/text';
import { FooterNavBarLink } from '../model/types';

interface Props {
    className?: string;
    iphonePadding?: boolean;
    footerLinks: FooterNavBarLink[];
    activeTab: string;
}

export const FooterNavBar = ({
    className,
    iphonePadding = false,
    footerLinks,
    activeTab,
}: Props) => {
    return (
        <nav
            className={classNames(s.footerNavBar, className, {
                [s.iphonePadding]: iphonePadding,
            })}
        >
            <ul className={s.linksWrapper}>
                {footerLinks.map((link) => {
                    const Content = link.Content;

                    return (
                        <li key={link.key} className={s.linkLi}>
                            <Link to={paths.getRoutePath(link.to)} className={s.link}>
                                <Content active={link.key === activeTab} />
                                <div
                                    className={classNames(s.linkLabel, {
                                        [s.activeLink]: link.key === activeTab,
                                    })}
                                >
                                    <Text textSize='s' textColor={link.key === activeTab ? 'primary' : 'tertiary'}>{link.label}</Text>
                                </div>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};
