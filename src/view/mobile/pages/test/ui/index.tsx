import { PC } from '@/view/mobile/shared/types/page';
import s from './index.module.css';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { TestNavigationPanel } from './test-navigation-panel';
import { Gap } from '@/view/mobile/components/ui/gap';
import Button from '@/view/mobile/components/ui/button';
import { SduiWidget } from '@/view/mobile/components/ui/sdui-widget';
import { AnswerBlock } from './answer-block';
import { test as appTest } from '@/core/app';

const TestPage: PC = ({ useHeaderTitle, isStandaloneIphoneX }) => {
    const { id } = useParams();
    const test = appTest.useTest();
    const answers = appTest.useAnswers();
    const activeQuestionIndex = appTest.useActiveQuestionIndex();
    const setTitle = useHeaderTitle('Тест');

    const activeQuestionId = test?.questions[activeQuestionIndex].id;

    useEffect(() => {
        const loadTest = async () => {
            if (id) {
                const test = await appTest.loadTest(id);

                if (test.name) {
                    setTitle(test.name);
                }
            }
        };

        loadTest();
    }, [id, setTitle]);

    if (!test) {
        return;
    }

    const activeQuestion = test.questions[activeQuestionIndex];

    if (!activeQuestion) {
        return;
    }

    return (
        <div className={s.page}>
            <TestNavigationPanel
                questions={test.questions}
                activeQuestionIndex={activeQuestionIndex}
                questionsCount={test.questions.length}
                onQuestionClick={(index) => appTest.setActiveQuestionIndex(index)}
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
                    userAnswer={answers[activeQuestionId]}
                    activeQuestionId={activeQuestionId}
                />
            )}
            <div className={s.buttons}>
                <Button textType='title' textSize={'s'} onClick={() => appTest.goToPrevQuestion()}>
                    Назад
                </Button>
                <Button textType='title' textSize={'s'} onClick={() => appTest.goToNextQuestion()}>
                    Далее
                </Button>
            </div>
            {isStandaloneIphoneX && <Gap size={'iphoneX'} />}
        </div>
    );
};

export default TestPage;
