import { UserStateRepository } from '@/core/repositories/user-state/repository';
import { UserAuthStatus, UserState, User } from '@/core/repositories/user-state/types';
import { StateService } from '@/shared/clear/services/state';
import { UserStateService as IUserStateService } from './types';

export class UserStateService
    extends StateService<UserState, UserStateRepository>
    implements IUserStateService
{
    setUser(user: User | null) {
        this.$repository.setState({
            user,
        });
    }

    setUserAuthStatus(authStatus: UserAuthStatus) {
        this.$repository.setState({
            authStatus,
        });
    }

    getUser() {
        return this.$repository.state.user;
    }

    useUser() {
        return this.useObservableValue((s) => s.user) ?? null;
    }

    getUserAuthStatus() {
        return this.$repository.state.authStatus;
    }

    useUserAuthStatus() {
        return this.useObservableValue((s) => s.authStatus);
    }
}
