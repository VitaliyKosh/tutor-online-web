import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserAuthStatus, UserState } from './types';
import { useSignOut } from './actions';

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
        signOut: (state) => {
            state.user = null;
            state.authStatus = UserAuthStatus.SIGN_OUT;
        },
    },
});

export const { signIn, signOut } = userSlice.actions;
export const user = userSlice.reducer;
export { useSignOut };
