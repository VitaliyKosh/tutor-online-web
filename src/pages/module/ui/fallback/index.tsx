import { PC } from '@/shared/types/page';
import s from './index.module.css';
import { ModuleListSkeleton } from '@/shared/ui/module-list/skeleton';

export const ModulePageFallback: PC = () => {
    return (
        <div className={s.page}>
            <ModuleListSkeleton skeletonCount={3} />
        </div>
    );
};
