import type {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Mutex } from 'async-mutex';
import { POST_TAG, SESSION_TAG } from './tags';
import { updateAccessToken, signOut } from './sharedActions';
import { RefreshTokenSchema } from '.';
import { config } from '../lib/config';

const baseQuery = fetchBaseQuery({
  baseUrl: config.API_ENDPOINT,
  prepareHeaders: (headers, { getState }) => {
    const { accessToken } = (getState() as RootState).session;

    if (accessToken) {
      headers.set('Authorization', `Bearer ${accessToken}`);
    }

    return headers;
  },
});

const getRefreshToken = () => localStorage.getItem('refreshToken');
const mutex = new Mutex();
const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  await mutex.waitForUnlock();
  let result = await baseQuery(args, api, extraOptions);

  if (result.error && result.error.status === 401) {
    if (!mutex.isLocked()) {
      const release = await mutex.acquire();
      try {
        const refreshToken = getRefreshToken();

        if (refreshToken) {
          const refreshResult = await baseQuery(
            {
              url: '/auth/refresh',
              method: 'POST',
              body: {
                refreshToken,
              },
            },
            api,
            extraOptions
          );

          const { accessToken } = refreshResult.data as RefreshTokenSchema;

          if (accessToken) {
            api.dispatch(updateAccessToken({ accessToken }));
            result = await baseQuery(args, api, extraOptions);
          } else {
            api.dispatch(signOut());
          }
        } else {
          api.dispatch(signOut());
        }
      } finally {
        release();
      }
    } else {
      await mutex.waitForUnlock();
      result = await baseQuery(args, api, extraOptions);
    }
  }

  return result;
};

export const baseApi = createApi({
  tagTypes: [SESSION_TAG, POST_TAG, DETAILED_POST_TAG],
  reducerPath: 'api',
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
});
