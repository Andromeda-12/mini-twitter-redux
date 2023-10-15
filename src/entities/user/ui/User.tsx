import { Avatar } from '@/shared/ui';

interface UserProps {
  avatarUrl?: string;
  nickname: string;
  firstname: string;
  lastname: string;
}

export const User = ({
  avatarUrl,
  nickname,
  firstname,
  lastname,
}: UserProps) => (
  <div className="flex items-center">
    <div className="mr-[11px] m-[3px] flex">
      <Avatar src={avatarUrl} fallback={`${firstname[0]}${lastname[0]}`} />
    </div>
    <div className="flex flex-col">
      <span className="text-lg leading-6 font-bold">{`${firstname} ${lastname}`}</span>
      {nickname && <span className="text-xs">@{nickname}</span>}
    </div>
  </div>
);

export const UserSkeleton = () => (
  <div className="flex items-center ">
    <div className="mr-[11px] m-[3px] flex">
      <div className="h-[50px] w-[50px] bg-gray animate-pulse rounded-full"></div>
    </div>
    <div className="flex flex-col">
      <span className="text-lg leading-6 font-bold animate-pulse h-[22px] mb-1 bg-gray rounded-md"></span>
      <span className="text-xs animate-pulse w-[100px] h-[14px] bg-gray rounded-md"></span>
    </div>
  </div>
);
