import { apiRepository } from '@/core/repositories/api';
import { AuthApiService } from './service';

export const authApiService = new AuthApiService({ repository: apiRepository });
