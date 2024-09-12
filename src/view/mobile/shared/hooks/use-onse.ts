import { useEffect, useRef } from 'react';

export const useOnce = (callback: () => void) => {
    const isCalledRef = useRef(false);

    useEffect(() => {
        if (!isCalledRef.current) {
            isCalledRef.current = true;
            callback();
        }
    }, [callback]);
};
