import { ApiRepository } from './repository';

import axios, { AxiosResponse } from 'axios';
import { auth } from '@/core/app';
import { ResponseInterceptorOptions } from '@/shared/clear/repositories/api/api-repository';
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

export const apiRepository = new ApiRepository({
    axiosInstance: $api,
    apiUrl: API_URL,
});

apiRepository.setResponseInterceptor(
    (config: AxiosResponse) => {
        return config;
    },
    async (error, options: ResponseInterceptorOptions) => {
        const originalRequest = error.config;
        const data = JSON.parse(originalRequest.data);

        if (error.response.status === 401 && data && !data._isRetry) {
            originalRequest.data = {
                ...data,
                _isRetry: true,
            };

            try {
                const isAuth = await auth.checkAuth({ isRetry: true });

                if (isAuth) {
                    return await $api.request(originalRequest);
                } else {
                    document.cookie = `${CookieNames.RefreshToken}=0; max-age=0`;
                    document.cookie = `${CookieNames.AccessToken}=0; max-age=0`;
                }
            } catch {
                options.onAuthError();
            }
        }
        throw error;
    },
);
