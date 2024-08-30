import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserAuthStatus, UserState } from './types';

const initialState: UserState = {
    authStatus: UserAuthStatus.LOADING,
    user: null,
};

export const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        signIn: (state, action: PayloadAction<UserState>) => {
            state.user = action.payload.user;
            state.authStatus = action.payload.authStatus;
        },
    },
});

export const { signIn } = userSlice.actions;
export const user = userSlice.reducer;
