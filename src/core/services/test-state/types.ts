import { TestStateRepository } from '@/core/repositories/test-state/repository';
import { TestState, UserAnswers } from '@/core/repositories/test-state/types';
import { StateService } from '@/view/mobile/shared/lib/clear/services/state';
import {
    ChoosingSeveralUserAnswers,
    ChoosingUserAnswers,
    CorelationUserAnswers,
    FreeAnswerUserAnswers,
    SubTest,
    TestDto,
} from 'tutor-online-global-shared';

export interface TestStateService extends StateService<TestState, TestStateRepository> {
    setTest: (test: TestDto) => void;
    getTest: () => TestDto | null;
    useTest: () => TestDto | null;

    setAnswer: (
        answerId: string,
        answer:
            | ChoosingUserAnswers
            | ChoosingSeveralUserAnswers
            | FreeAnswerUserAnswers
            | CorelationUserAnswers,
    ) => void;
    setAnswers: (answers: UserAnswers) => void;
    getAnswers: () => UserAnswers;
    useAnswers: () => UserAnswers;

    setQuestionIndex: (value: number) => void;
    getActiveQuestionIndex: () => number;
    useActiveQuestionIndex: () => number;

    setTestResults: (results: Record<string, boolean | undefined>) => void;
    getTestResults: () => Record<string, boolean | undefined> | undefined;
    useTestResults: () => Record<string, boolean | undefined> | undefined;

    setMark: (mark: number | undefined) => void;
    getMark: () => number | undefined;
    useMark: () => number | undefined;

    setActiveTests: (tests: SubTest[]) => void;
    getActiveTests: () => SubTest[];
    useActiveTests: () => SubTest[];

    setResolvedTests: (tests: SubTest[]) => void;
    getResolvedTests: () => SubTest[];
    useResolvedTests: () => SubTest[];

    setIsResolved: (value: boolean) => void;
    getIsResolved: () => boolean;
    useIsResolved: () => boolean;
}
