export interface ApplicationOptions<ApplicationModules> {
    modules: ApplicationModules;
}

export class Application<ApplicationModules extends object> {
    modules: ApplicationModules;

    constructor(options: ApplicationOptions<ApplicationModules>) {
        this.modules = options.modules;
    }

    initGlobalApp() {
        window.app = this;
    }
}
