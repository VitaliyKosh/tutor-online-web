import { ReactNode, useEffect } from 'react';
import { UserAuthStatus } from '@/core/repositories/user-state/types';
import { user } from '@/core/app';

const splash = document.querySelector('#splash');

interface Props {
    children: ReactNode;
}

export const GlobalLoader = ({ children }: Props) => {
    const userAuthStatus = user.useUserAuthStatus();

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

    if (globalLoading) {
        return null;
    }

    return children;
};
