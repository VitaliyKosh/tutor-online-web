import { FC } from 'react';
import s from './index.module.css';
import classNames from 'classnames';
import { ViewMark } from '@/view/mobile/shared/lib/mark/types';

type Props = {
    className?: string;
    mark: ViewMark;
};

export const Mark: FC<Props> = ({ className, mark }) => {
    return (
        <div className={classNames(s.marks, className)}>
            <div/>
            <div className={classNames(s.mark, s.mark1, { [s.active]: mark === 1 })}/>
            <div className={classNames(s.mark, s.mark2, { [s.active]: mark === 2 })}/>
            <div className={classNames(s.mark, s.mark3, { [s.active]: mark === 3 })}/>
        </div>
    );
};
