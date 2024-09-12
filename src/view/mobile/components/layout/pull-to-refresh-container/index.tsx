import { FC, ReactNode } from 'react';
import s from './index.module.css';
import classNames from 'classnames';
import PullToRefresh from 'react-simple-pull-to-refresh';

interface Props {
    className: string;
    onRefresh: () => Promise<unknown>;
    children: ReactNode;
}

export const PullToRefreshContainer: FC<Props> = ({ className, onRefresh, children }) => {
    return (
        <PullToRefresh
            className={classNames(s.pullToRefreshContainer, className)}
            resistance={2}
            pullingContent={''}
            onRefresh={onRefresh}
        >
            <div className={s.contentContainer}>{children}</div>
        </PullToRefresh>
    );
};
