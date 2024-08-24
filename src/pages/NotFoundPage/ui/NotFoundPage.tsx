import { FC } from 'react';
import cls from './NotFoundPage.module.css';
import classNames from 'classnames';

interface NotFoundPageProps {
    className?: string;
    children?: React.ReactNode;
}

export const NotFoundPage: FC<NotFoundPageProps> = (props) => {
    const { className, children, ...otherProps } = props;

    return (
        <div className={classNames(cls.notFoundPage, className)} {...otherProps}>
            Not Found
        </div>
    );
};
