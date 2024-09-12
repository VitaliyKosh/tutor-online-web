import { auth } from '@/core/app';
import { useOnce } from '@/view/mobile/shared/hooks/use-onse';

export const useAuth = () => {
    useOnce(() => {
        auth.checkAuth();
    });
};
