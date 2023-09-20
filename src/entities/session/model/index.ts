import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { useTypedSelector } from '@/shared/lib';
import { RefreshTokenSchema } from '@/shared/api';
import { sessionApi, useSignInMutation, useSignUpMutation } from '../api';

type SessionSliceState = {
  isAuthorized: boolean;
  accessToken: string | null;
};

const initialState: SessionSliceState = {
  isAuthorized: !!localStorage.getItem('refreshToken'),
  accessToken: null,
};

export const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    clearSessionData: state => {
      state.isAuthorized = false;
      state.accessToken = null;
      localStorage.removeItem('refreshToken');
    },
    updateAccessToken: (state, action: PayloadAction<RefreshTokenSchema>) => {
      state.isAuthorized = true;
      state.accessToken = action.payload.accessToken;
    },
  },
  extraReducers: builder => {
    builder.addMatcher(
      sessionApi.endpoints.signIn.matchFulfilled,
      (state: SessionSliceState, { payload }) => {
        state.isAuthorized = true;
        state.accessToken = payload.accessToken;
        localStorage.setItem('refreshToken', payload.refreshToken);
      }
    );
  },
});

const useIsAuthorized = () =>
  useTypedSelector(state => state.session.isAuthorized);

export const sessionModel = {
  ...sessionSlice,
  selectors: {
    useIsAuthorized,
  },
  hooks: {
    useSignInMutation,
    useSignUpMutation,
  },
};
