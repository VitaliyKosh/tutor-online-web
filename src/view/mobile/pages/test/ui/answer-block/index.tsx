import s from './index.module.css';
import { FC, ReactNode } from 'react';
import {
    Answers,
    AnswerType,
    ChoosingSeveralUserAnswers,
    ChoosingUserAnswers,
    FreeAnswerUserAnswers,
    UserAnswer,
} from 'tutor-online-global-shared';
import { FreeAnswer } from './free-answer';
import { UserOmitAnswer } from '../types';
import { ChoosingAnswer } from './choosing-answer';
import { ChoosingSeveralAnswer } from './choosing-several-answer';
import { test } from '@/core/app';

type Props = {
    answers: Answers;
    userAnswer: UserAnswer | undefined;
    activeQuestionId: string;
};

export const AnswerBlock: FC<Props> = ({ answers, userAnswer, activeQuestionId }) => {
    let answerBlock: ReactNode = null;

    const setAnswerWithId = (answer: UserOmitAnswer) => {
        test.setAnswer(activeQuestionId, { answerId: activeQuestionId, ...answer });
    };

    if (answers.type === AnswerType.FREE_ANSWER) {
        answerBlock = (
            <FreeAnswer
                setAnswer={setAnswerWithId}
                userAnswer={userAnswer as FreeAnswerUserAnswers | undefined}
            />
        );
    } else if (answers.type === AnswerType.CHOOSING) {
        answerBlock = (
            <ChoosingAnswer
                setAnswer={setAnswerWithId}
                answers={answers}
                userAnswer={userAnswer as ChoosingUserAnswers | undefined}
            />
        );
    } else if (answers.type === AnswerType.CHOOSING_SEVERAL) {
        answerBlock = (
            <ChoosingSeveralAnswer
                setAnswer={setAnswerWithId}
                answers={answers}
                userAnswer={userAnswer as ChoosingSeveralUserAnswers | undefined}
            />
        );
    } else if (answers.type === AnswerType.CORRELATION) {
        answerBlock = null;
    }

    return <div className={s.answerBlock}>{answerBlock}</div>;
};
