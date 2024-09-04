import { ReactNode, useEffect, useState } from 'react';
import s from './index.module.css';
import { useAppSelector } from '@/shared/hooks/use-app-selector';
import { UserAuthStatus } from '@/shared/store/slices/user/types';
import classNames from 'classnames';

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
            requestAnimationFrame(() => {
                splash.classList.add('animate');
            });

            return () => {
                splash.removeEventListener('transitionend', onTransitionend);
            };
        }
    }, [globalLoading]);

    if (globalLoading) {
        return (
            <div className={s.pageWrapper}>
                <div className={s.loaderWrapper}>
                    <div className={s.loader}>
                        <div className={s.minusWrapper}>
                            <div className={s.minus} />
                        </div>
                        <div className={s.plusWrapper}>
                            <div className={classNames(s.plus, s.plus1)} />
                            <div className={classNames(s.plus, s.plus2)} />
                        </div>
                        <div className={s.multiplyWrapper}>
                            <div className={classNames(s.multiply, s.multiply1)} />
                            <div className={classNames(s.multiply, s.multiply2)} />
                        </div>
                        <div className={s.equalsWrapper}>
                            <div className={s.equals}>
                                <div className={s.equalsElement} />
                                <div className={s.equalsElement} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return children;
};
