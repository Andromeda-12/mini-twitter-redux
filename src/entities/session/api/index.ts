import {
  AuthLoginDto,
  baseApi,
  LoginSchema,
  RegisterSchema,
  SESSION_TAG,
} from '@/shared/api';

export const sessionApi = baseApi.injectEndpoints({
  endpoints: build => ({
    signIn: build.mutation<LoginSchema, AuthLoginDto>({
      query: body => ({
        url: `/auth/login`,
        method: 'POST',
        body,
      }),
      invalidatesTags: [SESSION_TAG],
    }),
    signUp: build.mutation<RegisterSchema, AuthLoginDto>({
      query: body => ({
        url: `/auth/register`,
        method: 'POST',
        body,
      }),
      invalidatesTags: [SESSION_TAG],
    }),
  }),
});

export const { useSignInMutation, useSignUpMutation } = sessionApi;
