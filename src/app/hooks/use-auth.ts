import AuthService from '@/shared/api-services/auth-service';
import { useOnce } from '@/shared/hooks/use-onse';
import { getCookie } from '@/shared/lib/helpers/get-cookie';
import { signIn } from '@/shared/store/slices/user';
import { UserAuthStatus, UserState } from '@/shared/store/slices/user/types';
import { CookieNames } from '@/shared/types/cookie';
import { useDispatch } from 'react-redux';

const checkAuth = async ({ signInAction }: { signInAction: (payload: UserState) => void }) => {
    const refreshToken = getCookie(CookieNames.RefreshToken);

    if (refreshToken) {
        try {
            const checkAuthRes = await AuthService.checkAuth();
            signInAction({
                user: checkAuthRes.data.user,
                authStatus: UserAuthStatus.SIGN_IN,
            });
        } catch {
            signInAction({
                user: null,
                authStatus: UserAuthStatus.SIGN_OUT,
            });
        }
    } else {
        signInAction({
            user: null,
            authStatus: UserAuthStatus.SIGN_OUT,
        });
    }
};

export const useAuth = () => {
    const dispatch = useDispatch();

    const signInAction = (payload: UserState) => {
        dispatch(signIn(payload));
    };

    useOnce(() => {
        checkAuth({ signInAction });
    });
};
