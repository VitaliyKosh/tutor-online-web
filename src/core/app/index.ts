import { Application } from '@/view/mobile/shared/lib/clear';
import { UserModule } from '../modules/user';
import { userStateService } from '../services/user-state';
import { AuthModule } from '../modules/auth';
import { authTokenCookieService } from '../services/token-cookie';
import { authApiService } from '../services/auth-api';
import { PushModule } from '../modules/push';
import { ModulesModule } from '../modules/modules';
import { modulesStateService } from '../services/modules-state';
import { modulesApiService } from '../services/modules-api';
import { TestModule } from '../modules/test';
import { testApiService } from '../services/test-api';
import { testStateService } from '../services/test-state';

export interface ApplicationModules {
    user: UserModule;
    auth: AuthModule;
    push: PushModule;
    modules: ModulesModule;
    test: TestModule;
}

export const app = new Application<ApplicationModules>({
    modules: {
        user: new UserModule({
            deps: {
                userService: userStateService,
            },
        }),
        auth: new AuthModule({
            deps: {
                userService: userStateService,
                authApiService,
                authTokenService: authTokenCookieService,
            },
        }),
        push: new PushModule({
            deps: {
                userService: userStateService,
            },
        }),
        modules: new ModulesModule({
            deps: {
                modulesStateService,
                modulesApiService,
            },
        }),
        test: new TestModule({
            deps: {
                testStateService,
                testApiService,
            },
        }),
    },
});

export const user = app.modules.user;
export const auth = app.modules.auth;
export const push = app.modules.push;
export const modules = app.modules.modules;
export const test = app.modules.test;
