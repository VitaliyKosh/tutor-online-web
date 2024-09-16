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
import { ApiRepository } from '../repositories/api/repository';
import { TestStateRepository } from '../repositories/test-state/repository';
import { ModulesStateRepository } from '../repositories/modules-state/repository';
import { UserStateRepository } from '../repositories/user-state/repository';
import { CookieRepository } from '../repositories/cookie/repository';
import { AuthApiService } from '../services/auth-api/types';
import { ModulesApiService } from '../services/modules-api/types';
import { ModulesStateService } from '../services/modules-state/types';
import { TestApiService } from '../services/test-api/types';
import { TestStateService } from '../services/test-state/types';
import { AuthTokenService } from '../services/token-cookie/types';
import { UserStateService } from '../services/user-state/types';
import { apiRepository } from '../repositories/api';
import { cookieRepository } from '../repositories/cookie';
import { modulesStateRepository } from '../repositories/modules-state';
import { testStateRepository } from '../repositories/test-state';
import { userStateRepository } from '../repositories/user-state';

export interface ApplicationModules {
    user: UserModule;
    auth: AuthModule;
    push: PushModule;
    modules: ModulesModule;
    test: TestModule;
}

export interface ApplicationServices {
    authApi: AuthApiService;
    modulesApi: ModulesApiService;
    modulesState: ModulesStateService;
    testApi: TestApiService;
    testState: TestStateService;
    tokenCookie: AuthTokenService;
    userState: UserStateService;
}

export interface ApplicationRepositories {
    api: ApiRepository;
    cookie: CookieRepository;
    modulesState: ModulesStateRepository;
    testState: TestStateRepository;
    userState: UserStateRepository;
}

export const app = new Application<
    ApplicationModules,
    ApplicationServices,
    ApplicationRepositories
>({
    repositories: {
        api: apiRepository,
        cookie: cookieRepository,
        modulesState: modulesStateRepository,
        testState: testStateRepository,
        userState: userStateRepository,
    },
    services: {
        authApi: authApiService,
        modulesApi: modulesApiService,
        modulesState: modulesStateService,
        testApi: testApiService,
        testState: testStateService,
        tokenCookie: authTokenCookieService,
        userState: userStateService,
    },
    modules: {
        user: new UserModule({
            deps: {
                userService: userStateService,
            },
        }),
        auth: new AuthModule({
            deps: {
                userService: userStateService,
                authService: authApiService,
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
