import { LocalStorageRepository as CLocalStorageRepository } from '@/shared/clear/repositories/local-storage';
import { LocalStorageItems, LocalStorageKeys } from './types';

export class LocalStorageRepository extends CLocalStorageRepository<
    LocalStorageKeys,
    LocalStorageItems
> {}
