import { testStateRepository } from '@/core/repositories/test-state';
import { TestStateService } from './service';

export const testStateService = new TestStateService({ repository: testStateRepository });
