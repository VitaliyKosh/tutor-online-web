import ModuleService from '@/shared/api-services/module-service';
import { PC } from '@/shared/types/page';
import { ModuleList } from '@/shared/ui/module-list';
import { Text } from '@/shared/ui/text';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import s from './index.module.css';
import { ModulePageFallback } from './fallback';
import { ModuleDto } from 'tutor-online-global-shared/dist/types/dto/module/shared';
import { ModuleLabel } from '@/shared/ui/module-label';
import { TheoryList } from '@/shared/ui/theory-list';

const ModulePage: PC = (props) => {
    const { useHeaderTitle, params, useHeaderAddon } = props;
    const location = useLocation();

    const { id } = params;

    const state: { module: ModuleDto } = location.state;
    const hasState = Boolean(state);

    const setTitle = useHeaderTitle(hasState ? state.module.name : undefined);
    const setHeaderAddon = useHeaderAddon(
        hasState ? <ModuleLabel status={state.module.status} size='m' /> : undefined,
    );
    const [module, setModule] = useState<ModuleDto | null>(hasState ? state.module : null);
    const [moduleLoading, setModuleLoading] = useState(hasState ? false : true);

    const [modules, setModules] = useState<ModuleDto[]>([]);
    const [modulesLoading, setModulesLoading] = useState<boolean>(true);

    useEffect(() => {
        const loadSubmodules = async (ids: string[]) => {
            const getModulesRes = await Promise.all(ids.map((m) => ModuleService.getModule(m)));
            const modules = getModulesRes.map((res) => res.data.module);

            setModules(modules);
            setModulesLoading(false);
        };

        const loadModule = async () => {
            if (id) {
                try {
                    const getModuleRes = await ModuleService.getModule(id);

                    setModule(getModuleRes.data.module);
                    setTitle(getModuleRes.data.module.name);

                    setHeaderAddon(
                        <ModuleLabel status={getModuleRes.data.module.status} size='m' />,
                    );

                    const submodules = getModuleRes.data.module.modules;

                    if (submodules) {
                        loadSubmodules(submodules.map((m) => m.id));
                    }
                } finally {
                    setModuleLoading(false);
                }
            } else {
                setModuleLoading(false);
            }
        };

        loadModule();
    }, [id, setTitle, setHeaderAddon, state]);

    const submodules = module?.modules;
    const theory = module?.theory;
    const isShowModulesBlock = (submodules && submodules.length > 0) || modules.length > 0;
    const isShowTheoryBlock = theory && theory.length > 0;

    if (moduleLoading) {
        return <ModulePageFallback {...props} />;
    }

    return (
        <div className={s.page}>
            <div>
                {isShowTheoryBlock && (
                    <>
                        <div className={s.modulesTitle}>
                            <Text textType='title' textSize={'s'}>
                                Материалы
                            </Text>
                        </div>
                        <TheoryList theory={theory} theoryLoading={false} />
                    </>
                )}
                {isShowModulesBlock && (
                    <>
                        <div className={s.modulesTitle}>
                            <Text textType='title' textSize={'s'}>
                                Модули
                            </Text>
                        </div>
                        <ModuleList
                            modules={modules}
                            modulesLoading={modulesLoading}
                            skeletonCount={hasState ? state.module.modules?.length : 3}
                        />
                    </>
                )}
            </div>
        </div>
    );
};

export default ModulePage;
