import React, { FC } from 'react';
import classes from './LoginPage.module.css';
import { Logo } from './Logo';
import classNames from 'classnames';

interface LoginPageProps {
    className?: string;
    children?: React.ReactNode;
}

const LoginPage: FC<LoginPageProps> = () => {
    return (
        <div className={classNames(classes.loginPage)}>
            <Logo />
        </div>
    );
};

export default LoginPage;
