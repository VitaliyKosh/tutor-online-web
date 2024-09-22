import { AxiosInstance, AxiosResponse } from 'axios';
import { Repository } from '../../repository';

export type ResponseInterceptorOptions = {
    onAuthError: () => void;
};

export class AxiosApiRepository extends Repository {
    private readonly api: AxiosInstance;
    readonly apiUrl: string;

    get: AxiosInstance['get'];
    post: AxiosInstance['post'];
    patch: AxiosInstance['patch'];
    put: AxiosInstance['put'];
    delete: AxiosInstance['delete'];
    interceptors: AxiosInstance['interceptors'];

    onAuthError?: () => void;

    constructor({ axiosInstance, apiUrl }: { axiosInstance: AxiosInstance; apiUrl: string }) {
        super();
        this.api = axiosInstance;
        this.apiUrl = apiUrl;

        this.api.defaults.baseURL = apiUrl;

        this.get = this.api.get;
        this.post = this.api.post;
        this.patch = this.api.patch;
        this.put = this.api.put;
        this.delete = this.api.delete;
        this.interceptors = this.api.interceptors;
    }

    #onAuthError() {
        this.onAuthError?.();
    }

    setResponseInterceptor(
        onFulfilled?: (
            value: AxiosResponse,
            options: ResponseInterceptorOptions,
        ) => AxiosResponse | Promise<AxiosResponse>,
        onRejected?: (
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            error: any,
            options: ResponseInterceptorOptions,
        ) => AxiosResponse | Promise<AxiosResponse>,
    ) {
        const options: ResponseInterceptorOptions = {
            onAuthError: this.#onAuthError,
        };

        const onResponseFulfilled: Parameters<
            AxiosInstance['interceptors']['response']['use']
        >[0] = (value) => {
            return onFulfilled?.(value, options) ?? value;
        };

        const onResponseRejected: Parameters<
            AxiosInstance['interceptors']['response']['use']
        >[1] = (value) => {
            return onRejected?.(value, options) ?? value;
        };

        this.api.interceptors.response.use(onResponseFulfilled, onResponseRejected);
    }
}
