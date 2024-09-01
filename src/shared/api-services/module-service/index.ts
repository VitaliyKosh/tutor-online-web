import { AxiosResponse } from 'axios';
import $api, { API_URL } from '@/shared/lib/http';
import { GetModuleResBody, GetRootModulesResBody } from 'tutor-online-global-shared';

export default class ModuleService {
    static async getModule(moduleId: string): Promise<AxiosResponse<GetModuleResBody>> {
        return await $api.get(API_URL + '/module/' + moduleId);
    }

    static async getRootModules(): Promise<AxiosResponse<GetRootModulesResBody>> {
        return await $api.get(API_URL + '/module/root');
    }
}
