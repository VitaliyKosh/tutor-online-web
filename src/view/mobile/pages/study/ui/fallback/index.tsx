import s from './index.module.css';
import { ModuleListSkeleton } from '@/view/mobile/components/ui/module-list/skeleton';

export const StudyPageFallback = () => {
    return (
        <div className={s.page}>
            <ModuleListSkeleton skeletonCount={2} />
        </div>
    );
};
