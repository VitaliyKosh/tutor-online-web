import React, { FC, useState } from 'react';
import s from './index.module.css';
import classNames from 'classnames';
import AuthService from '@/view/mobile/shared/api-services/auth-service';
import { Navigate, useNavigate } from 'react-router-dom';
import { paths } from '@/view/mobile/shared/lib/path';
import { RouteNames } from '@/view/mobile/shared/consts/paths';
import { Input } from '@/view/mobile/components/ui/input';
import { Gap } from '@/view/mobile/components/ui/gap';
import { Text } from '@/view/mobile/components/ui/text';
import Button from '@/view/mobile/components/ui/button';
import { ApiError } from '@/view/mobile/shared/types/api';
import { auth, user } from '@/core/app';
import { UserAuthStatus } from '@/core/repositories/user-state/types';

interface LoginPageProps {
    className?: string;
    children?: React.ReactNode;
}

const LoginPage: FC<LoginPageProps> = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const authStatus = user.useUserAuthStatus();
    const [error, setError] = useState('');

    const onLoginChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setLogin(e.target.value);
    };
    const onPasswordChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setPassword(e.target.value);
    };

    const onSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();

        try {
            await auth.signIn({ login, password });
            navigate(paths.getRoutePath(RouteNames.MAIN), { replace: true });
        } catch (error) {
            const axiosError = error as ApiError;
            setError(axiosError.response?.data?.message ?? 'Ошибка сервера');
        }
    };

    if (authStatus === UserAuthStatus.SIGN_IN) {
        return <Navigate to={paths.getRoutePath(RouteNames.MAIN)} replace={true} />;
    }

    return (
        <div className={classNames(s.loginPage)}>
            <form className={s.form} onSubmit={onSubmit}>
                <Text textSize={'xl'} textType='title' textAlign='center'>
                    Вход
                </Text>
                <Gap size={'3xl'} />
                <Input
                    type='text'
                    autoComplete='username'
                    onChange={onLoginChange}
                    value={login}
                    textSize='xl'
                    textColor='primary'
                />
                <Gap size={'m'} />
                <Input
                    type='password'
                    autoComplete='pass'
                    onChange={onPasswordChange}
                    value={password}
                    textSize='xl'
                    textColor='primary'
                />
                <Gap size={'l'} />
                <Button textSize={'xl'}>Войти</Button>
                <Gap size={'l'} />
                <div className={s.errorContainer}>
                    <Text textSize={'s'} textAlign='center' textColor='negative'>
                        {error}
                    </Text>
                </div>
            </form>
            <Text className={s.version} textSize={'l'}>
                version {APP_VERSION}
            </Text>
        </div>
    );
};

export default LoginPage;
