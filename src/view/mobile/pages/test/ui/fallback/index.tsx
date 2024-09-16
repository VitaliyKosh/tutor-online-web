import { BasicSkeleton } from '@/view/mobile/components/ui/basic-skeleton';
import s from './index.module.css';
import { Gap } from '@/view/mobile/components/ui/gap';

export const TestPageFallback = () => {
    return (
        <div className={s.page}>
            <div className={s.testNavigation}>
                <div className={s.questionButtons}>
                    <BasicSkeleton className={s.question} />
                    <BasicSkeleton className={s.question} />
                    <BasicSkeleton className={s.question} />
                    <BasicSkeleton className={s.question} />
                    <BasicSkeleton className={s.question} />
                </div>

                <Gap size={'m'} />

                <div className={s.contentContainer}>
                    <BasicSkeleton className={s.content} />
                    <BasicSkeleton className={s.content} />
                    <BasicSkeleton className={s.contentShort} />
                </div>
            </div>
            <div className={s.bottomBlock}>
                <div className={s.answers}>
                    <BasicSkeleton className={s.answer} />
                    <BasicSkeleton className={s.answer} />
                    <BasicSkeleton className={s.answer} />
                    <BasicSkeleton className={s.answer} />
                </div>
                <div className={s.navButtons}>
                    <BasicSkeleton className={s.prevButton} />
                    <BasicSkeleton className={s.nextButton} />
                </div>
            </div>
        </div>
    );
};
