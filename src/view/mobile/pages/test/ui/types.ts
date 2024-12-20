import {
    ChoosingSeveralUserAnswers,
    ChoosingUserAnswers,
    CorelationUserAnswers,
    FreeAnswerUserAnswers,
    UserAnswer,
} from 'tutor-online-global-shared';

export type UserAnswers = UserAnswer

export type UserOmitAnswer =
    | ChoosingUserAnswers
    | ChoosingSeveralUserAnswers
    | FreeAnswerUserAnswers
    | CorelationUserAnswers;
