import { SubTest, TestDto, UserAnswer } from 'tutor-online-global-shared';

export interface TestApiService {
    loadTest: (options: { testId: string }) => Promise<{
        test: TestDto;
        isResolved?: boolean;
        mark?: number;
        userAnswers?: UserAnswer;
    }>;
    loadUserActiveTests: () => Promise<{
        activeTests: SubTest[];
        resolvedTests: SubTest[];
    }>;
    completeTest: (
        testId: string,
        answers: UserAnswer,
    ) => Promise<{
        results: Record<string, boolean | undefined>;
        mark: number;
    }>;
}
