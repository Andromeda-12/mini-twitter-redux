import {
  baseApi,
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
  }),
});

export const { useUpdateAvatarMutation } = userApi;
