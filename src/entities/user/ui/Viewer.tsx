import { getImageUrl } from '@/shared/lib';
import { User, UserSkeleton } from './User';
import { useViewerQuery } from '../api';

export const Viewer = () => {
  const { data: viewer } = useViewerQuery();

  if (viewer)
    return (
      <User
        firstname={viewer.firstName}
        lastname={viewer.lastName}
        nickname={'andromeda'}
        // nickname={viewer.nickname}
        avatarUrl={getImageUrl(viewer.avatarId)}
      />
    );

  return <UserSkeleton />;
};
