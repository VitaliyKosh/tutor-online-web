import { StateService } from '@/shared/clear/services/state';
import { ModulesStateService as IModulesStateService } from './types';
import { Module, ModulesState } from '@/core/repositories/modules-state/types';
import { ModulesStateRepository } from '@/core/repositories/modules-state/repository';

export class ModulesStateService
    extends StateService<ModulesState, ModulesStateRepository>
    implements IModulesStateService
{
    saveModule(module: Module) {
        this.$repository.setState((s) => ({
            ...s,
            modules: { ...s.modules, [module.id]: module },
        }));
    }

    getModule(moduleId: string): Module | null {
        return this.$repository.state.modules[moduleId] ?? null;
    }

    useModule(moduleId: string | undefined) {
        return this.useObservableValue(moduleId ? (s) => s.modules[moduleId] : undefined, null);
    }

    useSubmodules(moduleId: string | undefined) {
        if (!moduleId) {
            return null;
        }

        const submodulesIds = this.getModule(moduleId)?.modules.map((m) => m.id) ?? [];
        return (
            this.useObservableValue((s) => submodulesIds.map((id) => s.modules[id]))?.filter(
                Boolean,
            ) ?? null
        );
    }

    getRootModules() {
        return Object.values(this.$repository.state.modules).filter((m) => m.isRoot);
    }

    useRootModules() {
        return this.useObservableValue((s) => Object.values(s.modules).filter((m) => m.isRoot));
    }
}
