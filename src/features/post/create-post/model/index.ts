import { postModel } from '@/entities/post';
import { CreatePostDto } from '@/shared/api';

export interface PostFormData {
  postTitle: string;
  postText: string;
  postImage: File | null;
}

export interface CreatePostData {
  title: string;
  text: string;
  tags: string[];
  image: File | null;
}

export const useCreatePost = () => {
  const [createPostMutation, { isLoading: isCreatePostLoading }] =
    postModel.hooks.useCreatePostMutation();
  const [updatePostImageMutation, { isLoading: isUpdatePostLoading }] =
    postModel.hooks.useUpdatePostImageMutation();

  const createPost = async (data: CreatePostData) => {
    const createPostDto: CreatePostDto = {
      title: data.title,
      text: data.text,
      tags: data.tags,
    };

    const createdPost = await createPostMutation(createPostDto).unwrap();

    if (data.image)
      await updatePostImageMutation({
        postId: createdPost.id,
        image: data.image,
      });
  };

  return {
    createPost,
    isLoading: isCreatePostLoading || isUpdatePostLoading,
  };
};
