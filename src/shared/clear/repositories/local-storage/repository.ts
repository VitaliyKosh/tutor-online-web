import { Repository } from '../../repository';
import { LocalStorageRepositoryOptions, LocalStorageType } from './types';

export class LocalStorageRepository<
    K extends string,
    T extends LocalStorageType<K>,
> extends Repository {
    initialState: T;

    constructor({ initialState }: LocalStorageRepositoryOptions<T>) {
        super();

        this.initialState = initialState;
    }

    setItem<Key extends keyof PT, PT extends Partial<T>>(key: Key, value: PT[Key]): void {
        localStorage.setItem(String(key), JSON.stringify(value));
    }

    getItem<Key extends keyof T>(key: Key): T[Key] {
        const rawItem = localStorage.getItem(String(key));

        return rawItem ? JSON.parse(rawItem) : this.initialState[key];
    }

    removeItem<Key extends keyof T>(key: Key): void {
        localStorage.removeItem(String(key));
    }
}
