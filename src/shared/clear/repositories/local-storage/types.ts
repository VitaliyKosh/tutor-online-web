export type LocalStorageType<K extends string> = Record<K, unknown>;

export type LocalStorageRepositoryOptions<I> = {
    initialState: I;
};
