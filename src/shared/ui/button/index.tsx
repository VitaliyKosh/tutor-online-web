import { ButtonHTMLAttributes, FC } from 'react';
import cls from './index.module.css';
import classNames from 'classnames';
import { Text } from '../text';
import { Size, TextColor } from 'tutor-online-global-shared';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    textClassName?: string;
    textColor?: TextColor;
    textSize: Size;
}

const Button: FC<ButtonProps> = ({
    className,
    textClassName,
    children,
    textColor,
    textSize,
    ...otherProps
}) => {
    return (
        <button
            className={classNames(cls.button, className)}
            {...otherProps}
            style={{
                ...otherProps.style,
            }}
        >
            <Text className={textClassName} textSize={textSize} textColor={textColor}>
                {children}
            </Text>
        </button>
    );
};

export default Button;
