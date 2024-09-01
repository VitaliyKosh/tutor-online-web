import { BasicSkeleton } from '@/shared/ui/basic-skeleton';
import s from './index.module.css';
import { ModuleListSkeleton } from '@/shared/ui/module-list/skeleton';
import { PC } from '@/shared/types/page';
import { useLocation } from 'react-router-dom';
import { ModuleDto } from 'tutor-online-global-shared/dist/types/dto/module/shared';
import { ModuleLabel } from '@/shared/ui/module-label';

export const ModulePageFallback: PC = ({ useHeaderTitle, useHeaderAddon }) => {
    const location = useLocation();

    const state: { module: ModuleDto } = location.state;

    useHeaderTitle(state?.module ? state.module.name : undefined);
    useHeaderAddon(<ModuleLabel status={state.module.status} size='m' />);

    return (
        <div className={s.page}>
            <BasicSkeleton className={s.modulesTitle} />
            <ModuleListSkeleton skeletonCount={3} />
        </div>
    );
};
