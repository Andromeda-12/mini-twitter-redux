import {
  useCreatePostMutation,
  useDeletePostMutation,
  useUpdatePostImageMutation,
  useGetPostsQuery,
  useGetPostQuery,
  useUpdatePostMutation,
} from '../api';

export const postModel = {
  hooks: {
    useCreatePostMutation,
    useUpdatePostImageMutation,
    useUpdatePostMutation,
    useDeletePostMutation,
    useGetPostsQuery,
    useGetPostQuery,
  },
};
