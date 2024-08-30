import { AxiosResponse } from 'axios';
import $api, { API_URL } from '@/shared/lib/http';
import { SignInRes } from 'tutor-online-global-shared';

export default class PushService {
    static async subscribe({
        deviceId,
        subscription,
    }: {
        deviceId: string;
        subscription: PushSubscription;
    }): Promise<AxiosResponse<SignInRes>> {
        return await $api.post(API_URL + '/push/subscribe', { deviceId, subscription });
    }
}
