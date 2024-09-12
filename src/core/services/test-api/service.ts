import { ApiRepository } from '@/core/repositories/api/repository';
import { TestApiService as ITestApiService } from './types';
import { Service } from '@/view/mobile/shared/lib/clear';
import { GetTestResBody, GetUserActiveTestResBody } from 'tutor-online-global-shared';

export class TestApiService extends Service<ApiRepository> implements ITestApiService {
    async loadTest({ testId }: { testId: string }) {
        const res = await this.$repository.get<GetTestResBody>(`/test/${testId}`);

        return res.data.test;
    }

    async loadUserActiveTests() {
        const res = await this.$repository.get<GetUserActiveTestResBody>('/test/activeTests');

        return {
            activeTests: res.data.activeTests,
            resolvedTests: res.data.resolvedTests,
        };
    }
}
