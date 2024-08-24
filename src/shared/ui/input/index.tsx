import { FC, InputHTMLAttributes } from 'react';
import classes from './index.module.css';
import classNames from 'classnames';

export enum ThemeInput {
    CLEAR = 'clear',
    DEFAULT = 'default',
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    theme?: ThemeInput;
}

const Input: FC<InputProps> = (props) => {
    const { className, children, theme, ...otherProps } = props;

    return (
        <input
            className={classNames(classes.input, theme && classes[theme], className)}
            {...otherProps}
        />
    );
};

export default Input;
