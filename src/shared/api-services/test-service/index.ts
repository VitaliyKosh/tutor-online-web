import { AxiosResponse } from 'axios';
import $api, { API_URL } from '@/shared/lib/http';
import { GetTestResBody, GetUserActiveTestResBody } from 'tutor-online-global-shared';

export default class TestService {
    static async getTest(id: string): Promise<AxiosResponse<GetTestResBody>> {
        return await $api.get(API_URL + '/test/' + id);
    }
    static async getUserActiveTests(): Promise<AxiosResponse<GetUserActiveTestResBody>> {
        return await $api.get(API_URL + '/test/activeTests');
    }
}
