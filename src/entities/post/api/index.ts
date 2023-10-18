import { baseApi, CreatePostDto, POST_TAG, PostSchema } from '@/shared/api';

export const postApi = baseApi.injectEndpoints({
  endpoints: build => ({
    getPosts: build.query<
      PostSchema[],
      {
        userId?: number;
      }
    >({
      query: ({ userId }) => ({
        url: `/post`,
        params: {
          userId,
        },
      }),
      providesTags: [POST_TAG],
    }),
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
    deletePost: build.mutation<PostSchema, { postId: number }>({
      query: ({ postId }) => ({
        url: `/post/${postId}`,
        method: 'DELETE',
      }),
      invalidatesTags: [POST_TAG],
    }),
  }),
});

export const {
  useCreatePostMutation,
  useUpdatePostImageMutation,
  useDeletePostMutation,
  useGetPostsQuery,
} = postApi;
