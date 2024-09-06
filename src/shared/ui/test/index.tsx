import { FC } from 'react';
import s from './index.module.css';
import { Text } from '@/shared/ui/text';
import { Link } from 'react-router-dom';
import { paths } from '@/shared/lib/path';
import { RouteNames } from '@/shared/consts/paths';
import { SubTest } from 'tutor-online-global-shared';
import { useTimer } from '@/shared/hooks/use-timer';
import { Label } from '../label';
import classNames from 'classnames';
import { Mark } from './mark';

type Props = {
    test: SubTest;
};

export const TestButton: FC<Props> = ({ test }) => {
    const { remainingText, isExpired } = useTimer({
        expirationTime: test.expirationDate ? new Date(test.expirationDate) : undefined,
        isDisabled: test.isResolved,
    });

    const isShowTimer = !test.isResolved && !isExpired;

    return (
        <Link
            className={classNames(s.test, {[s.disabled]: isExpired})}
            to={paths.getRoutePath(RouteNames.SDUI, {
                params: { id: test.id },
            })}
        >
            <Text className={s.testTitle} textSize={'xl'} textColor='yellow'>
                {test.name}
            </Text>
            {isShowTimer && (
                <Label
                    className={s.labelTimer}
                    backgroundColor={'var(--color-Math-red)'}
                    text={remainingText ?? ''}
                />
            )}
            {isExpired && (
                <Label
                    className={s.label}
                    backgroundColor={'var(--color-Math-red)'}
                    text={'Просрочен'}
                />
            )}
            {test.mark && <Mark mark={test.mark}/>}
        </Link>
    );
};
