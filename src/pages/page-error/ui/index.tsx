import { FC, PropsWithChildren } from 'react';
import Button from '@/shared/ui/button';
import cls from './index.module.css';
import classNames from 'classnames';

interface PageErrorProps {
    className?: string;
}

export const PageError: FC<PropsWithChildren<PageErrorProps>> = ({
    className,
    // children,
}) => {
    const reloadPage = (): void => {
        location.reload();
    };

    return (
        <div className={classNames(cls.pageError, className)}>
            <p>неизвестная ошибка</p>
            <Button onClick={reloadPage}>обновить</Button>
            <a href='/app'>на главную</a>
        </div>
    );
};
