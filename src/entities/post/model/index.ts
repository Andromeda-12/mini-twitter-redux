import {
  useCreatePostMutation,
  useDeletePostMutation,
  useUpdatePostImageMutation,
  useGetPostsQuery,
} from '../api';

export const postModel = {
  hooks: {
    useCreatePostMutation,
    useUpdatePostImageMutation,
    useDeletePostMutation,
    useGetPostsQuery,
  },
};
