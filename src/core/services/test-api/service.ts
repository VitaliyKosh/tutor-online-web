import { ApiRepository } from '@/core/repositories/api/repository';
import { TestApiService as ITestApiService } from './types';
import { Service } from '@/shared/clear';
import {
    CompleteTestResBody,
    GetTestResBody,
    GetUserActiveTestResBody,
    UserAnswer,
} from 'tutor-online-global-shared';

export class TestApiService extends Service<ApiRepository> implements ITestApiService {
    async loadTest({ testId }: { testId: string }) {
        const res = await this.$repository.get<GetTestResBody>(`/test/${testId}`);

        return {
            test: res.data.test,
            isResolved: res.data.isResolved,
            mark: res.data.mark,
            userAnswers: res.data.userAnswers,
        };
    }

    async loadUserActiveTests() {
        const res = await this.$repository.get<GetUserActiveTestResBody>('/test/activeTests');

        return {
            activeTests: res.data.activeTests,
            resolvedTests: res.data.resolvedTests,
        };
    }

    async completeTest(testId: string, answers: UserAnswer) {
        const res = await this.$repository.post<CompleteTestResBody>(`/test/complete/${testId}`, {
            answers,
        });

        return res.data;
    }
}
