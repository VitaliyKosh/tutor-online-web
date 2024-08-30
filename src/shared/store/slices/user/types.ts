import { AccountTypes } from 'tutor-online-global-shared';

export enum UserAuthStatus {
    LOADING = 'LOADING',
    SIGN_IN = 'SIGN_IN',
    SIGN_OUT = 'SIGN_OUT',
}

export type UserStoreObject = {
    login: string;
    firstName: string;
    lastName: string;
    accountType: AccountTypes;
};

export type UserState = {
    authStatus: UserAuthStatus;
    user: UserStoreObject | null;
};
