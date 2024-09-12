import { ModuleDto } from 'tutor-online-global-shared';

export interface ModulesApiService {
    loadModule: (options: { moduleId: string }) => Promise<ModuleDto>;
    loadRootModules: () => Promise<ModuleDto[]>;
}
