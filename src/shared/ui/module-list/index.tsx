import { FC } from 'react';
import s from './index.module.css';
import { Module } from 'tutor-online-global-shared';
import { ModuleButton } from '../module';
import { ModuleListSkeleton } from './skeleton';

type Props = {
    modules: Module[];
    modulesLoading: boolean;
    skeletonCount?: number;
};

export const ModuleList: FC<Props> = ({ modules, modulesLoading, skeletonCount }) => {
    return (
        <div className={s.moduleList}>
            {modulesLoading ? (
                <ModuleListSkeleton skeletonCount={skeletonCount} />
            ) : (
                modules.map((m) => {
                    return <ModuleButton key={m.id} module={m} />;
                })
            )}
        </div>
    );
};
