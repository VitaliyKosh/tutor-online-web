export function mo<T extends object>(object: T) {
    const map = <U>(
        cb: <K extends keyof T = keyof T>(value: [K, T[K]], index: number, array: [K, T[K]][]) => U,
    ) =>
        Object.fromEntries(
            Object.entries(object).map(([k, v], i, a) => [
                k,
                cb([k as keyof T, v], i, a as [keyof T, T[keyof T]][]),
            ]),
        );

    return { map, ...object };
}
