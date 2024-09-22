export type Dependencies = Record<string, object>;

export type ModuleOptions<ModuleDeps extends Dependencies> = {
    deps: ModuleDeps;
};

export abstract class Module<ModuleDeps extends Dependencies> {
    $deps: ModuleDeps;

    constructor(options: ModuleOptions<ModuleDeps>) {
        this.$deps = options.deps;
    }
}
