import { useAuth } from '@/app/hooks/use-auth';
import { FC, PropsWithChildren } from 'react';

const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
    useAuth();

    return <>{children}</>;
};

export default AuthProvider;
