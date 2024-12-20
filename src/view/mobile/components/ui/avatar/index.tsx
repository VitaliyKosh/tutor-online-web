import { ButtonHTMLAttributes, FC } from 'react';
import cls from './index.module.css';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    userId?: string;
}

export const Avatar: FC<ButtonProps> = ({ className, userId }) => {
    return (
        <div className={classNames(cls.avatar, className)}>
            {userId ? (
                <img src='' alt='' />
            ) : (
                <FontAwesomeIcon className={classNames(cls.fallbackIcon)} icon={faUser} />
            )}
        </div>
    );
};
