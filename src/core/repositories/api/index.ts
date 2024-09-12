import { ApiRepository } from './repository';

import axios, { AxiosHeaders, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { LocalStorageItems } from '@/view/mobile/shared/types/local-storage-items';
import { auth } from '@/core/app';
import { CookieNames } from '../cookie/types';

export const API_URL = import.meta.env.VITE_API_URL;

const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL,
});

// $api.interceptors.request.use((config: InternalAxiosRequestConfig<any>) => {
//     // if (config.headers) {
//     //     (config.headers as AxiosHeaders).set(
//     //         'Authorization',
//     //         `Bearer ${window}`,
//     //     );
//     // }
//     // console.log(document.cookie);
//     return config;
// });

$api.interceptors.response.use(
    (config: AxiosResponse) => {
        return config;
    },
    async (error) => {
        const originalRequest = error.config;

        if (error.response.status === 401 && error.config && !error.config._isRetry) {
            originalRequest._isRetry = true;

            try {
                console.log('error');
                // document.cookie = `${CookieNames.RefreshToken}=John; max-age=0`;
                await auth.checkAuth();


                return await $api.request(originalRequest);
            } catch (e) {
                console.log('Не авторизован');
            }
        }
        throw error;
    },
);

export const apiRepository = new ApiRepository({
    axiosInstance: $api,
    apiUrl: API_URL,
});
