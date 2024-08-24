import { FC } from 'react';

import cls from './index.module.css';
import classNames from 'classnames';

interface LoaderProps {
    className?: string;
    children?: React.ReactNode;
}

export const Loader: FC<LoaderProps> = (props) => {
    const { className, children, ...otherProps } = props;

    return (
        <div className={classNames(cls.loader, className)} {...otherProps}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};
