import { Application } from '@/shared/lib/clear';
import { CounterModule } from '../modules/counter';
import { counterStateService } from '../services/counter';

interface ApplicationModules {
    counter: CounterModule;
}

export const app = new Application<ApplicationModules>({
    modules: {
        counter: new CounterModule({
            deps: {
                counterService: counterStateService,
            },
        }),
    },
});

export const counter = app.modules.counter;
