import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  IconButton,
} from '@/shared/ui';
import { profileModel } from '../model';

interface PostActionsProps {
  postId: number;
}

export const PostActions = ({ postId }: PostActionsProps) => {
  const [deletePost] = profileModel.hooks.useDeletePostMutation();

  const handleEditButtonClick = () => {};

  const hanldeDeleteButtonClick = async () => {
    await deletePost({ postId });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <IconButton iconName="meatballs" variant="ghost" size="custom" />
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <DropdownMenuItem onClick={handleEditButtonClick}>
          Редактировать
        </DropdownMenuItem>
        <DropdownMenuItem
          className="text-red"
          onClick={hanldeDeleteButtonClick}
        >
          Удалить
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
