import { FC } from 'react';
import { Loader } from '@/view/mobile/components/ui/loader';
import cls from './index.module.css';
import classNames from 'classnames';

interface PageLoaderProps {
    className?: string;
    children?: React.ReactNode;
}

export const PageLoader: FC<PageLoaderProps> = (props) => {
    const { className, children, ...otherProps } = props;

    return (
        <div className={classNames(cls.pageLoader, className)} {...otherProps}>
            <Loader />
        </div>
    );
};
