import { PC } from '@/view/mobile/shared/types/page';
import s from './index.module.css';
import { useLocation, useParams } from 'react-router-dom';
import { useCallback, useState } from 'react';
import { TestNavigationPanel } from './test-navigation-panel';
import { Gap } from '@/view/mobile/components/ui/gap';
import Button from '@/view/mobile/components/ui/button';
import { SduiWidget } from '@/view/mobile/components/ui/sdui-widget';
import { AnswerBlock } from './answer-block';
import { test as appTest } from '@/core/app';
import { TestResults } from './test-results';
import { useLoader } from '@/view/mobile/shared/hooks/use-loader';
import { TestPageFallback } from './fallback';

const TestPage: PC = ({ useHeaderTitle, isStandaloneIphoneX }) => {
    const { id } = useParams();
    const location = useLocation();

    const test = appTest.useTest();
    const answers = appTest.useAnswers();
    const activeQuestionIndex = appTest.useActiveQuestionIndex();
    const testResults = appTest.useTestResults();
    const mark = appTest.useMark();
    const isResolved = appTest.useIsResolved();

    const setTitle = useHeaderTitle(location.state.pageTitle);
    const [showResults, setShowResults] = useState(false);

    const activeQuestionId = test?.questions[activeQuestionIndex].id;
    const questionsCount = test?.questions.length ?? 0;
    const isActiveQuestionIndexLast = activeQuestionIndex === questionsCount - 1;

    const loadTest = useCallback(async () => {
        if (id) {
            const test = await appTest.loadTest(id);

            console.log(11, test.name);

            if (test.name) {
                setTitle(test.name);
            }
        }
    }, [id, setTitle]);

    const { isLoading } = useLoader(loadTest, { autoLoad: true });

    const activeQuestion = test?.questions[activeQuestionIndex];

    const handleNextButtonClick = async () => {
        if (isActiveQuestionIndexLast) {
            if (id) {
                if (!isResolved) {
                    await appTest.completeTest(id, answers);
                }

                setShowResults(true);
            }
        } else {
            appTest.goToNextQuestion();
        }
    };

    if (isLoading) {
        return <TestPageFallback />;
    }

    if (!activeQuestion) {
        return;
    }

    const nextButtonText = isActiveQuestionIndexLast ? isResolved ? 'Результаты' : 'Завершить' : 'Далее';

    if (showResults) {
        return (
            <div className={s.page}>
                <TestResults testResults={testResults} mark={mark} questions={test.questions} />
            </div>
        );
    }

    return (
        <div className={s.page}>
            <TestNavigationPanel
                questions={test.questions}
                activeQuestionIndex={activeQuestionIndex}
                questionsCount={test.questions.length}
                onQuestionClick={(index) => appTest.setActiveQuestionIndex(index)}
                userAnswers={answers}
                testResults={testResults}
                isResolved={isResolved}
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
                    isResolved={isResolved}
                />
            )}
            <div className={s.buttons}>
                <Button textType='title' textSize={'s'} onClick={() => appTest.goToPrevQuestion()}>
                    Назад
                </Button>
                <Button textType='title' textSize={'s'} onClick={handleNextButtonClick}>
                    {nextButtonText}
                </Button>
            </div>
            {isStandaloneIphoneX && <Gap size={'iphoneX'} />}
        </div>
    );
};

export default TestPage;
