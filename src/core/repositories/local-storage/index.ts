import { LocalStorageRepository } from './repository';
import {
    LocalStorageSettingsItems,
    LocalStorageSettingsKeys,
    LocalStorageAItems,
    LocalStorageAKeys,
} from './types';

export const settingsInitialState: LocalStorageSettingsItems = {
    [LocalStorageSettingsKeys.SETTINGS_NOTIFICATIONS_ALLOWED]: false,
    [LocalStorageSettingsKeys.SETTINGS_NOTIFICATIONS_ALLOWED1]: 0,
};

export const aInitialState: LocalStorageAItems = {
    [LocalStorageAKeys.A_KEY]: 0,
};

export const localStorageRepository = new LocalStorageRepository({
    initialState: { ...settingsInitialState, ...aInitialState },
});
