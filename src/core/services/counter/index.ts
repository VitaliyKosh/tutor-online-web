import { CounterState, counterStateRepository } from '@/core/repositories/counter-state';
import { CounterStateRepository } from '@/core/repositories/counter-state/repository';
import { StateService } from '@/shared/lib/clear/services/state';

export interface CounterService
    extends StateService<CounterState, CounterStateRepository<CounterState>> {
    increment: () => void;
    decrement: () => void;
    getState: () => number;
    useState: () => number;
    increment2: () => void;
    decrement2: () => void;
    getState2: () => number;
    useState2: () => number;
}

export class CounterStateService
    extends StateService<CounterState, CounterStateRepository<CounterState>>
    implements CounterService
{
    increment() {
        this.$repository.setState({
            count: this.$repository.state.count + 1,
        });
    }

    decrement() {
        this.$repository.setState((s) => ({
            ...s,
            count: s.count - 1,
        }));
    }

    getState() {
        return this.$repository.state.count;
    }

    useState() {
        return this.useObservableValue((s) => s.count);
    }

    increment2() {
        this.$repository.setState({
            count: this.$repository.state.count2 + 1,
        });
    }

    decrement2() {
        this.$repository.setState((s) => ({
            ...s,
            count2: s.count2 - 1,
        }));
    }

    getState2() {
        return this.$repository.state.count2;
    }

    useState2() {
        return this.useObservableValue((s) => s.count2);
    }
}

export const counterStateService = new CounterStateService({ repository: counterStateRepository });
