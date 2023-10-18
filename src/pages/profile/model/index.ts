import { postModel } from '@/entities/post';
import { userModel } from '@/entities/user';

const useViewerPost = () => {
  const { data, isLoading: isLoadingViewer } = userModel.hooks.useViewerQuery();
  const { data: posts, isLoading: isLoadingPosts } =
    profileModel.hooks.useGetPostsQuery(
      {
        userId: data?.id,
      },
      {
        skip: !data,
      }
    );

  return {
    posts: posts,
    isLoading: isLoadingViewer || isLoadingPosts,
  };
};

export const profileModel = {
  hooks: {
    useViewerPost,
    useDeletePostMutation: postModel.hooks.useDeletePostMutation,
    useGetPostsQuery: postModel.hooks.useGetPostsQuery,
  },
};
