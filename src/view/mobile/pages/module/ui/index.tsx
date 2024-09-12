import { PC } from '@/view/mobile/shared/types/page';
import { ModuleList } from '@/view/mobile/components/ui/module-list';
import { Text } from '@/view/mobile/components/ui/text';
import { useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import s from './index.module.css';
import { ModuleDto } from 'tutor-online-global-shared/dist/types/dto/module/shared';
import { ModuleLabel } from '@/view/mobile/components/ui/module-label';
import { TheoryList } from '@/view/mobile/components/ui/theory-list';
import { TestList } from '@/view/mobile/components/ui/test-list';
import { Gap } from '@/view/mobile/components/ui/gap';
import { PullToRefreshContainer } from '@/view/mobile/components/layout/pull-to-refresh-container';
import { modules as appModules } from '@/core/app';

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
    const module = appModules.useModule(id);
    const [moduleLoading, setModuleLoading] = useState(hasState ? false : true);

    const modules = appModules.useSubmodules(id);
    const [modulesLoading, setModulesLoading] = useState<boolean>(true);

    const loadSubmodules = useCallback(async (id: string) => {
        setModulesLoading(true);

        await appModules.loadSubmodules(id);

        setModulesLoading(false);
    }, []);

    const loadModule = useCallback(
        async (id: string) => {
            const module = await appModules.loadModule(id);

            setModuleLoading(false);

            if (module) {
                if (module.modules) {
                    loadSubmodules(module.id);
                }
            }
        },
        [loadSubmodules],
    );

    useEffect(() => {
        if (module) {
            setTitle(module.name);
            setHeaderAddon(<ModuleLabel status={module.status} size='m' />);
        }
    }, [module, setHeaderAddon, setTitle]);

    useEffect(() => {
        if (id) {
            loadModule(id);
        }
    }, [id, loadModule]);

    const onRefresh = async () => {
        if (id) {
            setModuleLoading(true);
            setModulesLoading(true);
            
            loadModule(id);
        }
    };

    const submodules = module?.modules;
    const theory = module?.theory;
    const tests = module?.tests.filter((t) => t.isResolved);
    const activeTests = module?.tests.filter((t) => !t.isResolved);

    const isShowModulesBlock = (submodules && submodules.length > 0) || modules.length > 0;
    const isShowTheoryBlock = theory && theory.length > 0;
    const isShowTestsBlock = tests && tests.length > 0;
    const isShowActiveTestsBlock = activeTests && activeTests.length > 0;

    return (
        <PullToRefreshContainer onRefresh={onRefresh} className={s.page}>
            <div className={s.pageContentWrapper}>
                {isShowActiveTestsBlock && (
                    <>
                        <Text textType='title' textSize={'s'} textColor='yellow'>
                            Активные тесты
                        </Text>
                        <Gap size={'m'} />
                        <TestList
                            tests={activeTests}
                            skeletonCount={1}
                            testsLoading={moduleLoading}
                        />
                        <Gap size={'xl'} />
                    </>
                )}
                {isShowTheoryBlock && (
                    <>
                        <Text textType='title' textSize={'s'} textColor='blue'>
                            Материалы
                        </Text>
                        <Gap size={'m'} />
                        <TheoryList
                            theory={theory}
                            skeletonCount={2}
                            theoryLoading={moduleLoading}
                        />
                        <Gap size={'xl'} />
                    </>
                )}
                {isShowModulesBlock && (
                    <>
                        <Text textType='title' textSize={'s'} textColor='green'>
                            Модули
                        </Text>
                        <Gap size={'m'} />
                        <ModuleList
                            modules={modules}
                            modulesLoading={modulesLoading}
                            skeletonCount={hasState ? state.module.modules?.length : 3}
                        />
                        <Gap size={'xl'} />
                    </>
                )}
                {isShowTestsBlock && (
                    <>
                        <Text textType='title' textSize={'s'} textColor='yellow'>
                            Пройденные тесты
                        </Text>
                        <Gap size={'m'} />
                        <TestList tests={tests} skeletonCount={2} testsLoading={moduleLoading} />
                        <Gap size={'xl'} />
                    </>
                )}
            </div>
        </PullToRefreshContainer>
    );
};

export default ModulePage;
