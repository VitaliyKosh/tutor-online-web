import { AxiosResponse } from 'axios';
import $api, { API_URL } from '@/shared/lib/http';
import { SignInRes, VerifyTokenRes } from 'tutor-online-global-shared';

export default class AuthService {
    // static async registration(login: string, pass: string): Promise<AxiosResponse<AuthResponse>> {
    //     return await $api.post(API_URL + '/auth/registration', { login, pass });
    // }
    static async signIn(login: string, password: string): Promise<AxiosResponse<SignInRes>> {
        return await $api.post(API_URL + '/auth/login', { login, password });
    }
    static async signOut(): Promise<void> {
        await $api.post(API_URL + '/auth/logout');
    }
    static async checkAuth(): Promise<AxiosResponse<VerifyTokenRes>> {
        return await $api.get(`${API_URL}/auth/refresh`);
    }
    // static async resetPasswordRequest(login: string): Promise<AxiosResponse<string>> {
    //     return await $api.post(API_URL + '/auth/resetPassword', { login });
    // }
    // static async resetPassword(link: string, pass: string): Promise<AxiosResponse<string>> {
    //     return await $api.post(API_URL + `/auth/resetPassword/${link}`, { pass });
    // }
}
