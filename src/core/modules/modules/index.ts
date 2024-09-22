import { ModulesApiService } from '@/core/services/modules-api/types';
import { ModulesStateService } from '@/core/services/modules-state/types';
import { Dependencies, Module } from '@/shared/clear';

export interface ModulesModuleDeps extends Dependencies {
    modulesStateService: ModulesStateService;
    modulesApiService: ModulesApiService;
}

export class ModulesModule extends Module<ModulesModuleDeps> {
    async loadModule(moduleId: string) {
        const module = await this.$deps.modulesApiService.loadModule({ moduleId });

        this.$deps.modulesStateService.saveModule(module);

        return module;
    }

    async loadSubmodules(moduleId: string) {
        let module = this.getModule(moduleId);

        if (!module) {
            module = await this.$deps.modulesApiService.loadModule({ moduleId });
        }

        const submodules = await Promise.all(
            module.modules.map((sm) =>
                this.$deps.modulesApiService.loadModule({ moduleId: sm.id }),
            ),
        );

        submodules.forEach((m) => this.$deps.modulesStateService.saveModule(m));

        return submodules;
    }

    async loadRootModules() {
        const modules = await this.$deps.modulesApiService.loadRootModules();

        modules.forEach((m) => this.$deps.modulesStateService.saveModule({ ...m, isRoot: true }));

        return modules;
    }

    getModule(moduleId: string | undefined) {
        return moduleId ? this.$deps.modulesStateService.getModule(moduleId) : null;
    }

    useModule(moduleId: string | undefined) {
        return this.$deps.modulesStateService.useModule(moduleId);
    }

    useSubmodules(moduleId: string | undefined) {
        return this.$deps.modulesStateService.useSubmodules(moduleId) ?? [];
    }

    getRootModules() {
        return this.$deps.modulesStateService.getRootModules();
    }

    useRootModules() {
        return this.$deps.modulesStateService.useRootModules();
    }
}
