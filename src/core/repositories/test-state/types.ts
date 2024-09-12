import {
    TestDto,
    ChoosingSeveralUserAnswers,
    ChoosingUserAnswers,
    CorelationUserAnswers,
    FreeAnswerUserAnswers,
    UserAnswer,
    SubTest,
} from 'tutor-online-global-shared';

export type UserAnswers = Record<string, UserAnswer>;

export type UserOmitAnswer =
    | ChoosingUserAnswers
    | ChoosingSeveralUserAnswers
    | FreeAnswerUserAnswers
    | CorelationUserAnswers;

export type TestState = {
    test: TestDto | null;
    activeQuestionIndex: number;
    answers: UserAnswers;

    activeTests: SubTest[];
    resolvedTests: SubTest[];
};
