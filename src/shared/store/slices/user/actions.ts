import AuthService from '@/shared/api-services/auth-service';
import { signOut as signOutAction } from './index';
import { useDispatch } from 'react-redux';

export const useSignOut = () => {
    const dispatch = useDispatch();

    const signOut = async () => {
        await AuthService.signOut();
        dispatch(signOutAction());
    };

    return {
        signOut,
    };
};
