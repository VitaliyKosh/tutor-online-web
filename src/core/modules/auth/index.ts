import { UserAuthStatus } from '@/core/repositories/user-state/types';
import { AuthApiService } from '@/core/services/auth-api/types';
import { AuthTokenService } from '@/core/services/token-cookie/types';
import { UserStateService } from '@/core/services/user-state/types';
import { Dependencies, Module } from '@/view/mobile/shared/lib/clear';

export interface AuthModuleDeps extends Dependencies {
    userService: UserStateService;
    authService: AuthApiService;
    authTokenService: AuthTokenService;
}

export class AuthModule extends Module<AuthModuleDeps> {
    async signIn({ login, password }: { login: string; password: string }) {
        const user = await this.$deps.authService.signIn({ login, password });

        this.$deps.userService.setUser(user);
        this.$deps.userService.setUserAuthStatus(UserAuthStatus.SIGN_IN);
    }

    async signOut() {
        await this.$deps.authService.signOut();

        this.$deps.userService.setUser(null);
        this.$deps.userService.setUserAuthStatus(UserAuthStatus.SIGN_OUT);
    }

    async checkAuth(options?: { isRetry?: boolean }): Promise<boolean> {
        const refreshToken = this.$deps.authTokenService.getRefreshToken();

        if (refreshToken) {
            try {
                const user = await this.$deps.authService.checkAuth(
                    options?.isRetry ? { isRetry: options?.isRetry } : undefined,
                );

                this.$deps.userService.setUser(user);
                this.$deps.userService.setUserAuthStatus(UserAuthStatus.SIGN_IN);
            } catch {
                this.$deps.userService.setUserAuthStatus(UserAuthStatus.SIGN_OUT);
                return false;
            }
        } else {
            this.$deps.userService.setUserAuthStatus(UserAuthStatus.SIGN_OUT);
            return false;
        }

        console.log(999);

        return true;
    }
}
