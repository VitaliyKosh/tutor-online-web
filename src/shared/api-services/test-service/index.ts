import { AxiosResponse } from 'axios';
import $api, { API_URL } from '@/shared/lib/http';
import { GetUserActiveTestResBody } from 'tutor-online-global-shared';

export default class TestService {
    static async getUserActiveTests(): Promise<AxiosResponse<GetUserActiveTestResBody>> {
        return await $api.get(API_URL + '/test/activeTests');
    }
}
