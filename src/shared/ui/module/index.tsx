import { FC, ReactNode } from 'react';
import s from './index.module.css';
import { Text } from '@/shared/ui/text';
import { Link } from 'react-router-dom';
import { paths } from '@/shared/lib/path';
import { RouteNames } from '@/shared/consts/paths';
import { ModuleDto } from 'tutor-online-global-shared/dist/types/dto/module/shared';
import { ModuleStatus } from 'tutor-online-global-shared';
import classNames from 'classnames';
import { ModuleLabel } from '../module-label';

type Props = {
    module: ModuleDto;
};

const Disabled = ({ className, children }: { className: string; children: ReactNode }) => {
    return <div className={classNames(className, s.disabled)}>{children}</div>;
};

export const ModuleButton: FC<Props> = ({ module }) => {
    const isDisabled = module.status === ModuleStatus.CLOSED;

    const ModuleComponent = isDisabled ? Disabled : Link;

    return (
        <ModuleComponent
            className={s.module}
            to={paths.getRoutePath(RouteNames.MODULE, {
                params: { id: module.id },
            })}
            state={{ module }}
        >
            <div className={s.moduleTopContainer}>
                <div className={s.moduleNameContainer}>
                    <Text className={s.moduleName} textSize={'xl'} textColor='green'>{module.name}</Text>
                </div>
                <div className={s.labelContainer}>
                    <ModuleLabel status={module.status} />
                </div>
            </div>
        </ModuleComponent>
    );
};
