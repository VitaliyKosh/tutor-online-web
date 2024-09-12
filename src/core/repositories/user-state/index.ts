import { UserStateRepository } from './repository';
import { UserAuthStatus } from './types';

export const userStateRepository = new UserStateRepository({
    initialState: {
        authStatus: UserAuthStatus.LOADING,
        user: null,
    },
});
