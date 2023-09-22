import { createAction } from '@reduxjs/toolkit';
import { RefreshTokenSchema } from '.';

export const updateAccessToken = createAction<RefreshTokenSchema>(
  'session/updateAccessToken'
);

export const signOut = createAction('auth/signOut');
