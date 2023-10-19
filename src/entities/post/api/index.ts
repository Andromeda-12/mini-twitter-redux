import {
  baseApi,
  CreatePostDto,
  DETAILED_POST_TAG,
  POST_TAG,
  PostDetailSchema,
  PostSchema,
} from '@/shared/api';
import { UpdatePostData } from '../lib';

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

    getPost: build.query<
      PostDetailSchema,
      {
        postId?: number;
      }
    >({
      query: ({ postId }) => ({
        url: `/post/${postId}`,
      }),
      providesTags: [DETAILED_POST_TAG],
    }),

    createPost: build.mutation<PostSchema, CreatePostDto>({
      query: body => ({
        url: `/post`,
        method: 'POST',
        body,
      }),
      invalidatesTags: [POST_TAG],
    }),

    updatePost: build.mutation<PostSchema, UpdatePostData>({
      query: ({ postId, body }) => ({
        url: `/post/${postId}`,
        method: 'POST',
        body,
      }),
      invalidatesTags: [POST_TAG, DETAILED_POST_TAG],
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
  useUpdatePostMutation,
  useDeletePostMutation,
  useGetPostsQuery,
  useGetPostQuery,
} = postApi;
