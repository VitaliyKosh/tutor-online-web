import { UseHeaderTitle } from '@/view/mobile/shared/types/page';
import { useCallback, useLayoutEffect, useState } from 'react';

export const useHeaderTitleLayout = () => {
    const [dynamicTitleText, setDynamicTitleText] = useState<string | undefined>(undefined);

    const useHeaderTitle: UseHeaderTitle = (value: string | undefined) => {
        useLayoutEffect(() => {
            setDynamicTitleText(value);

            return () => {
                setDynamicTitleText(undefined);
            };
        }, [value]);

        return useCallback((value: string | undefined) => {
            setDynamicTitleText(value);
        }, []);
    };

    return {
        dynamicTitleText,
        useHeaderTitle,
    };
};
