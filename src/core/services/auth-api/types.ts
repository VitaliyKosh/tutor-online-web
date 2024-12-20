import { User } from '@/core/repositories/user-state/types';

export interface AuthApiService {
    signIn: (options: { login: string; password: string }) => Promise<User>;
    signOut: () => Promise<void>;
    checkAuth: (options?: { isRetry?: boolean }) => Promise<User>;
}
