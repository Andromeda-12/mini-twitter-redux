import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { SESSION_TAG } from './tags';
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

export const baseApi = createApi({
  tagTypes: [SESSION_TAG],
  reducerPath: 'api',
  baseQuery: baseQuery,
  endpoints: () => ({}),
});
