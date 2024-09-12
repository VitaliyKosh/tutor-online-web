import s from './index.module.css';
import { FC } from 'react';
import { Input } from '@/view/mobile/components/ui/input';
import { AnswerType, FreeAnswerUserAnswers } from 'tutor-online-global-shared';

type Props = {
    setAnswer: (answer: FreeAnswerUserAnswers) => void;
    userAnswer: FreeAnswerUserAnswers | undefined;
};

export const FreeAnswer: FC<Props> = ({ setAnswer, userAnswer }) => {
    const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setAnswer({
            type: AnswerType.FREE_ANSWER,
            userAnswer: e.target.value,
        });
    };

    return (
        <div className={s.freeAnswer}>
            <Input
                className={s.input}
                placeholder='Введите ответ'
                textSize={'xl'}
                value={userAnswer?.userAnswer ?? ''}
                onChange={handleInputChange}
            />
        </div>
    );
};
