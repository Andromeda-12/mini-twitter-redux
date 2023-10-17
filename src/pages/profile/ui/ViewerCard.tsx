import { User, UserCard, userModel } from '@/entities/user';
import { CreatePostButton } from '@/features/post/create-post';
import { getImageUrl } from '@/shared/lib';
import { Button } from '@/shared/ui';

export const ViewerCard = () => {
  const { data } = userModel.hooks.useViewerQuery();

  if (data)
    return (
      <UserCard
        description={data?.description}
        user={
          <User
            firstname={data?.firstName}
            lastname={data?.lastName}
            nickname={data?.nickname}
            avatarUrl={getImageUrl(data?.avatarId)}
          />
        }
        actions={[
          <Button variant="outline">Мои подписки</Button>,
          <CreatePostButton />,
        ]}
      />
    );

  return (
    <div className="bg-gray animate-pulse min-w-[337px] h-[240px] rounded-xl"></div>
  );
};
