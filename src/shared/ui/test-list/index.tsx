import { FC } from 'react';
import s from './index.module.css';
import { TestButton } from '../test';
import { SubTest } from 'tutor-online-global-shared/dist/types/dto/module/shared';
import { TestListSkeleton } from './skeleton';

type Props = {
    tests: SubTest[];
    testsLoading: boolean;
    skeletonCount?: number;
};

export const TestList: FC<Props> = ({ tests, testsLoading, skeletonCount }) => {
    return (
        <div className={s.moduleList}>
            {testsLoading ? (
                <TestListSkeleton skeletonCount={skeletonCount} />
            ) : (
                tests.flat().map((t) => {
                    return <TestButton key={t.id} test={t} />;
                })
            )}
        </div>
    );
};