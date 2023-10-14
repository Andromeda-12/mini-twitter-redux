import { baseApi, CreatePostDto, POST_TAG, PostSchema } from '@/shared/api';

export const sessionApi = baseApi.injectEndpoints({
  endpoints: build => ({
    createPost: build.mutation<PostSchema, CreatePostDto>({
      query: body => ({
        url: `/post`,
        method: 'POST',
        body,
      }),
      invalidatesTags: [POST_TAG],
    }),
    updatePostImage: build.mutation<
      PostSchema,
      { postId: number; image: File }
    >({
      query: ({ postId, image }) => {
        const formData = new FormData();
        formData.append('file', image);
        return {
          url: `/post/image/${postId}`,
          method: 'POST',
          body: formData,
        };
      },
      invalidatesTags: [POST_TAG],
    }),
  }),
});

export const { useCreatePostMutation, useUpdatePostImageMutation } = sessionApi;
