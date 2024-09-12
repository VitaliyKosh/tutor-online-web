import { FC } from 'react';
import s from './index.module.css';
import { BasicSkeleton } from '../../basic-skeleton';

type Props = {
    skeletonCount?: number;
};

export const ModuleListSkeleton: FC<Props> = ({ skeletonCount = 3 }) => {
    return (
        <div className={s.skeletonContainer}>
            {Array(skeletonCount)
                .fill(null)
                .map((_, i) => (
                    <BasicSkeleton key={i} className={s.skeleton} />
                ))}
        </div>
    );
};
