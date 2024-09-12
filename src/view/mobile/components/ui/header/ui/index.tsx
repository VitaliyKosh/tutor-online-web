import s from './index.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { Text } from '@/view/mobile/components/ui/text';
import { ReactNode, useEffect, useRef, useState } from 'react';
import classNames from 'classnames';

export interface Props {
    text: string;
    onBackButtonClick: () => void;
    showBackButton: boolean;
    rightAddon?: ReactNode;
}

export const Header = ({ showBackButton, text, onBackButtonClick, rightAddon }: Props) => {
    const textRef = useRef<HTMLDivElement>(null);
    const element = textRef.current;
    const [animateTitle, setAnimateHeader] = useState(false);

    useEffect(() => {
        if (!element) {
            setAnimateHeader(false);
            return;
        }

        const observer = new ResizeObserver(() => {
            if (element && element.scrollWidth > element.clientWidth) {
                setAnimateHeader(true);
            } else {
                setAnimateHeader(false);
            }
        });

        observer.observe(element);

        return () => {
            observer.unobserve(element);
            observer.disconnect();
            setAnimateHeader(false);
        };
    }, [element, text]);

    const onLocalBackButtonClick = () => {
        setAnimateHeader(false);
        onBackButtonClick();
    };

    return (
        <div className={s.header}>
            {showBackButton && (
                <button className={s.backButton} onClick={onLocalBackButtonClick}>
                    <FontAwesomeIcon className={s.backButtonIcon} icon={faChevronLeft} />
                </button>
            )}
            <div
                ref={textRef}
                className={classNames(s.headerTitle, {
                    [s.noBackButton]: !showBackButton,
                    [s.isRightAddon]: Boolean(rightAddon),
                })}
                data-testid='header-title'
            >
                {animateTitle && (
                    <Text
                        className={classNames(s.text, {
                            [s.animatePrevTitle]: animateTitle,
                        })}
                        textType='title'
                        textSize={'m'}
                        textColor='primary'
                    >
                        {text}
                    </Text>
                )}
                <Text
                    className={classNames(s.text, {
                        [s.animate]: animateTitle,
                    })}
                    textType='title'
                    textSize={'m'}
                    textColor='primary'
                >
                    {text}
                </Text>
                {animateTitle && (
                    <Text
                        className={classNames(s.text, {
                            [s.animateNextTitle]: animateTitle,
                        })}
                        textType='title'
                        textSize={'m'}
                        textColor='primary'
                    >
                        {text}
                    </Text>
                )}
            </div>
            <div className={s.rightAddon}>{rightAddon}</div>
        </div>
    );
};
