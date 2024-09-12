import { UserStateRepository } from '@/core/repositories/user-state/repository';
import { User, UserAuthStatus, UserState } from '@/core/repositories/user-state/types';
import { StateService } from '@/view/mobile/shared/lib/clear/services/state';

export interface UserService extends StateService<UserState, UserStateRepository> {
    setUser: (userState: User | null) => void;
    setUserAuthStatus: (userAuthStatus: UserAuthStatus) => void;

    getUser: () => User | null;
    useUser: () => User | null;

    getUserAuthStatus: () => UserAuthStatus;
    useUserAuthStatus: () => UserAuthStatus | undefined;
}
