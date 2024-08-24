import { FC, PropsWithChildren } from 'react';
import Button from '@/shared/ui/button';
import cls from './index.module.css';
import classNames from 'classnames';

interface PageErrorProps {
    className?: string;
}

export const PageError: FC<PropsWithChildren<PageErrorProps>> = (props) => {
    const { className, children, ...otherProps } = props;

    const reloadPage = (): void => {
        location.reload();
    };

    return (
        <div className={classNames(cls.pageError, className)} {...otherProps}>
            <p>неизвестная ошибка</p>
            <Button onClick={reloadPage}>обновить</Button>
        </div>
    );
};
