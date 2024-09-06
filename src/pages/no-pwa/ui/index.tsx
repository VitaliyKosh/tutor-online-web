import { RouteNames } from '@/shared/consts/paths';
import { getIsStandalone } from '@/shared/lib/mobile';
import { paths } from '@/shared/lib/path';
import React, { FC, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import s from './index.module.css';
import { Gap } from '@/shared/ui/gap';
import Button from '@/shared/ui/button';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import getIsIos from '@/shared/lib/device/isIOS';
import classNames from 'classnames';

interface MainPageProps {
    className?: string;
    children?: React.ReactNode;
}

enum InstallPromptTypes {
    None = 'None',
    FullPage = 'FullPage',
    Button = 'Button',
}

const isStandalone = getIsStandalone();
const isIos = getIsIos();

const additionalAppInfo = [
    {
        key: 'rating',
        topContent: (
            <>
                5.0
                <FontAwesomeIcon className={s.star} icon={faStar} />
            </>
        ),
        subContent: <div>Оценка</div>,
    },
    {
        key: 'version',
        topContent: <div>{APP_VERSION}</div>,
        subContent: <div>Версия</div>,
    },
    {
        key: 'size',
        topContent: <div>0 МБ</div>,
        subContent: <div>Размер</div>,
    },
];

const screenshots = [
    '/icons/screenshots/screenshot-mobile-3.png',
    '/icons/screenshots/screenshot-mobile-3.png',
    '/icons/screenshots/screenshot-mobile-1.png',
    '/icons/screenshots/screenshot-mobile-2.png',
];

const iosInstructions = [
    'Нажмите на значок “Поделиться” (квадрат с стрелкой вверх) в нижней части экрана',
    'Прокрутите вниз и выберите “На экран «Домой»”',
    'Подтвердите установку, нажав “Добавить” в правом верхнем углу',
    'Приложение готово к запуску!',
];

const androidInstructions = [
    'Откройте страницу через мобильный Google Chrome',
    'Нажмите на три точки в правом верхнем углу браузера, чтобы открыть меню',
    'Выберите "Добавить на главный экран"',
    'Подтвердите установку, нажав “Добавить” в появившемся окне',
    'Приложение появится на вашем главном экране',
    'Приложение готово к запуску!',
];

const NoPWAPage: FC<MainPageProps> = () => {
    const navigate = useNavigate();
    const [deferredPrompt, setDeferredPrompt] = useState<Event | null>(null);
    const [splash, setSplash] = useState<boolean>(false);
    const installPromptType = useRef<InstallPromptTypes>(InstallPromptTypes.None);
    const instructionElement = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isStandalone) {
            navigate(paths.getRoutePath(RouteNames.MAIN));
        }

        const onBeforeInstallPrompt = (e: Event) => {
            installPromptType.current = InstallPromptTypes.Button;
            e.preventDefault();
            setDeferredPrompt(e);
        };

        const onAppInstalled = () => {
            console.log('INSTALL: Success');
        };

        window.addEventListener('beforeinstallprompt', onBeforeInstallPrompt);
        window.addEventListener('appinstalled', onAppInstalled);

        return () => {
            window.removeEventListener('beforeinstallprompt', onBeforeInstallPrompt);
            window.removeEventListener('appinstalled', onAppInstalled);
        };
    }, [navigate]);

    const onClickInstallButton = async () => {
        if (deferredPrompt) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const typedDeferredPrompt: any = deferredPrompt;

            typedDeferredPrompt.prompt();
            await typedDeferredPrompt.userChoice;

            setDeferredPrompt(null);
        } else {
            instructionElement.current?.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
            setSplash(true);

            setTimeout(() => {
                setSplash(false);
            }, 500);
        }
    };

    const instructions = isIos ? iosInstructions : androidInstructions;

    return (
        <div className={s.page}>
            <div className={s.appInfoContainer}>
                <div className={s.appIconContainer}>
                    <img className={s.appIcon} src='/icons/app-icon.webp' alt='Ежедневник' />
                </div>
                <div className={s.appInfo}>
                    <div className={s.appTitle}>
                        <div className={s.appUpTitle}>Образование</div>
                        <div className={s.appMainTitle}>Ежедневник</div>
                        <div className={s.appSubTitle}>Сервис онлайн занятий</div>
                    </div>
                    <div className={s.infoContainer}>
                        {additionalAppInfo.map((info) => (
                            <div key={info.key} className={s.infoBlock}>
                                <div className={s.infoTopContent}>{info.topContent}</div>
                                <div className={s.infoSubContent}>{info.subContent}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Gap size={'l'} />
            <div>
                <Button
                    textSize={'xl'}
                    className={s.installButton}
                    textClassName={s.installButtonText}
                    textColor='white'
                    onClick={onClickInstallButton}
                >
                    Установить
                </Button>
            </div>
            <Gap size={'l'} />
            <div className={s.title}>Скриншоты</div>
            <div className={s.screenshots}>
                {screenshots.map((screenshot, i) => (
                    <img
                        className={s.screenshot}
                        key={screenshot + i}
                        src={screenshot}
                        alt={'screenshot ' + i + 1}
                    />
                ))}
            </div>
            <div className={s.title} ref={instructionElement}>
                Инструкция по установке
            </div>
            <Gap size={'l'} />
            <div className={classNames(s.instructions, splash && s.splash)}>
                {instructions.map((instruction, i) => (
                    <div className={s.instruction} key={i}>
                        <div className={s.instructionNumber}>{i + 1}.</div>
                        <div className={s.instructionText}>{instruction}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NoPWAPage;
