import { markMapping } from './consts';
import { ViewMark } from './types';

export const getMark = (markNumber: number | undefined): ViewMark => {
    if (markNumber === undefined) {
        return 0;
    }

    const mapping = Object.entries(markMapping);

    for (let i = mapping.length - 1; i >= 0; i--) {
        const [fromValue, mark] = mapping[i];

        if (markNumber >= Number(fromValue)) {
            return mark;
        }
    }

    return 0;
};
