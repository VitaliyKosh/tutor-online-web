import { BasicSkeleton } from '@/shared/ui/basic-skeleton';
import s from './index.module.css';
import { ModuleListSkeleton } from '@/shared/ui/module-list/skeleton';

export const ModulePageFallback = () => {
    return (
        <div className={s.page}>
            <BasicSkeleton className={s.modulesTitle} />
            <ModuleListSkeleton skeletonCount={3} />
        </div>
    );
};
