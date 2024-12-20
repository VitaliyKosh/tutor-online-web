import classNames from 'classnames';
import s from './index.module.css';
import { FC } from 'react';
import { UserAnswers } from '../types';
import { QuestionDto } from 'tutor-online-global-shared/dist/types/dto/question/shared';

type Props = {
    questions: QuestionDto[];
    activeQuestionIndex: number;
    questionsCount: number;
    onQuestionClick: (index: number) => void;
    userAnswers: UserAnswers;
    testResults?: Record<string, boolean | undefined>;
    isResolved: boolean;
};

export const TestNavigationPanel: FC<Props> = ({
    questions,
    activeQuestionIndex,
    questionsCount,
    onQuestionClick,
    userAnswers,
    testResults,
    isResolved,
}) => {
    const progressBarPercent = (100 * activeQuestionIndex) / (questionsCount - 1);

    console.log(testResults, 'testResults');

    return (
        <div className={s.testNavigationPanel}>
            <div className={s.questions}>
                <div className={s.progressBarContainer}>
                    <div className={s.progressBarBG} />
                    <div className={s.progressBar} style={{ width: `${progressBarPercent}%` }} />
                </div>
                <div className={s.questionButtons}>
                    {Array(questionsCount)
                        .fill(null)
                        .map((q, i) => {
                            const isAnswerRight =
                                isResolved && testResults && testResults[questions[i].id];
                            const isAnswerWrong =
                                isResolved && (!testResults || !testResults[questions[i].id]);

                            return (
                                <div
                                    className={classNames(
                                        s.question,
                                        i === activeQuestionIndex && s.active,
                                        userAnswers[questions[i].id]?.userAnswer !== undefined &&
                                            s.passed,
                                        isAnswerRight && s.right,
                                        isAnswerWrong && s.wrong,
                                    )}
                                    onClick={() => onQuestionClick(i)}
                                    key={i}
                                >
                                    {i + 1}
                                </div>
                            );
                        })}
                </div>
            </div>
        </div>
    );
};
