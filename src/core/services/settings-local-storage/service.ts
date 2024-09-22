import { Service } from '@/shared/clear';
import { LocalStorageRepository } from '@/core/repositories/local-storage/repository';
import {
    LocalStorageSettingsItems,
    LocalStorageSettingsKeys,
} from '@/core/repositories/local-storage/types';
import { SettingsStateService } from './types';

export class SettingsLocalStorageService
    extends Service<LocalStorageRepository>
    implements SettingsStateService
{
    getSetting<K extends LocalStorageSettingsKeys>(key: K): LocalStorageSettingsItems[K] {
        return this.$repository.getItem(key);
    }

    setSetting<K extends LocalStorageSettingsKeys>(
        key: K,
        value: LocalStorageSettingsItems[K],
    ): void {
        return this.$repository.setItem(key, value);
    }
}
