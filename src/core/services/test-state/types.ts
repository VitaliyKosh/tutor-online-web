import { TestStateRepository } from '@/core/repositories/test-state/repository';
import { TestState, UserAnswers } from '@/core/repositories/test-state/types';
import { StateService } from '@/view/mobile/shared/lib/clear/services/state';
import { SubTest, TestDto, UserAnswer } from 'tutor-online-global-shared';

export interface TestStateService extends StateService<TestState, TestStateRepository> {
    setTest: (test: TestDto) => void;
    getTest: () => TestDto | null;
    useTest: () => TestDto | null;

    setAnswer: (answerId: string, answer: UserAnswer) => void;
    setAnswers: (answers: UserAnswers) => void;
    getAnswers: () => UserAnswers;
    useAnswers: () => UserAnswers;

    setQuestionIndex: (value: number) => void;
    getActiveQuestionIndex: () => number;
    useActiveQuestionIndex: () => number;

    setActiveTests: (tests: SubTest[]) => void;
    getActiveTests: () => SubTest[];
    useActiveTests: () => SubTest[];

    setResolvedTests: (tests: SubTest[]) => void;
    getResolvedTests: () => SubTest[];
    useResolvedTests: () => SubTest[];
}
