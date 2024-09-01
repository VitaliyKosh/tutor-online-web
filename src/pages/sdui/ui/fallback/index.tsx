import { BasicSkeleton } from '@/shared/ui/basic-skeleton';
import s from './index.module.css';
import { ModuleListSkeleton } from '@/shared/ui/module-list/skeleton';
import { PC } from '@/shared/types/page';
import { useLocation } from 'react-router-dom';
import { ModuleDto } from 'tutor-online-global-shared/dist/types/dto/module/shared';
import { ModuleLabel } from '@/shared/ui/module-label';

export const SDUIPageFallback: PC = ({ useHeaderTitle, useHeaderAddon }) => {
    const location = useLocation();

    const state: { module: ModuleDto } = location.state;

    const hasState = Boolean(state);

    useHeaderTitle(hasState ? state.module.name : undefined);
    useHeaderAddon(hasState ? <ModuleLabel status={state.module.status} size='m' /> : undefined);

    return (
        <div className={s.page}>
            <BasicSkeleton className={s.modulesTitle} />
            <ModuleListSkeleton skeletonCount={3} />
        </div>
    );
};
