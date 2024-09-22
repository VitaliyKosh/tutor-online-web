import { ApiRepository } from '@/core/repositories/api/repository';
import { AuthApiService as IAuthApiService } from './types';
import { Service } from '@/shared/clear';
import { SignInRes, VerifyTokenRes } from 'tutor-online-global-shared';

export class AuthApiService extends Service<ApiRepository> implements IAuthApiService {
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

    async checkAuth(options?: { isRetry?: boolean }) {
        const res = await this.$repository.get<VerifyTokenRes>('/auth/refresh', {
            data: { _isRetry: options?.isRetry },
        });

        return res.data.user;
    }
}
