import { userModel } from '@/entities/user';

const useViewerPost = () => {
  const { data, isLoading } = userModel.hooks.useViewerQuery();

  return {
    posts: data?.posts,
    isLoading,
  };
};

export const profileModel = {
  hooks: {
    useViewerPost,
  },
};
