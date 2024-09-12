import { ButtonHTMLAttributes, FC } from 'react';
import cls from './index.module.css';
import classNames from 'classnames';
import { Text } from '../text';
import { Size, TextColor } from 'tutor-online-global-shared';
import { TextType } from 'tutor-online-global-shared/dist/types/sdui/elements/text';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    textClassName?: string;
    textColor?: TextColor;
    textSize: Size;
    textType?: TextType 
}

const Button: FC<ButtonProps> = ({
    className,
    textClassName,
    children,
    textColor,
    textSize,
    textType,
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
            <Text textType={textType} className={textClassName} textSize={textSize} textColor={textColor}>
                {children}
            </Text>
        </button>
    );
};

export default Button;
