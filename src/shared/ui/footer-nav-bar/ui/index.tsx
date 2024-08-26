import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { paths } from '@/shared/lib/path';
import s from './index.module.css';
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
                {footerLinks.map((link) => (
                    <li key={link.key} className={s.linkLi}>
                        <Link
                            to={paths.getRoutePath(link.to)}
                            className={classNames(s.link, {
                                [s.activeLink]: link.key === activeTab,
                            })}
                        >
                            {link.content}
                            <div className={s.linkLabel}>{link.label}</div>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};
