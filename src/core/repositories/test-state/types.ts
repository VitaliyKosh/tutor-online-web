import {
    TestDto,
    ChoosingSeveralUserAnswers,
    ChoosingUserAnswers,
    CorelationUserAnswers,
    FreeAnswerUserAnswers,
    UserAnswer,
    SubTest,
} from 'tutor-online-global-shared';

export type UserAnswers = UserAnswer;

export type UserOmitAnswer =
    | ChoosingUserAnswers
    | ChoosingSeveralUserAnswers
    | FreeAnswerUserAnswers
    | CorelationUserAnswers;

export type TestState = {
    test: TestDto | null;
    activeQuestionIndex: number;
    answers: UserAnswers;
    testResults: Record<string, boolean | undefined> | undefined;
    mark: number | undefined;

    activeTests: SubTest[];
    resolvedTests: SubTest[];
    isResolved: boolean;
};
