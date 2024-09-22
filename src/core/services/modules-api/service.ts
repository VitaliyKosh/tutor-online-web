import { ApiRepository } from '@/core/repositories/api/repository';
import { ModulesApiService as IModulesApiService } from './types';
import { Service } from '@/shared/clear';
import { GetModuleResBody, GetRootModulesResBody } from 'tutor-online-global-shared';

export class ModulesApiService extends Service<ApiRepository> implements IModulesApiService {
    async loadModule({ moduleId }: { moduleId: string }) {
        const res = await this.$repository.get<GetModuleResBody>(`/module/${moduleId}`);

        return res.data.module;
    }

    async loadRootModules() {
        const res = await this.$repository.get<GetRootModulesResBody>('/module/root');

        return res.data.rootModules;
    }
}
