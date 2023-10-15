import { ReactNode, Fragment } from 'react';
import clsx from 'clsx';
import { IconButton } from '@/shared/ui';

interface UserCardProps {
  user: ReactNode;
  actions?: ReactNode[];
  description?: string;
}

export const UserCard = ({ user, description, actions }: UserCardProps) => {
  const isHasActions = !!actions;
  return (
    <div className="p-4 min-w-[337px] h-fit bg-white rounded-xl border border-gray-light">
      <div className="flex justify-between items-center mb-[19px]">
        {user}

        <IconButton iconName="meatballs" variant="ghost" />
      </div>

      <div className={clsx('text-sm leading-[18px]', isHasActions && 'mb-4')}>
        {description || <span className="text-black/50">Нет описания</span>}
      </div>

      {isHasActions && (
        <div className="grid grid-cols-2 gap-2 md:grid-cols-1">
          {actions.map((action, index) => (
            <Fragment key={`user-card-action-${index}`}>{action}</Fragment>
          ))}
        </div>
      )}
    </div>
  );
};
