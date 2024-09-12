import { ModulesStateRepository } from './repository';

export const modulesStateRepository = new ModulesStateRepository({
    initialState: {
        modules: {},
    },
});
