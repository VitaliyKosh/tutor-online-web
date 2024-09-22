import { UserStateService } from '@/core/services/user-state/types';
import { Dependencies, Module } from '@/shared/clear';

export interface UserModuleDeps extends Dependencies {
    userService: UserStateService;
}

export class UserModule extends Module<UserModuleDeps> {
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
