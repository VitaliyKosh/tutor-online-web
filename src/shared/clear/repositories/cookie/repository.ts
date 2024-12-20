import { Repository } from '../../repository';

export class CookieRepository<K extends string> extends Repository {
    setCookie(key: K, value: string): void {
        document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
    }

    getCookie(key: K): string | null {
        const cookieArr = document.cookie.split('; ');

        for (let i = 0; i < cookieArr.length; i++) {
            const cookiePair = cookieArr[i].split('=');

            if (key === cookiePair[0]) {
                return cookiePair[1];
            }
        }

        return null;
    }
}
