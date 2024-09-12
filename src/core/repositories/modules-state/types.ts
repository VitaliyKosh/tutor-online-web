import { ModuleDto } from 'tutor-online-global-shared';

export type Module = ModuleDto & {
    isRoot?: boolean;
};

export type ModulesState = {
    modules: Record<string, Module>;
};
