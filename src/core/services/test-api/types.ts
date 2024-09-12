import { SubTest, TestDto } from 'tutor-online-global-shared';

export interface TestApiService {
    loadTest: (options: { testId: string }) => Promise<TestDto>;
    loadUserActiveTests: () => Promise<{
        activeTests: SubTest[];
        resolvedTests: SubTest[];
    }>;
}
