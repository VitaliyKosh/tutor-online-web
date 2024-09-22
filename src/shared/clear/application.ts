export interface ApplicationOptions<
    ApplicationModules,
    ApplicationServices,
    ApplicationRepositories,
> {
    modules: ApplicationModules;
    services: ApplicationServices;
    repositories: ApplicationRepositories;
}

export class Application<
    ApplicationModules extends object,
    ApplicationServices extends object,
    ApplicationRepositories extends object,
> {
    modules: ApplicationModules;
    services: ApplicationServices;
    repositories: ApplicationRepositories;

    constructor(
        options: ApplicationOptions<
            ApplicationModules,
            ApplicationServices,
            ApplicationRepositories
        >,
    ) {
        this.modules = options.modules;
        this.services = options.services;
        this.repositories = options.repositories;
    }

    initGlobalApp() {
        window.app = this;
    }
}
