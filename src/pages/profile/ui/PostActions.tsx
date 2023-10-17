import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  IconButton,
} from '@/shared/ui';

export const PostActions = () => {
  const handleEditButtonClick = () => {};
  const hanldeDeleteButtonClick = () => {};

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
