import { useCallback, useEffect, useRef, useState } from 'react';

export type UseLoaderOptions = {
    initialLoadingValue?: boolean;
    autoLoad?: boolean;
};

export const useLoader = <P, T, E = unknown>(
    asyncFunction: (...props: P[]) => T,
    { initialLoadingValue = true, autoLoad = false }: UseLoaderOptions = {},
) => {
    const [isLoading, setIsLoading] = useState<boolean>(initialLoadingValue);
    const [error, setError] = useState<E | null>(null);
    const firstCalled = useRef(false);

    const load = useCallback(
        async (...props: P[]) => {
            try {
                if (firstCalled.current) {
                    setIsLoading(true);
                }

                firstCalled.current = true;

                const value = await asyncFunction(...props);

                return value;
            } catch (e) {
                setError(e as E);
            } finally {
                setIsLoading(false);
            }
        },
        [asyncFunction],
    );

    useEffect(() => {
        if (autoLoad) {
            load();
        }
    }, [autoLoad, load]);

    const isError = error !== null;

    return {
        load,
        isLoading,
        isError,
        error,
    };
};
