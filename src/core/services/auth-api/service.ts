import { ApiRepository } from '@/core/repositories/api/repository';
import { AuthService } from './types';
import { Service } from '@/view/mobile/shared/lib/clear';
import { SignInRes, VerifyTokenRes } from 'tutor-online-global-shared';

export class AuthApiService extends Service<ApiRepository> implements AuthService {
    async signIn({ login, password }: { login: string; password: string }) {
        const res = await this.$repository.post<SignInRes>('/auth/login', {
            login,
            password,
        });

        return res.data.user;
    }

    async signOut() {
        await this.$repository.post('/auth/logout');
    }

    async checkAuth() {
        const res = await this.$repository.get<VerifyTokenRes>('/auth/refresh');

        return res.data.user;
    }
}
