import ModuleService from '@/shared/api-services/module-service';
import { PC } from '@/shared/types/page';
import { ModuleList } from '@/shared/ui/module-list';
import { Text } from '@/shared/ui/text';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Module } from 'tutor-online-global-shared';
import s from './index.module.css';
import { ModulePageFallback } from './fallback';

const ModulePage: PC = ({ useHeaderTitle, params }) => {
    const location = useLocation();

    const { id } = params;

    const state: { module: Module } = location.state;
    const hasState = Boolean(state);

    console.log(state);

    const setTitle = useHeaderTitle(hasState ? state.module.name : undefined);
    const [module, setModule] = useState<Module | null>(hasState ? state.module : null);
    const [moduleLoading, setModuleLoading] = useState(hasState ? false : true);

    const [modules, setModules] = useState<Module[]>([]);
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

                    const submodules = getModuleRes.data.module.modules;

                    if (submodules) {
                        loadSubmodules(submodules);
                    }
                } finally {
                    setModuleLoading(false);
                }
            } else {
                setModuleLoading(false);
            }
        };

        loadModule();
    }, [id, setTitle]);

    const submodules = module?.modules;
    const isShowModulesBlock = submodules && modules.length > 0;

    if (moduleLoading) {
        return <ModulePageFallback />;
    }

    return (
        <div className={s.page}>
            <div>
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
