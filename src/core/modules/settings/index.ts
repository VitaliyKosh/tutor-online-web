import {
    LocalStorageSettingsItems,
    LocalStorageSettingsKeys,
} from '@/core/repositories/local-storage/types';
import { SettingsStateService } from '@/core/services/settings-local-storage/types';
import { Dependencies, Module } from '@/shared/clear';

export interface SettingsModuleDeps extends Dependencies {
    settingsStateService: SettingsStateService;
}

export class SettingsModule extends Module<SettingsModuleDeps> {
    setSetting<K extends LocalStorageSettingsKeys>(key: K, value: LocalStorageSettingsItems[K]) {
        return this.$deps.settingsStateService.setSetting(key, value);
    }

    getSetting<K extends LocalStorageSettingsKeys>(key: K) {
        return this.$deps.settingsStateService.getSetting(key);
    }
}
