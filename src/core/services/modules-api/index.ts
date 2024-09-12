import { apiRepository } from '@/core/repositories/api';
import { ModulesApiService } from './service';

export const modulesApiService = new ModulesApiService({ repository: apiRepository });
