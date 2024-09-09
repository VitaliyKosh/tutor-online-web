import { State, StateRepository } from '@/shared/lib/clear/repositories/state';

export class CounterStateRepository<S extends State> extends StateRepository<S> {}
