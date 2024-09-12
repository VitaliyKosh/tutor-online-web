import { User } from '@/core/repositories/user-state/types';

export interface AuthService {
    signIn: (options: { login: string; password: string }) => Promise<User>;
    signOut: () => Promise<void>;
    checkAuth: () => Promise<User>;
}
