import ModuleService from '@/shared/api-services/module-service';
import { PC } from '@/shared/types/page';
import { useEffect, useState } from 'react';
import s from './index.module.css';
import { ModuleList } from '@/shared/ui/module-list';
import { ModuleDto } from 'tutor-online-global-shared/dist/types/dto/module/shared';
import { StudyPageFallback } from './fallback';

const StudyPage: PC = () => {
    const [modules, setModules] = useState<ModuleDto[]>([]);
    const [modulesLoading, setModulesLoading] = useState<boolean>(true);

    console.log(modules);

    useEffect(() => {
        const loadModules = async () => {
            const getModuleRes = await ModuleService.getRootModules();
            const modules = getModuleRes.data.rootModules;

            setModules(modules);
            setModulesLoading(false);
        };

        loadModules();
    }, []);

    if (modulesLoading) {
        return <StudyPageFallback />;
    }

    return (
        <div className={s.page}>
            {modules.length > 0 ? (
                <ModuleList modules={modules} modulesLoading={modulesLoading} />
            ) : (
                <div>Нет модулей</div>
            )}
        </div>
    );
};

export default StudyPage;
