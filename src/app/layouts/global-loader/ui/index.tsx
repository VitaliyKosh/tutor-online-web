import { ReactNode, useEffect, useState } from 'react';
import s from './index.module.css';
import { useAppSelector } from '@/shared/hooks/use-app-selector';
import { UserAuthStatus } from '@/shared/store/slices/user/types';

interface Props {
    children: ReactNode;
}

export const GlobalLoader = ({ children }: Props) => {
    const [globalLoading, setGlobalLoading] = useState(true);
    const userAuthStatus = useAppSelector((s) => s.user.authStatus);

    const userLoading = userAuthStatus === UserAuthStatus.LOADING;

    useEffect(() => {
        setGlobalLoading(userLoading);
    }, [userLoading]);

    if (globalLoading) {
        return <div className={s.pageWrapper}>Загрузка</div>;
    }

    return children;
};
