import type {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { SESSION_TAG } from './tags';
import { signOut, updateAccessToken } from './sharedActions';
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

const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result.error && result.error.status === 401) {
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
  }

  return result;
};

export const baseApi = createApi({
  tagTypes: [SESSION_TAG],
  reducerPath: 'api',
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
});
