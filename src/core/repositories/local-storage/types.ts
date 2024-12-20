export enum LocalStorageSettingsKeys {
    SETTINGS_NOTIFICATIONS_ALLOWED = 'SETTINGS_NOTIFICATIONS_ALLOWED',
    SETTINGS_NOTIFICATIONS_ALLOWED1 = 'SETTINGS_NOTIFICATIONS_ALLOWED1',
}

export type LocalStorageSettingsItems = {
    [LocalStorageSettingsKeys.SETTINGS_NOTIFICATIONS_ALLOWED]: boolean;
    [LocalStorageSettingsKeys.SETTINGS_NOTIFICATIONS_ALLOWED1]: number;
};

export enum LocalStorageAKeys {
    A_KEY = 'A_KEY',
}

export type LocalStorageAItems = {
    [LocalStorageAKeys.A_KEY]: number;
};

export type LocalStorageKeys = LocalStorageSettingsKeys | LocalStorageAKeys;
export type LocalStorageItems = LocalStorageSettingsItems & LocalStorageAItems;
