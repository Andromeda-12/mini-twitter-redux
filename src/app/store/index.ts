import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { baseApi } from '@/shared/api';
import { sessionModel } from '@/entities/session';
import { notificationModel } from '@/shared/lib/notification';
import notificationMiddleware from '@/shared/lib/notification/lib/middleware';

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
      .concat(notificationMiddleware),
});
