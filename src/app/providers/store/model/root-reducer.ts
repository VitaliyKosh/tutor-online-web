import { user } from '@/shared/store/slices/user';
import { combineReducers } from '@reduxjs/toolkit';

export const rootReducer = combineReducers({
    user,
    // [authApi.reducerPath]: authApi.reducer,
});
