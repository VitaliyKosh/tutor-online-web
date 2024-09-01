import { FC } from 'react';
import s from './index.module.css';
import { Text } from '@/shared/ui/text';
import { ModuleStatus } from 'tutor-online-global-shared';

type Props = {
    status: ModuleStatus | undefined;
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

export const Label: FC<Props> = ({ status }) => {
    if (
        !status ||
        [ModuleStatus.CLOSED, ModuleStatus.OPENED, ModuleStatus.HIDDEN].includes(status)
    ) {
        return null;
    }

    const { backgroundColor, text } = statusOptions[status];

    return (
        <div className={s.label} style={{ backgroundColor }}>
            <Text textSize={'s'} textColor='white'>{text}</Text>
        </div>
    );
};
