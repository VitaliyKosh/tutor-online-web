import { ButtonHTMLAttributes, FC } from 'react';
import cls from './index.module.css';
import classNames from 'classnames';

export enum ThemeButton {
    CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeButton;
}

const Button: FC<ButtonProps> = (props) => {
    const { className, children, theme, ...otherProps } = props;

    return (
        <button className={classNames(cls.button, theme && cls[theme], className)} {...otherProps}>
            {children}
        </button>
    );
};

export default Button;
