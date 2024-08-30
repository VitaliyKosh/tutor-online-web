import axios, { AxiosHeaders, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { LocalStorageItems } from '@/shared/types/local-storage-items';

export const API_URL = import.meta.env.VITE_API_URL;

const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL,
});

// $api.interceptors.request.use((config: InternalAxiosRequestConfig<any>) => {
//     if (config.headers) {
//         (config.headers as AxiosHeaders).set(
//             'Authorization',
//             `Bearer ${window}`,
//         );
//     }
//     return config;
// });

// $api.interceptors.response.use(
//     (config: AxiosResponse) => {
//         return config;
//     },
//     async (error) => {
//         const originalRequest = error.config;

//         if (error.response.status === 401 && error.config && !error.config._isRetry) {
//             originalRequest._isRetry = true;
//             try {
//                 const response = await axios.get(`${API_URL}/auth/refresh`, {
//                     withCredentials: true,
//                 });
//                 localStorage.setItem(LocalStorageItems.TOKEN, response.data.accessToken);
//                 return await $api.request(originalRequest);
//             } catch (e) {
//                 console.log('Не авторизован')
//             }
//         }
//         throw error;
//     },
// );

export default $api;
