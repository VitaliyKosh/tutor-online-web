import {
    ChoosingSeveralUserAnswers,
    ChoosingUserAnswers,
    CorelationUserAnswers,
    FreeAnswerUserAnswers,
    UserAnswer,
} from 'tutor-online-global-shared';

export type UserAnswers = Record<string, UserAnswer>;

export type UserOmitAnswer =
    | ChoosingUserAnswers
    | ChoosingSeveralUserAnswers
    | FreeAnswerUserAnswers
    | CorelationUserAnswers;
