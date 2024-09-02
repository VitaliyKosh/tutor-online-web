import { FC, InputHTMLAttributes } from 'react';
import classes from './index.module.css';
import classNames from 'classnames';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string;
}

export const Input: FC<InputProps> = ({ className, ...otherProps }) => {
    return <input className={classNames(classes.input, className)} {...otherProps} />;
};
