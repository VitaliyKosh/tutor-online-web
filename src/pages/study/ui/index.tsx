import ModuleService from '@/shared/api-services/module-service';
import { useAppSelector } from '@/shared/hooks/use-app-selector';
import { PC } from '@/shared/types/page';
import { useEffect, useState } from 'react';
import { Module } from 'tutor-online-global-shared';
import s from './index.module.css';
import { ModuleList } from '@/shared/ui/module-list';

const StudyPage: PC = () => {
    const rootModules = useAppSelector((s) => s.user.user?.rootModules);
    const [modules, setModules] = useState<Module[]>([]);
    const [modulesLoading, setModulesLoading] = useState<boolean>(true);

    console.log(rootModules);

    useEffect(() => {
        const loadModules = async () => {
            if (rootModules) {
                const getModuleRes = await Promise.all(
                    rootModules.map((m) => ModuleService.getModule(m)),
                );
                const modules = getModuleRes.map((res) => res.data.module);

                setModules(modules);
                setModulesLoading(false);
            }
        };

        loadModules();
    }, [rootModules]);

    return (
        <div className={s.page}>
            {rootModules ? (
                <ModuleList modules={modules} modulesLoading={modulesLoading} />
            ) : (
                <div>Нет модулей</div>
            )}
        </div>
    );
};

export default StudyPage;
