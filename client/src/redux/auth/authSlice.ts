import { createSlice } from '@reduxjs/toolkit';
import { User } from 'helpers/general/types';
import { apiSlice } from 'redux/api/apiSlice';
import { RootState } from 'redux/store';

type AuthState = {
  user: User | null;
  token: string | null;
};

const authSlice = createSlice({
  name: 'auth',
  initialState: { user: null, token: null } as AuthState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(apiSlice.endpoints.login.matchFulfilled, (state, { payload }) => {
      state.token = payload.token;
      state.user = payload.user;
    }),
      builder.addMatcher(apiSlice.endpoints.signup.matchFulfilled, (state, { payload }) => {
        state.token = payload.token;
        state.user = payload.user;
      });
  },
});

export default authSlice.reducer;

export const selectCurrentUser = (state: RootState) => state.auth.user;
