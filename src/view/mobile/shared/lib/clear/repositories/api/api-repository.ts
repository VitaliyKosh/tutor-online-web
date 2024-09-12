import { AxiosInstance } from 'axios';
import { Repository } from '../../repository';

export class AxiosApiRepository extends Repository {
    private readonly api: AxiosInstance;
    readonly apiUrl: string;

    get: AxiosInstance['get'];
    post: AxiosInstance['post'];
    patch: AxiosInstance['patch'];
    put: AxiosInstance['put'];
    delete: AxiosInstance['delete'];
    interceptors: AxiosInstance['interceptors'];

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
}
