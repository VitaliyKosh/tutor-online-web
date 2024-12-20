import { QuestionDto } from 'tutor-online-global-shared/dist/types/dto/question/shared';
import s from './index.module.css';
import { Fragment } from 'react/jsx-runtime';
import { Text } from '@/view/mobile/components/ui/text';
import { getMark } from '@/view/mobile/shared/lib/mark/get-mark';
import { Mark } from '@/view/mobile/components/ui/test/mark';

type Props = {
    testResults?: Record<string, boolean | undefined>;
    mark: number | undefined;
    questions: QuestionDto[] | undefined | null;
};

const getResultText = (result: boolean | undefined) => {
    return result === true ? 'Верно' : result === false ? 'Неверно' : 'Нет ответа';
};

export const TestResults = ({ testResults, mark, questions }: Props) => {
    return (
        <div className={s.resultsWrapper}>
            <div className={s.results}>
                {questions?.map((question, i) => {
                    return (
                        <Fragment key={question.id}>
                            <div className={s.resultNumber}>
                                <Text textSize={'xl'}>{i + 1}</Text>
                            </div>
                            <div className={s.result}>
                                {testResults && (
                                    <Text
                                        textSize={'xl'}
                                        textColor={
                                            testResults[question.id] ? 'positive' : 'negative'
                                        }
                                    >
                                        {getResultText(testResults[question.id])}
                                    </Text>
                                )}
                            </div>
                        </Fragment>
                    );
                })}
            </div>

            <div className={s.mark}>
                <Text textSize={'xl'}>Оценка:</Text>
                <Mark mark={getMark(mark)} />{' '}
            </div>
        </div>
    );
};
