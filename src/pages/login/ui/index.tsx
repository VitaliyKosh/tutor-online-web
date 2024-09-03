import React, { FC, useState } from 'react';
import s from './index.module.css';
import classNames from 'classnames';
import AuthService from '@/shared/api-services/auth-service';
import { Navigate, useNavigate } from 'react-router-dom';
import { paths } from '@/shared/lib/path';
import { RouteNames } from '@/shared/consts/paths';
import { signIn } from '@/shared/store/slices/user';
import { UserAuthStatus } from '@/shared/store/slices/user/types';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '@/shared/hooks/use-app-selector';
import { Input } from '@/shared/ui/input';
import { Gap } from '@/shared/ui/gap';
import { Text } from '@/shared/ui/text';
import Button from '@/shared/ui/button';
import { ApiError } from '@/shared/types/api';

interface LoginPageProps {
    className?: string;
    children?: React.ReactNode;
}

const LoginPage: FC<LoginPageProps> = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const authStatus = useAppSelector((s) => s.user.authStatus);
    const [error, setError] = useState(
        'fdslkgjhdfsjkgdahjshgfljkadhgflkdjsh fksdj hfklsdajhf lskdajhf lksdajhf lksjdhf lksjahf klsjafhlksjahdf lksafhlkasjfhlksajdfhlaksjfdh slkjfhsaklfhaklsfhs',
    );

    const onLoginChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setLogin(e.target.value);
    };
    const onPasswordChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setPassword(e.target.value);
    };

    const onSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();

        try {
            const signInRes = await AuthService.signIn(login, password);
            dispatch(
                signIn({
                    user: signInRes.data.user,
                    authStatus: UserAuthStatus.SIGN_IN,
                }),
            );
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
