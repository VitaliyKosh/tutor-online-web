import { CookieNames } from '@/shared/types/cookie';

export const getCookie = (name: CookieNames) => {
    const cookieArr = document.cookie.split('; ');

    for (let i = 0; i < cookieArr.length; i++) {
        const cookiePair = cookieArr[i].split('=');

        if (name == cookiePair[0]) {
            return cookiePair[1];
        }
    }
    return null;
};
