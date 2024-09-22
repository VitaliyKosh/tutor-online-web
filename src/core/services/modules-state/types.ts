import { ModulesStateRepository } from '@/core/repositories/modules-state/repository';
import { Module, ModulesState } from '@/core/repositories/modules-state/types';
import { StateService } from '@/shared/clear/services/state';

export interface ModulesStateService extends StateService<ModulesState, ModulesStateRepository> {
    saveModule: (module: Module) => void;
    getModule: (moduleId: string) => Module | null;
    useModule: (moduleId: string | undefined) => Module | null;
    useSubmodules: (moduleId: string | undefined) => Module[] | null;

    getRootModules: () => Module[];
    useRootModules: () => Module[];
}
