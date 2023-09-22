import {
  TypedStartListening,
  createAsyncThunk,
  createListenerMiddleware,
} from '@reduxjs/toolkit';
import { sessionApi, sessionModel } from '@/entities/session';
import { SESSION_TAG, signOut } from '@/shared/api';
import { wait } from '@/shared/lib';

const signOutThunk = createAsyncThunk<void, void, { state: RootState }>(
  'auth/signOut',
  async (_: unknown, { dispatch }) => {
    dispatch(sessionModel.actions.clearSessionData());
    
    // Wait 10ms to invalidateTags in next event loop tick.
    // Otherwise after invalidate related requests with SESSION_TAG
    // will be started, but isAuthorized will still be equal to true
    await wait(10);

    dispatch(sessionApi.util.invalidateTags([SESSION_TAG]));
  }
);

const signOutListener = createListenerMiddleware();

type TypedListening = TypedStartListening<RootState, RootDispatch>;

const startSignOutListener = signOutListener.startListening as TypedListening;

startSignOutListener({
  actionCreator: signOut,
  effect: async (_, api) => {
    api.dispatch(signOutThunk());
  },
});

export const signOutModel = {
  signOutListener,
  signOut,
};
