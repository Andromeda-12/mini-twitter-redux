import { UpdatePostData, postModel } from '@/entities/post';

export interface PostFormData {
  postId: number;
  title: string;
  text: string;
  tags: string[];
  image: File | null;
}

const useUpdatePost = () => {
  const [updatePostMutation, { isLoading: isUpdatePostLoading }] =
    postModel.hooks.useUpdatePostMutation();
  const [updatePostImageMutation, { isLoading: isUpdatePostImageLoading }] =
    postModel.hooks.useUpdatePostImageMutation();

  const updatePost = async (data: PostFormData) => {
    const updatePostDto: UpdatePostData = {
      postId: data.postId,
      body: {
        title: data.title,
        text: data.text,
        tags: data.tags,
      },
    };

    const updatedPost = await updatePostMutation(updatePostDto).unwrap();

    if (data.image)
      await updatePostImageMutation({
        postId: updatedPost.id,
        image: data.image,
      });
  };

  return {
    updatePost,
    isLoading: isUpdatePostLoading || isUpdatePostImageLoading,
  };
};

export const updatePostModel = {
  hooks: {
    useUpdatePost,
    useGetPostQuery: postModel.hooks.useGetPostQuery,
  },
};
