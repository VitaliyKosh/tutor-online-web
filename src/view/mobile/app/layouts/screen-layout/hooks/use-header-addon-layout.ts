import { UseHeaderAddon } from "@/shared/types/page";
import { ReactNode, useLayoutEffect, useMemo, useState } from "react";

export const useHeaderAddonLayout = () => {
    const [dynamicTitleRightAddon, setDynamicTitleRightAddon] = useState<ReactNode | undefined>(
        undefined,
    );

    const useHeaderAddon: UseHeaderAddon = (value: ReactNode | undefined) => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        const memoizedComponent = useMemo(() => value, []);

        useLayoutEffect(() => {
            setDynamicTitleRightAddon(memoizedComponent);

            return () => {
                setDynamicTitleRightAddon(undefined);
            };
        }, [memoizedComponent]);

        return setDynamicTitleRightAddon;
    };

    return {
        dynamicTitleRightAddon,
        useHeaderAddon
    }
};
