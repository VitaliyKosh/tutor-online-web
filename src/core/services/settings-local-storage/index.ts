import { localStorageRepository } from '@/core/repositories/local-storage';
import { SettingsLocalStorageService } from './service';

export const settingsLocalStorageService = new SettingsLocalStorageService({ repository: localStorageRepository });
