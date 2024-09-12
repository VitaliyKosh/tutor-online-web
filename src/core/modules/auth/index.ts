import { UserAuthStatus } from '@/core/repositories/user-state/types';
import { AuthApiService } from '@/core/services/auth/service';
import { AuthTokenService } from '@/core/services/token-cookie/types';
import { UserService } from '@/core/services/user-state/types';
import { Dependencies, Module } from '@/view/mobile/shared/lib/clear';

export interface AuthModuleDeps extends Dependencies {
    userService: UserService;
    authApiService: AuthApiService;
    authTokenService: AuthTokenService;
}

export class AuthModule extends Module<AuthModuleDeps> {
    async signIn({ login, password }: { login: string; password: string }) {
        const user = await this.$deps.authApiService.signIn({ login, password });

        this.$deps.userService.setUser(user);
        this.$deps.userService.setUserAuthStatus(UserAuthStatus.SIGN_IN);
    }

    async signOut() {
        await this.$deps.authApiService.signOut();

        this.$deps.userService.setUser(null);
        this.$deps.userService.setUserAuthStatus(UserAuthStatus.SIGN_OUT);
    }

    async checkAuth() {
        const refreshToken = this.$deps.authTokenService.getRefreshToken();

        if (refreshToken) {
            try {
                const user = await this.$deps.authApiService.checkAuth();

                this.$deps.userService.setUser(user);
                this.$deps.userService.setUserAuthStatus(UserAuthStatus.SIGN_IN);
            } catch {
                this.$deps.userService.setUserAuthStatus(UserAuthStatus.SIGN_OUT);
            }
        } else {
            this.$deps.userService.setUserAuthStatus(UserAuthStatus.SIGN_OUT);
        }
    }
}
