import { AnyAction } from 'redux';
import { Middleware } from '@reduxjs/toolkit';
import { notificationModel } from '..';

export const notificationMiddleware: Middleware =
  store => next => (action: AnyAction) => {
    if (action.error) {
      const errorMessage = action.payload?.data?.message || 'An error occurred';
      const errorTitle = action.payload?.data.error || null;
      store.dispatch(
        notificationModel.actions.addNotification({
          message: errorMessage,
          type: 'error',
          title: errorTitle,
        })
      );
    }

    return next(action);
  };
