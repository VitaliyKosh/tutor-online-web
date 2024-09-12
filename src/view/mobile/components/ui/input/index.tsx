import { FC, InputHTMLAttributes } from 'react';
import s from './index.module.css';
import classNames from 'classnames';
import { Size, TextColor } from 'tutor-online-global-shared';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    textColor?: TextColor;
    textSize: Size;
}

export const Input: FC<InputProps> = ({ className, textColor, textSize, ...otherProps }) => {
    return (
        <input
            className={classNames(s.input, className)}
            {...otherProps}
            style={{
                font: `var(--text-${textSize})`,
                color: `var(--text-${textColor})`,
                ...otherProps.style,
            }}
        />
    );
};
