import { apiRepository } from '@/core/repositories/api';
import { TestApiService } from './service';

export const testApiService = new TestApiService({ repository: apiRepository });
