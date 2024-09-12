import { FC } from 'react';
import s from './index.module.css';
import { TestButton } from '../test';
import { SubTest } from 'tutor-online-global-shared';
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
                tests.flat().map((t, i) => {
                    return <TestButton key={t.id + i} test={t} />;
                })
            )}
        </div>
    );
};
