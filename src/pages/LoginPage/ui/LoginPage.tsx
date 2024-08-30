import React, { FC, useState } from 'react';
import classes from './LoginPage.module.css';
import classNames from 'classnames';
import AuthService from '@/shared/api-services/auth-service';
import { Navigate, useNavigate } from 'react-router-dom';
import { paths } from '@/shared/lib/path';
import { RouteNames } from '@/shared/consts/paths';
import { signIn } from '@/shared/store/slices/user';
import { UserAuthStatus } from '@/shared/store/slices/user/types';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '@/shared/hooks/use-app-selector';

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
            console.log('signInRes', signInRes);

            dispatch(
                signIn({
                    user: signInRes.data.user,
                    authStatus: UserAuthStatus.SIGN_IN,
                }),
            );
            navigate(paths.getRoutePath(RouteNames.MAIN));
        } catch (error) {
            console.log(error);
        }
    };

    const onLogout = async () => {
        const signInRes = await AuthService.signOut();

        console.log(signInRes);
    };

    if (authStatus === UserAuthStatus.SIGN_IN) {
        return <Navigate to={paths.getRoutePath(RouteNames.MAIN)} />;
    }

    return (
        <div className={classNames(classes.loginPage)}>
            <form className={classes.form} onSubmit={onSubmit}>
                <input type='text' onChange={onLoginChange} value={login} />
                <input type='text' onChange={onPasswordChange} value={password} />
                <input type='submit' />
            </form>
            <button onClick={onLogout}>logout</button>
        </div>
    );
};

export default LoginPage;
