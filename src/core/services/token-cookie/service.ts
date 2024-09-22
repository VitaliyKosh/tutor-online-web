import { Service } from '@/shared/clear';
import { CookieRepository } from '@/core/repositories/cookie/repository';
import { CookieNames } from '@/core/repositories/cookie/types';
import { AuthTokenService } from './types';

export class AuthTokenCookieService extends Service<CookieRepository> implements AuthTokenService {
    getAccessToken() {
        return this.$repository.getCookie(CookieNames.AccessToken);
    }

    getRefreshToken() {
        return this.$repository.getCookie(CookieNames.RefreshToken);
    }

    getSessionId() {
        return this.$repository.getCookie(CookieNames.SessionId);
    }
}
