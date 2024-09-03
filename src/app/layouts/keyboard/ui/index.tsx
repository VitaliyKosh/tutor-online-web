import { ReactNode, useEffect, useState } from 'react';
import { disablePageScroll, enablePageScroll, getScrollState } from 'scroll-lock';
import s from './index.module.css';
import { KeyboardContext } from '../keyboard-context';
import { info } from '@/shared/lib/info';

interface Props {
    children: ReactNode;
}

const preventZoom = (e: TouchEvent) => {
    if (e.touches.length > 1) {
        e.preventDefault();
    }
};

export const KeyboardLayout = ({ children }: Props) => {
    const [isKeyboardOpened, setIsKeyboardOpened] = useState(false);

    useEffect(() => {
        info.log('isKeyboardOpened', isKeyboardOpened);
        if (isKeyboardOpened) {
            window.scrollTo(0, 0);
            disablePageScroll();
            info.logValue('keyboard', true);
            info.logValue('scrollState', getScrollState());
        } else {
            enablePageScroll();
            info.logValue('keyboard', false);
            info.logValue('scrollState', getScrollState());
            if (!getScrollState()) {
                setTimeout(() => {
                    enablePageScroll();
                }, 500);
            }
        }
    }, [isKeyboardOpened]);

    useEffect(() => {
        const viewportScrollHandler = () => {
            info.log('viewportScrollHandler');
            window.scrollTo(0, 0);
        };

        const viewportResizeHandler = () => {
            info.log('ResizeHandler offsetTop', window.visualViewport?.offsetTop);
            window.scrollTo(0, 0);

            if (window.visualViewport && window.visualViewport.offsetTop >= 0) {
                const keyboardHeight =
                    window.innerHeight -
                    window.visualViewport.height -
                    window.visualViewport.offsetTop;

                if (keyboardHeight < 0) {
                    return;
                }

                info.log('keyboardHeight', keyboardHeight);

                document.getElementById(
                    'keyboard-h',
                )!.style.height = `calc(100vh - ${keyboardHeight}px)`;

                if (keyboardHeight > 0) {
                    setIsKeyboardOpened(true);
                } else {
                    setIsKeyboardOpened(false);
                }
            }
        };

        document.addEventListener('touchstart', preventZoom, {
            passive: false,
        });

        document.addEventListener('touchmove', preventZoom, {
            passive: false,
        });

        window.visualViewport?.addEventListener('scroll', viewportScrollHandler);
        window.visualViewport?.addEventListener('resize', viewportResizeHandler);

        return () => {
            document.removeEventListener('touchstart', preventZoom);
            document.removeEventListener('touchmove', preventZoom);
            window.visualViewport?.removeEventListener('scroll', viewportScrollHandler);
            window.visualViewport?.removeEventListener('resize', viewportResizeHandler);
        };
    }, []);

    return (
        <div id='keyboard-h' className={s.keyboardHeightContainer}>
            <KeyboardContext.Provider value={{ isOpened: isKeyboardOpened }}>
                {children}
            </KeyboardContext.Provider>
        </div>
    );
};
