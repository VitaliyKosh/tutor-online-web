import { StateService } from '@/view/mobile/shared/lib/clear/services/state';
import { TestStateService as ITestStateService } from './types';
import { SubTest, TestDto, UserAnswer } from 'tutor-online-global-shared';
import { TestStateRepository } from '@/core/repositories/test-state/repository';
import { TestState, UserAnswers } from '@/core/repositories/test-state/types';

export class TestStateService
    extends StateService<TestState, TestStateRepository>
    implements ITestStateService
{
    setTest(test: TestDto) {
        this.$repository.setState((s) => ({
            ...s,
            test: test,
        }));
    }

    getTest(): TestDto | null {
        return this.$repository.state.test;
    }

    useTest(): TestDto | null {
        return this.useObservableValue((s) => s.test) ?? null;
    }

    setAnswer(answerId: string, answer: UserAnswer) {
        this.$repository.setState((s) => ({
            ...s,
            answers: {
                ...s.answers,
                [answerId]: answer,
            },
        }));
    }

    setAnswers(answers: UserAnswers) {
        this.$repository.setState((s) => ({
            ...s,
            answers,
        }));
    }

    getAnswers() {
        return this.$repository.state.answers;
    }

    useAnswers() {
        return this.useObservableValue((s) => s.answers);
    }

    setQuestionIndex(value: number) {
        this.$repository.setState((s) => ({
            ...s,
            activeQuestionIndex: value,
        }));
    }

    getActiveQuestionIndex() {
        return this.$repository.state.activeQuestionIndex;
    }

    useActiveQuestionIndex() {
        return this.useObservableValue((s) => s.activeQuestionIndex);
    }

    setActiveTests(tests: SubTest[]) {
        this.$repository.setState((s) => ({
            ...s,
            activeTests: tests,
        }));
    }

    getActiveTests() {
        return this.$repository.state.activeTests;
    }

    useActiveTests() {
        return this.useObservableValue((s) => s.activeTests);
    }

    setResolvedTests(tests: SubTest[]) {
        this.$repository.setState((s) => ({
            ...s,
            resolvedTests: tests,
        }));
    }

    getResolvedTests() {
        return this.$repository.state.resolvedTests;
    }

    useResolvedTests() {
        return this.useObservableValue((s) => s.resolvedTests);
    }
}
