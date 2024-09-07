import s from './index.module.css';
import { FC } from 'react';
import {
    AnswerType,
    ChoosingSeveralAnswers,
    ChoosingSeveralUserAnswers,
} from 'tutor-online-global-shared';
import { UserOmitAnswer } from '../../types';
import Button from '@/shared/ui/button';
import classNames from 'classnames';

type Props = {
    setAnswer: (answer: UserOmitAnswer) => void;
    answers: Omit<ChoosingSeveralAnswers, 'rightAnswer'>;
    userAnswer: ChoosingSeveralUserAnswers | undefined;
};

export const ChoosingSeveralAnswer: FC<Props> = ({ setAnswer, answers, userAnswer }) => {
    const handleAnswerSelected = (index: number) => {
        const newUserAnswer = userAnswer?.userAnswer?.includes(index)
            ? userAnswer?.userAnswer.filter((a) => a !== index)
            : [...(userAnswer?.userAnswer ?? []), index];

        setAnswer({
            type: AnswerType.CHOOSING_SEVERAL,
            userAnswer: newUserAnswer.length ? newUserAnswer : undefined,
        });
    };

    return (
        <div className={s.choosingAnswer}>
            {answers.answers.map((a, i) => (
                <Button
                    className={classNames(
                        s.answer,
                        userAnswer?.userAnswer?.includes(i) && s.selected,
                    )}
                    textSize={'m'}
                    onClick={() => handleAnswerSelected(i)}
                    key={i}
                >
                    {a}
                </Button>
            ))}
        </div>
    );
};
