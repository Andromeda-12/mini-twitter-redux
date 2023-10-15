import { User } from '@/entities/user';
import { PostSchema, TagSchema } from '@/shared/api';
import { cn, getImageUrl } from '@/shared/lib';
import { IconButton, ScrollArea, ScrollBar, Tag } from '@/shared/ui';
import { ReactNode } from 'react';

export const PostList = ({
  creator,
  imageId,
  tags,
  title,
  text,
  likeCount,
  isLiked,
  //   id,
  createTime,
}: PostSchema) => {
  const withCover = !!imageId;

  return (
    <PostContainer>
      <div className="flex flex-col sm:flex-wrap h-[525px] sm:h-[300px] w-full  ">
        {withCover && <PostCover postCoverId={imageId} />}

        <div
          className={cn('p-4 sm:pt-5 sm:pb-0 sm:px-6 sm:mb-[32px] order-1', {
            withCover: 'sm:w-7/12',
          })}
        >
          <div className="h-[56px] flex items-center justify-between">
            <User
              firstname={creator.firstName}
              lastname={creator.lastName}
              nickname={creator.nickname}
              avatarUrl={getImageUrl(creator.avatarId)}
            />

            <div className="flex space-x-[24px]">
              <IconButton
                iconName="pin"
                variant="ghost"
                className="text-primary"
              />
              <IconButton iconName="meatballs" variant="ghost" />
            </div>
          </div>
        </div>

        <div
          className={cn(
            'px-4 sm:px-6 mb-[16px] sm:mb-[22px] order-3',
            withCover ? 'sm:w-7/12' : 'w-full'
          )}
        >
          <PostBody>
            <PostTitle text={title} />

            <PostContent text={text} />

            <TagList tags={tags} />
          </PostBody>
        </div>

        <div className="px-4 pb-4 sm:pb-5 sm:px-6 order-4">
          <PostBottom
            isLiked={!!isLiked}
            likeCount={likeCount}
            createTime={createTime}
          />
        </div>
      </div>
    </PostContainer>
  );
};

const PostBottom = ({
  createTime,
  isLiked,
  likeCount,
}: {
  createTime: string;
  isLiked: boolean;
  likeCount: number;
}) => (
  <div className="h-[24px] flex justify-between text-sm leading-[18px]">
    <PostLikes isLiked={isLiked} likeCount={likeCount} />

    <span>{createTime}</span>
  </div>
);

const PostLikes = ({
  isLiked,
  likeCount,
}: {
  isLiked: boolean;
  likeCount: number;
}) => (
  <div className="flex items-center">
    {!isLiked ? (
      <IconButton iconName="heart" className="mr-[6px] " />
    ) : (
      <IconButton iconName="filled-heart" className="mr-[6px] text-red" />
    )}
    <span>{likeCount}</span>
  </div>
);

const PostTitle = ({ text }: { text: string }) => (
  <h5 className="text-lg leading-6 font-bold mb-2">{text}</h5>
);

const PostContent = ({ text }: { text: string }) => (
  <div className="h-[44px] text-base leading-[22px] mb-4 line-clamp-2 text-ellipsis overflow-hidden">
    {text}
  </div>
);

const TagList = ({ tags }: { tags: TagSchema[] }) => (
  <ScrollArea className="h-[34px]">
    <div className="flex gap-2">
      {tags.map(tag => (
        <Tag text={tag.title} key={tag.title} />
      ))}
    </div>

    <ScrollBar orientation="horizontal" />
  </ScrollArea>
);

interface PostBodyProps {
  children: ReactNode;
}
const PostBody = ({ children }: PostBodyProps) => (
  <div className="h-[138px] sm:h-[126px] flex flex-col justify-center">
    {children}
  </div>
);

interface PostContainerProps {
  children: ReactNode;
}
const PostContainer = ({ children }: PostContainerProps) => {
  return (
    <div className="rounded-xl bg-white border border-gray sm:h-[300px]">
      {children}
    </div>
  );
};

interface PostCoverProps {
  postCoverId: number;
}
const PostCover = ({ postCoverId }: PostCoverProps) => {
  return (
    <div className="h-[227px] order-2 mb-[16px] sm:mb-0 sm:h-full sm:w-5/12 sm:order-1">
      <img
        className="rounded-xl h-full w-full object-cover"
        src={getImageUrl(postCoverId)}
        alt="post cover"
      />
    </div>
  );
};
