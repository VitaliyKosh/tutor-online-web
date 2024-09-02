import { FC } from 'react';
import s from './index.module.css';
import { Text } from '@/shared/ui/text';
import { Link } from 'react-router-dom';
import { paths } from '@/shared/lib/path';
import { RouteNames } from '@/shared/consts/paths';
import { SubTheory } from 'tutor-online-global-shared/dist/types/dto/module/shared';

type Props = {
    theory: SubTheory;
};

export const TheoryButton: FC<Props> = ({ theory }) => {
    return (
        <Link
            className={s.theory}
            to={paths.getRoutePath(RouteNames.SDUI, {
                params: { id: theory.id },
            })}
        >
            <Text className={s.theoryTitle} textSize={'xl'} textColor='blue'>
                {theory.title}
            </Text>
        </Link>
    );
};
