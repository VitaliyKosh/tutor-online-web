import { FC } from 'react';
import s from './index.module.css';
import { Text } from '@/shared/ui/text';
import { Link } from 'react-router-dom';
import { paths } from '@/shared/lib/path';
import { RouteNames } from '@/shared/consts/paths';
import { Module } from 'tutor-online-global-shared';

type Props = {
    module: Module;
};

export const ModuleButton: FC<Props> = ({ module }) => {
    return (
        <Link
            className={s.module}
            to={paths.getRoutePath(RouteNames.MODULE, {
                params: { id: module.id },
            })}
            state={{ module }}
        >
            <Text textSize={'l'}>{module.name}</Text>
        </Link>
    );
};
