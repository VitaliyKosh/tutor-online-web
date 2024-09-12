import { useEffect, useState } from 'react';

export const useTimer = ({
    expirationTime,
    isDisabled = false,
}: {
    expirationTime: Date | undefined;
    isDisabled?: boolean;
}): { remainingText: string | undefined; isExpired: boolean } => {
    const [nowTime, setNowTime] = useState<Date>(new Date(Date.now()));

    useEffect(() => {
        if (isDisabled) {
            return;
        }

        const interval = setInterval(() => {
            requestAnimationFrame(() => {
                setNowTime(new Date(Date.now()));
            });
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, [isDisabled]);

    if (!expirationTime || isDisabled) {
        return { remainingText: undefined, isExpired: false };
    }

    const remainingTime = expirationTime.getTime() - nowTime.getTime();

    if (remainingTime < 0) {
        return { remainingText: undefined, isExpired: true };
    }

    let msec = remainingTime;
    const dd = Math.floor(msec / 1000 / 60 / 60 / 24);
    msec -= dd * 1000 * 60 * 60;
    const hh = Math.floor(msec / 1000 / 60 / 60);
    msec -= hh * 1000 * 60 * 60;
    const mm = Math.floor(msec / 1000 / 60);
    msec -= mm * 1000 * 60;
    const ss = Math.floor(msec / 1000);
    msec -= ss * 1000;

    function getDayDeclension(dayCount: number) {
        const forms = ['день', 'дня', 'дней'];
        const caseIndex =
            dayCount % 100 > 4 && dayCount % 100 < 20
                ? 2
                : [2, 0, 1, 1, 1, 2][dayCount % 10 < 5 ? dayCount % 10 : 5];
        return `${dayCount} ${forms[caseIndex]}`;
    }

    const withZero = (n: number): string => {
        return n >= 10 ? `${n}` : `0${n}`;
    };

    const remainingText =
        dd < 1 ? `${withZero(hh)}:${withZero(mm)}:${withZero(ss)}` : getDayDeclension(dd);

    return { remainingText, isExpired: false };
};
