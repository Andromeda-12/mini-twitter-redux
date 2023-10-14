import { MAX_POST_IMAGE_SIZE } from '@/shared/constants';
import {
  Button,
  Input,
  Label,
  Tag,
  TextareaFormField,
  UploadImageFormField,
} from '@/shared/ui';
import { useState } from 'react';
import { Control } from 'react-hook-form';

interface FieldsProps {
  control: Control<any>;
  disabled?: boolean;
  className?: string;
}

export const PostTitleField = ({ control }: FieldsProps) => (
  <TextareaFormField
    control={control}
    label="Заголовок"
    name="postTitle"
    rules={{
      required: 'Это поле обязательное',
    }}
  />
);

export const PostTextField = ({ control }: FieldsProps) => (
  <TextareaFormField
    control={control}
    label="Введите текст"
    name="postText"
    rules={{
      required: 'Это поле обязательное',
    }}
  />
);

export const PostImageField = ({ control, className }: FieldsProps) => (
  <UploadImageFormField
    control={control}
    label="Изображение"
    name="postImage"
    className={className}
    rules={{
      validate: file => {
        if (!file) {
          return true;
        }
        if ((file as File).size > MAX_POST_IMAGE_SIZE) {
          return `Изображение не может быть больше ${
            MAX_POST_IMAGE_SIZE / 1024 / 1024
          } mb`;
        }
        return true;
      },
    }}
  />
);

interface PostTagsFieldProps {
  onTagsChange: (tags: string[]) => void;
  disabled?: boolean;
}

export const PostTagsField = ({
  onTagsChange,
  disabled,
}: PostTagsFieldProps) => {
  const [tags, setTags] = useState<string[]>([]);
  const [text, setText] = useState('');

  const addTag = () => {
    if (!text) return;

    const isTagExist = tags.findIndex(tag => tag === text) !== -1;
    const changedTagsList = [...tags, text];

    if (!isTagExist) {
      setTags(changedTagsList);
      setText('');
    }

    onTagsChange(changedTagsList);
  };

  const deleteTag = (deletedTag: string) => {
    const filteredTags = tags.filter(tag => tag !== deletedTag);
    setTags(filteredTags);
    onTagsChange(filteredTags);
  };

  return (
    <div className="w-full">
      <Label htmlFor="postTags">Теги</Label>

      <div className="flex">
        <Input
          id="postTags"
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Выберите теги"
          className="md:max-w-[400px]"
          disabled={disabled}
        />

        <div className="ml-5 flex items-center gap-2 w-full">
          {tags.map(tag => (
            <Tag
              key={tag}
              text={tag}
              className="cursor-pointer"
              onClick={() => deleteTag(tag)}
            />
          ))}
        </div>
      </div>

      <Button
        type="button"
        variant="outline"
        className="w-[240px] mt-4"
        onClick={addTag}
      >
        Добавить тег
      </Button>
    </div>
  );
};
