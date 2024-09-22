import { TestApiService } from '@/core/services/test-api/types';
import { TestStateService } from '@/core/services/test-state/types';
import { mo } from '@/shared/helpers/map-object';
import { Dependencies, Module } from '@/shared/clear';
import {
    ChoosingSeveralUserAnswers,
    ChoosingUserAnswers,
    CorelationUserAnswers,
    FreeAnswerUserAnswers,
    UserAnswer,
} from 'tutor-online-global-shared';

export interface TestTestDeps extends Dependencies {
    testStateService: TestStateService;
    testApiService: TestApiService;
}

export class TestModule extends Module<TestTestDeps> {
    async loadTest(testId: string) {
        const testData = await this.$deps.testApiService.loadTest({ testId });

        this.$deps.testStateService.setTest(testData.test);
        this.$deps.testStateService.setAnswers(testData.userAnswers ? testData.userAnswers : {});
        this.$deps.testStateService.setQuestionIndex(0);
        this.$deps.testStateService.setIsResolved(testData.isResolved ?? false);
        this.$deps.testStateService.setMark(testData.mark);

        if (testData.userAnswers) {
            const results = mo(testData.userAnswers).map(([, v]) => v.right);

            this.$deps.testStateService.setTestResults(results);
        }

        if (testData.mark) {
            this.$deps.testStateService.setMark(testData.mark);
        }

        return testData.test;
    }

    async loadUserActiveTests() {
        const tests = await this.$deps.testApiService.loadUserActiveTests();

        this.$deps.testStateService.setActiveTests(tests.activeTests);
        this.$deps.testStateService.setResolvedTests(tests.resolvedTests);

        return tests;
    }

    getTest() {
        return this.$deps.testStateService.getTest();
    }

    useTest() {
        return this.$deps.testStateService.useTest();
    }

    setAnswer(
        answerId: string,
        answer:
            | ChoosingUserAnswers
            | ChoosingSeveralUserAnswers
            | FreeAnswerUserAnswers
            | CorelationUserAnswers,
    ) {
        this.$deps.testStateService.setAnswer(answerId, answer);
    }

    getAnswers() {
        return this.$deps.testStateService.useAnswers();
    }

    useAnswers() {
        return this.$deps.testStateService.useAnswers();
    }

    setActiveQuestionIndex(value: number) {
        const test = this.getTest();

        if (test && value <= test.questions.length - 1 && value >= 0) {
            this.$deps.testStateService.setQuestionIndex(value);
        }
    }

    getActiveQuestionIndex() {
        return this.$deps.testStateService.getActiveQuestionIndex();
    }

    useActiveQuestionIndex() {
        return this.$deps.testStateService.useActiveQuestionIndex();
    }

    goToNextQuestion() {
        const currentIndex = this.getActiveQuestionIndex();
        const test = this.getTest();

        if (test && currentIndex !== test.questions.length - 1) {
            this.$deps.testStateService.setQuestionIndex(currentIndex + 1);
        }
    }

    goToPrevQuestion() {
        const currentIndex = this.getActiveQuestionIndex();
        const test = this.getTest();

        if (test && currentIndex !== 0) {
            this.$deps.testStateService.setQuestionIndex(currentIndex - 1);
        }
    }

    getActiveTests() {
        return this.$deps.testStateService.getActiveTests();
    }

    useActiveTests() {
        return this.$deps.testStateService.useActiveTests();
    }

    getResolvedTests() {
        return this.$deps.testStateService.getResolvedTests();
    }

    useResolvedTests() {
        return this.$deps.testStateService.useResolvedTests();
    }

    getTestResults() {
        return this.$deps.testStateService.getTestResults();
    }

    useTestResults() {
        return this.$deps.testStateService.useTestResults();
    }

    getMark() {
        return this.$deps.testStateService.getMark();
    }

    useMark() {
        return this.$deps.testStateService.useMark();
    }

    getIsResolved() {
        return this.$deps.testStateService.getIsResolved();
    }

    useIsResolved() {
        return this.$deps.testStateService.useIsResolved();
    }

    async completeTest(testId: string, answers: UserAnswer) {
        const { results, mark } = await this.$deps.testApiService.completeTest(testId, answers);

        console.log(results, mark);

        this.$deps.testStateService.setTestResults(results);
        this.$deps.testStateService.setMark(mark);

        return { results, mark };
    }
}
