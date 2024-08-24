import { type FC } from 'react';
import classes from './SettingsPage.module.css';
import { faBell, faGear, faRotate } from '@fortawesome/free-solid-svg-icons';
import packageInfo from '../../../../../package.json';
import { privateRouteConfig } from '@/shared/config/route-config/index';
import MenuButton, { IMenuButton } from '@/shared/ui/menu/MenuButton/MenuButton';
import MenuContainer from '@/shared/ui/menu/MenuContainer/MenuContainer';

const SettingsPage: FC = () => {
    const items: IMenuButton[] = [
        {
            text: privateRouteConfig.SETTINGS_MAIN.title,
            path: privateRouteConfig.SETTINGS_MAIN.path,
            icon: faGear,
        },
        {
            text: privateRouteConfig.SETTINGS_UPDATE.title,
            path: privateRouteConfig.SETTINGS_UPDATE.path,
            icon: faRotate,
        },
        {
            text: privateRouteConfig.SETTINGS_NOTIFICATION.title,
            path: privateRouteConfig.SETTINGS_NOTIFICATION.path,
            icon: faBell,
        },
    ];

    return (
        <div className={classes.settingsPage}>
            <MenuContainer>
                {items.map((item) => (
                    <MenuButton
                        key={item.text}
                        text={item.text}
                        icon={item.icon}
                        path={item.path}
                        onClick={item.onClick}
                    />
                ))}
            </MenuContainer>
            <div className={classes.version}>
                <div className={classes.versionText}>Версия {packageInfo.version}</div>
            </div>
        </div>
    );
};

export default SettingsPage;
