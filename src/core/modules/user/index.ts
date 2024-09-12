import { UserService } from '@/core/services/user-state/types';
import { Dependencies, Module } from '@/view/mobile/shared/lib/clear';

export interface CounterModuleDeps extends Dependencies {
    userService: UserService;
}

export class UserModule extends Module<CounterModuleDeps> {
    getUser() {
        return this.$deps.userService.getUser();
    }

    useUser() {
        return this.$deps.userService.useUser();
    }

    getUserAuthStatus() {
        return this.$deps.userService.getUserAuthStatus();
    }

    useUserAuthStatus() {
        return this.$deps.userService.useUserAuthStatus();
    }
}
