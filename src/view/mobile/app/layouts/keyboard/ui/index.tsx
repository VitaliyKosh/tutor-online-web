import { ReactNode, useEffect, useState } from 'react';
import { disablePageScroll, enablePageScroll, getScrollState } from 'scroll-lock';
import s from './index.module.css';
import { KeyboardContext } from '../keyboard-context';
import { info } from '@/view/mobile/shared/lib/info';

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
        // info.log('isKeyboardOpened', isKeyboardOpened);
        if (isKeyboardOpened) {
            disablePageScroll();
            // info.logValue('keyboard', true);
            // info.logValue('scrollState', getScrollState());
        } else {
            enablePageScroll();
            // info.logValue('keyboard', false);
            // info.logValue('scrollState', getScrollState());
        }
    }, [isKeyboardOpened]);

    useEffect(() => {
        const viewportScrollHandler = () => {
            window.scrollTo(0, 0);
        };

        const viewportResizeHandler = () => {
            if (!window.visualViewport) {
                return;
            }

            const keyboardHeight =
                window.visualViewport.offsetTop ||
                window.innerHeight - window.visualViewport?.height;

            // info.log('keyboardHeight', keyboardHeight);

            if (keyboardHeight >= 0) {
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
