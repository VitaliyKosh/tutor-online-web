import { PC } from '@/view/mobile/shared/types/page';
import s from './index.module.css';
import { ModuleList } from '@/view/mobile/components/ui/module-list';
import { PullToRefreshContainer } from '@/view/mobile/components/layout/pull-to-refresh-container';
import { modules } from '@/core/app';
import { useLoader } from '@/view/mobile/shared/hooks/use-loader';

const loadRootModules = () => modules.loadRootModules();

const StudyPage: PC = () => {
    const rootModules = modules.useRootModules();
    const { load, isLoading } = useLoader(loadRootModules, { autoLoad: true });

    const skeletonCount = rootModules.length > 0 ? rootModules.length : 2

    return (
        <PullToRefreshContainer onRefresh={load} className={s.page}>
            {!isLoading && rootModules.length < 1 ? (
                <div>Нет модулей</div>
            ) : (
                <ModuleList modules={rootModules} modulesLoading={isLoading} skeletonCount={skeletonCount} />
            )}
        </PullToRefreshContainer>
    );
};

export default StudyPage;
