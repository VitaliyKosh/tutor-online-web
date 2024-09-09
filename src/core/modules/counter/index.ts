import { CounterService } from '@/core/services/counter';
import { Dependencies, Module } from '@/shared/lib/clear';

export interface CounterModuleDeps extends Dependencies {
    counterService: CounterService;
}

export class CounterModule extends Module<CounterModuleDeps> {
    increment() {
        this.$deps.counterService.increment();
    }

    decrement() {
        this.$deps.counterService.decrement();
    }

    getCounter() {
        return this.$deps.counterService.getState();
    }

    useCounter() {
        return this.$deps.counterService.useState();
    }

    increment2() {
        this.$deps.counterService.increment2();
    }

    decrement2() {
        this.$deps.counterService.decrement2();
    }

    getCounter2() {
        return this.$deps.counterService.getState2();
    }

    useCounter2() {
        return this.$deps.counterService.useState2();
    }
}
