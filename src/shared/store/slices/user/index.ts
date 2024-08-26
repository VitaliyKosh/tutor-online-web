import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserState } from './types';

const initialState: UserState = {
    user: null,
};

export const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<UserState>) => {
            state.user = action.payload.user;
        },
    },
});

export const { setUser } = userSlice.actions;
export const user = userSlice.reducer;
