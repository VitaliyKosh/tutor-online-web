import s from './index.module.css';
import { ModuleListSkeleton } from '@/shared/ui/module-list/skeleton';

export const StudyPageFallback = () => {
    return (
        <div className={s.page}>
            <ModuleListSkeleton skeletonCount={3} />
        </div>
    );
};
