import { ReactNode, useEffect } from 'react';
import { useAppSelector } from '@/shared/hooks/use-app-selector';
import { UserAuthStatus } from '@/shared/store/slices/user/types';

const splash = document.querySelector('#splash');

interface Props {
    children: ReactNode;
}

export const GlobalLoader = ({ children }: Props) => {
    const userAuthStatus = useAppSelector((s) => s.user.authStatus);

    const userLoading = userAuthStatus === UserAuthStatus.LOADING;
    const globalLoading = userLoading;

    useEffect(() => {
        if (!splash) {
            return;
        }

        if (!globalLoading) {
            const onTransitionend = () => {
                splash.remove();
            };

            splash.addEventListener('transitionend', onTransitionend);
            setTimeout(() => {
                requestAnimationFrame(() => {
                    splash.classList.add('animate');
                });
            }, 200);

            return () => {
                splash.removeEventListener('transitionend', onTransitionend);
            };
        }
    }, [globalLoading]);

    return children;
};
