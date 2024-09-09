import { CounterStateRepository } from './repository';

export interface CounterState {
    count: number;
    count2: number;
}

const initialState: CounterState = { count: 0, count2: 0 };

export const counterStateRepository = new CounterStateRepository<CounterState>({
    initialState,
});
