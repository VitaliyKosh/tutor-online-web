import { UserStateRepository } from '@/core/repositories/user-state/repository';
import { User, UserAuthStatus, UserState } from '@/core/repositories/user-state/types';
import { StateService } from '@/shared/clear/services/state';

export interface UserStateService extends StateService<UserState, UserStateRepository> {
    setUser: (userState: User | null) => void;
    setUserAuthStatus: (userAuthStatus: UserAuthStatus) => void;

    getUser: () => User | null;
    useUser: () => User | null;

    getUserAuthStatus: () => UserAuthStatus;
    useUserAuthStatus: () => UserAuthStatus | undefined;
}
