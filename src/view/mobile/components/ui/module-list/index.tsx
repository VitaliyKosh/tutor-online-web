import { FC } from 'react';
import s from './index.module.css';
import { ModuleButton } from '../module';
import { ModuleListSkeleton } from './skeleton';
import { ModuleDto } from 'tutor-online-global-shared/dist/types/dto/module/shared';
import { ModuleStatus } from 'tutor-online-global-shared';

type Props = {
    modules: ModuleDto[];
    modulesLoading: boolean;
    skeletonCount?: number;
};

const map: Record<ModuleStatus, number> = {
    [ModuleStatus.HIDDEN]: 3,
    [ModuleStatus.CLOSED]: 3,
    [ModuleStatus.OPENED]: 1,
    [ModuleStatus.IN_PROGRESS]: 0,
    [ModuleStatus.DONE]: 2,
};

export const ModuleList: FC<Props> = ({ modules, modulesLoading, skeletonCount }) => {
    const moduleGroups = modules.reduce<ModuleDto[][]>(
        (acc, m) => {
            acc[map[m.status ?? ModuleStatus.HIDDEN]].push(m);
            return acc;
        },
        [[], [], [], []],
    );

    const sortedModuleGroups = moduleGroups.map((mg) =>
        [...mg].sort(
            (a, b) => Number(new Date(b.lastModifiedDate)) - Number(new Date(a.lastModifiedDate)),
        ),
    );

    return (
        <div className={s.moduleList}>
            {modulesLoading ? (
                <ModuleListSkeleton skeletonCount={skeletonCount} />
            ) : (
                sortedModuleGroups.flat().map((m) => {
                    return <ModuleButton key={m.id} module={m} />;
                })
            )}
        </div>
    );
};
