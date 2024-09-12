import { TestApiService } from '@/core/services/test-api/types';
import { TestStateService } from '@/core/services/test-state/types';
import { Dependencies, Module } from '@/view/mobile/shared/lib/clear';
import { UserAnswer } from 'tutor-online-global-shared';

export interface TestTestDeps extends Dependencies {
    testStateService: TestStateService;
    testApiService: TestApiService;
}

export class TestModule extends Module<TestTestDeps> {
    async loadTest(testId: string) {
        const test = await this.$deps.testApiService.loadTest({ testId });

        this.$deps.testStateService.setTest(test);
        this.$deps.testStateService.setAnswers({});
        this.$deps.testStateService.setQuestionIndex(0);

        return test;
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

    setAnswer(answerId: string, answer: UserAnswer) {
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
}
