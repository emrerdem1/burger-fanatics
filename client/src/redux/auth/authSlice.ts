import { createSlice } from '@reduxjs/toolkit';
import { UserResponse } from 'helpers/general/types';
import { apiSlice } from 'redux/api/apiSlice';
import { RootState } from 'redux/store';

const INITIAL_AUTH_STATE: UserResponse = { user: null, jwt: null };

const authSlice = createSlice({
  name: 'auth',
  initialState: INITIAL_AUTH_STATE,
  reducers: {
    persistLogin: (state) => {
      const token = getRefreshToken();
      state.jwt = token.jwt;
      state.user = token.user;
    },
    logout: (state) => {
      state.jwt = null;
      state.user = null;
      setRefreshToken({ user: null, jwt: null });
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(apiSlice.endpoints.login.matchFulfilled, (state, { payload }) => {
      state.jwt = payload.jwt;
      state.user = payload.user;
      setRefreshToken({ user: payload.user, jwt: payload.jwt });
    }),
      builder.addMatcher(apiSlice.endpoints.signup.matchFulfilled, (state, { payload }) => {
        state.jwt = payload.jwt;
        state.user = payload.user;
        setRefreshToken({ user: payload.user, jwt: payload.jwt });
      });
  },
});

export const selectCurrentUser = (state: RootState) => {
  return state.auth.user;
};
export const { actions, reducer } = authSlice;
export const { logout: logoutUser, persistLogin } = actions;
const setRefreshToken = ({ user, jwt }: UserResponse) =>
  localStorage.setItem('refreshToken', JSON.stringify({ user, jwt }));
export const getRefreshToken = () => JSON.parse(localStorage.getItem('refreshToken') || '{}');
export default reducer;
