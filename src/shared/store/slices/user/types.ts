export type UserStoreObject = {
    id: string;
    login: string;
};

export type UserState = {
    user: UserStoreObject | null;
};
