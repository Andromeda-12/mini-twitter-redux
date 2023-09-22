import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { signOutModel } from '@/features/auth/sign-out';
import { sessionModel } from '@/entities/session';
import { notificationModel } from '@/shared/lib/notification';
import { baseApi } from '@/shared/api';

export const rootReducer = combineReducers({
  [sessionModel.name]: sessionModel.reducer,
  [baseApi.reducerPath]: baseApi.reducer,
  [notificationModel.name]: notificationModel.reducer,
});

export const appStore = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware()
      .concat(baseApi.middleware)
      .concat(notificationModel.notificationMiddleware)
      .concat(signOutModel.signOutListener.middleware),
});
