import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/shared/ui';
import {
  PostTitleField,
  PostTextField,
  PostImageField,
  PostTagsField,
} from './FormFields';
import { CreatePostData, PostFormData, useCreatePost } from '../model';

const defaultValues: PostFormData = {
  postTitle: '',
  postText: '',
  postImage: null,
};

interface CreatePostFormProps {
  onClose: () => void;
}

export const CreatePostForm = ({ onClose }: CreatePostFormProps) => {
  const { control, handleSubmit } = useForm<PostFormData>({
    defaultValues,
  });
  const [tags, setTags] = useState<string[]>([]);

  const { createPost, isLoading } = useCreatePost();

  const onSubmit = async (data: PostFormData) => {
    const createPostDto: CreatePostData = {
      title: data.postTitle,
      text: data.postText,
      image: data.postImage,
      tags,
    };

    await createPost(createPostDto);

    onClose();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <PostTitleField control={control} disabled={isLoading} />
      <PostTextField control={control} disabled={isLoading} />
      <PostImageField
        className="md:max-w-[266px]"
        control={control}
        disabled={isLoading}
      />
      <PostTagsField onTagsChange={setTags} disabled={isLoading} />

      <Button className="!mt-8 md:max-w-[240px]" size="lg" disabled={isLoading}>
        Опубликовать пост
      </Button>
    </form>
  );
};
