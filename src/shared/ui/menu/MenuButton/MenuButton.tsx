import { FC } from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import classes from './MenuButton.module.css';
import MenuItem from '../MenuItem';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export interface IMenuButton {
    text: string;
    icon?: IconProp;
    path?: string;
    onClick?: () => void;
}

interface MenuButtonProps extends IMenuButton {
    className?: string;
}

const MenuButton: FC<MenuButtonProps> = (props) => {
    const navigate = useNavigate();

    const onClickHandler = () => {
        if (props.onClick) {
            props.onClick();
        } else if (props.path) {
            navigate(props.path);
        }
    };

    return (
        <MenuItem
            className={[props.className, classes.menuButton].join(' ')}
            onClick={onClickHandler}
        >
            <div className={classes.icon}>
                {props.icon && <FontAwesomeIcon icon={props.icon} />}
            </div>
            {props.text}
        </MenuItem>
    );
};

export default MenuButton;
