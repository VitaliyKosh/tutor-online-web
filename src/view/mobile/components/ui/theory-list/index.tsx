import { FC } from 'react';
import s from './index.module.css';
import { TheoryButton } from '../theory';
import { SubTheory } from 'tutor-online-global-shared/dist/types/dto/module/shared';
import { TheoryListSkeleton } from './skeleton';

type Props = {
    theory: SubTheory[];
    theoryLoading: boolean;
    skeletonCount?: number;
};

export const TheoryList: FC<Props> = ({ theory, theoryLoading, skeletonCount }) => {
    return (
        <div className={s.moduleList}>
            {theoryLoading ? (
                <TheoryListSkeleton skeletonCount={skeletonCount} />
            ) : (
                theory.flat().map((t) => {
                    return <TheoryButton key={t.id} theory={t} />;
                })
            )}
        </div>
    );
};
