import { PC } from '@/shared/types/page';
import s from './index.module.css';
import { TestDto, UserAnswer } from 'tutor-online-global-shared';
import { useParams } from 'react-router-dom';
import TestService from '@/shared/api-services/test-service';
import { useCallback, useEffect, useState } from 'react';
import { TestNavigationPanel } from './test-navigation-panel';
import { Gap } from '@/shared/ui/gap';
import { UserAnswers } from './types';
import Button from '@/shared/ui/button';
import { SduiWidget } from '@/shared/ui/sdui-widget';
import { AnswerBlock } from './answer-block';

const TestPage: PC = ({ useHeaderTitle, isStandaloneIphoneX }) => {
    const { id } = useParams();
    const [test, setTest] = useState<TestDto | null>(null);
    const [answers, setAnswers] = useState<UserAnswers>({});
    const [activeQuestionIndex, setActiveQuestionIndex] = useState<number>(0);
    const setTitle = useHeaderTitle('Тест');

    useEffect(() => {
        const getTest = async () => {
            if (id) {
                const res = await TestService.getTest(id);

                setTest(res.data.test);

                if (res.data.test.name) {
                    setTitle(res.data.test.name);
                }
            }
        };

        getTest();
    }, [id, setTitle, useHeaderTitle]);

    const activeQuestionId = test?.questions[activeQuestionIndex].id;

    const setAnswer = useCallback(
        (answer: UserAnswer) => {
            if (activeQuestionId) {
                setAnswers((a) => ({ ...a, [activeQuestionId]: answer }));
            }
        },
        [activeQuestionId],
    );

    if (!test) {
        return;
    }

    const activeQuestion = test.questions[activeQuestionIndex];

    if (!activeQuestion) {
        return;
    }

    const onQuestionClick = (index: number) => {
        setActiveQuestionIndex(index);
    };

    const onPrevButtonClick = () => {
        if (activeQuestionIndex !== 0) {
            setActiveQuestionIndex(activeQuestionIndex - 1);
        }
    };
    const onNextButtonClick = () => {
        if (activeQuestionIndex !== test.questions.length - 1) {
            setActiveQuestionIndex(activeQuestionIndex + 1);
        }
    };

    return (
        <div className={s.page}>
            <TestNavigationPanel
                questions={test.questions}
                activeQuestionIndex={activeQuestionIndex}
                questionsCount={test.questions.length}
                onQuestionClick={onQuestionClick}
                userAnswers={answers}
            />
            <Gap size={'m'} />
            <div className={s.questionContainer}>
                <SduiWidget data={activeQuestion.widget} />
            </div>
            <Gap size={'m'} />
            {activeQuestionId && (
                <AnswerBlock
                    answers={activeQuestion.answers}
                    setAnswer={setAnswer}
                    userAnswer={answers[activeQuestionId]}
                    activeQuestionId={activeQuestionId}
                />
            )}
            <div className={s.buttons}>
                <Button textType='title' textSize={'s'} onClick={onPrevButtonClick}>
                    Назад
                </Button>
                <Button textType='title' textSize={'s'} onClick={onNextButtonClick}>
                    Далее
                </Button>
            </div>
            {isStandaloneIphoneX && <Gap size={'iphoneX'} />}
        </div>
    );
};

export default TestPage;
