import s from './index.module.css';
import { FC } from 'react';
import { AnswerType, ChoosingAnswers, ChoosingUserAnswers } from 'tutor-online-global-shared';
import { UserOmitAnswer } from '../../types';
import Button from '@/view/mobile/components/ui/button';
import classNames from 'classnames';

type Props = {
    setAnswer: (answer: UserOmitAnswer) => void;
    answers: Omit<ChoosingAnswers, 'rightAnswer'>;
    userAnswer: ChoosingUserAnswers | undefined;
    isResolved: boolean;
};

export const ChoosingAnswer: FC<Props> = ({ setAnswer, answers, userAnswer, isResolved }) => {
    const handleAnswerSelected = (index: number) => {
        if (isResolved) {
            return;
        }

        setAnswer({
            type: AnswerType.CHOOSING,
            userAnswer: index,
        });
    };

    return (
        <div className={s.choosingAnswer}>
            {answers.answers.map((a, i) => (
                <Button
                    className={classNames(s.answer, userAnswer?.userAnswer === i && s.selected)}
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
