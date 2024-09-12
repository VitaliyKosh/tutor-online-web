import { modulesStateRepository } from '@/core/repositories/modules-state';
import { ModulesStateService } from './service';

export const modulesStateService = new ModulesStateService({ repository: modulesStateRepository });
