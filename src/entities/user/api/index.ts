import {
  baseApi,
  InitSchema,
  SESSION_TAG,
  SwaggerFileUploadDto,
  UserDetailSchema,
} from '@/shared/api';

export const userApi = baseApi.injectEndpoints({
  endpoints: build => ({
    updateAvatar: build.mutation<UserDetailSchema, SwaggerFileUploadDto>({
      query: body => {
        const formData = new FormData();
        formData.append('file', body.file);
        return {
          url: `/user/avatar`,
          method: 'POST',
          body: formData,
        };
      },
      invalidatesTags: [SESSION_TAG],
    }),
    viewer: build.query<InitSchema, void>({
      query: () => ({
        url: `/init`,
      }),
      providesTags: [SESSION_TAG],
    }),
  }),
});

export const { useUpdateAvatarMutation, useViewerQuery } = userApi;
