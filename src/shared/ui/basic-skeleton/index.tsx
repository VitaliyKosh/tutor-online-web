import { FC } from 'react';
import s from './index.module.css';
import classNames from 'classnames';

type Props = {
    className?: string;
};

export const BasicSkeleton: FC<Props> = ({ className }) => {
    return <div className={classNames(s.skeleton, className)} />;
};
