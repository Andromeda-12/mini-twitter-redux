import { Avatar } from '@/shared/ui';
import { userModel } from '..';
import { getImageUrl } from '@/shared/lib';

interface ViewerAvatar {
  className?: string;
  size?: 'sm' | 'base' | 'lg';
}

export const ViewerAvatar = ({ className, size }: ViewerAvatar) => {
  const { data: viewer } = userModel.hooks.useViewerQuery();

  let fallback = '';
  let avatarUrl;
  
  if (viewer) {
    fallback = viewer.firstName[0] + viewer.lastName[0];
    avatarUrl = getImageUrl(viewer.avatarId);
  }

  return (
    <Avatar
      className={className}
      size={size}
      src={avatarUrl}
      fallback={fallback}
    />
  );
};
