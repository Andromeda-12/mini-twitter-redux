import { ReactNode } from 'react';
import { ScrollArea, ScrollBar, Tag } from '.';
import { TagSchema } from '../api';
import { cn, getImageUrl } from '../lib';

interface PostCoverProps {
  className?: string;
  postCoverId: number;
}
export const PostCover = ({ postCoverId, className }: PostCoverProps) => {
  return (
    <img
      className={cn('rounded-xl h-full w-full object-cover', className)}
      src={getImageUrl(postCoverId)}
      alt="post cover"
    />
  );
};

interface TagListProps {
  tags: TagSchema[];
}
export const TagList = ({ tags }: TagListProps) => (
  <ScrollArea className="h-[34px]">
    <div className="flex gap-2">
      {tags.map(tag => (
        <Tag text={tag.title} key={tag.title} />
      ))}
    </div>

    <ScrollBar orientation="horizontal" />
  </ScrollArea>
);

interface PostContainerProps {
  className?: string;
  children: ReactNode;
}
export const PostContainer = ({ className, children }: PostContainerProps) => {
  return (
    <div className={cn('bg-white rounded-xl border border-gray', className)}>
      {children}
    </div>
  );
};

interface PostContentProps {
  className?: string;
  text: string;
}
export const PostContent = ({ className, text }: PostContentProps) => (
  <div
    className={cn(
      'text-base leading-[22px] line-clamp-2 text-ellipsis overflow-hidden',
      className
    )}
  >
    {text}
  </div>
);

interface PostTitleProps {
  className?: string;
  text: string;
}
export const PostTitle = ({ className, text }: PostTitleProps) => (
  <h5 className={cn('text-lg leading-6 font-bold', className)}>{text}</h5>
);

interface PostBodyProps {
  className?: string;
  children: ReactNode;
}
export const PostBody = ({ className, children }: PostBodyProps) => (
  <div className={cn('flex flex-col justify-center', className)}>
    {children}
  </div>
);

interface PostBottomProps {
  className?: string;
  action: ReactNode;
  createTime: string;
}
export const PostBottom = ({
  className,
  createTime,
  action,
}: PostBottomProps) => (
  <div
    className={cn(
      'h-[24px] flex justify-between text-sm leading-[18px]',
      className
    )}
  >
    {action}

    <span>{new Date(createTime).toLocaleDateString()}</span>
  </div>
);

export const PostSkeleton = ({ className }: { className?: string }) => (
  <div
    className={cn(
      'w-full rounded-xl bg-gray animate-pulse',
      className
    )}
  ></div>
);
