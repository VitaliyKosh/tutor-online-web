import { FC } from 'react';
import { ModuleStatus } from 'tutor-online-global-shared';
import { Label } from '../label';

type Props = {
    status: ModuleStatus | undefined;
    size?: 's' | 'm';
};

type StatusOptions = {
    backgroundColor: string;
    text: string;
};

const statusOptions: Record<string, StatusOptions> = {
    [ModuleStatus.IN_PROGRESS]: {
        backgroundColor: 'var(--text-link)',
        text: 'В процессе',
    },
    [ModuleStatus.DONE]: {
        backgroundColor: 'var(--text-positive)',
        text: 'Завершён',
    },
};

export const ModuleLabel: FC<Props> = ({ status, size = 's' }) => {
    if (
        !status ||
        [ModuleStatus.CLOSED, ModuleStatus.OPENED, ModuleStatus.HIDDEN].includes(status)
    ) {
        return null;
    }

    const { backgroundColor, text } = statusOptions[status];

    return <Label text={text} size={size} backgroundColor={backgroundColor} />;
};
