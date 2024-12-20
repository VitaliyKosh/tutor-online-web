import {
    LocalStorageSettingsItems,
    LocalStorageSettingsKeys,
} from '@/core/repositories/local-storage/types';

export interface SettingsStateService {
    getSetting: <K extends LocalStorageSettingsKeys>(key: K) => LocalStorageSettingsItems[K];
    setSetting: <K extends LocalStorageSettingsKeys>(
        key: K,
        value: LocalStorageSettingsItems[K],
    ) => void;
}
