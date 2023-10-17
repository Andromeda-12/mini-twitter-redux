import {
  IconButton,
  PostBody,
  PostBottom,
  PostContainer,
  PostContent,
  PostCover,
  PostSkeleton,
  PostTitle,
  TagList,
} from '@/shared/ui';
import { PostSchema } from '@/shared/api';
import { profileModel } from '../model';
import { PostActions } from './PostActions';

export const ViewerPostList = () => {
  const { posts } = profileModel.hooks.useViewerPost();

  if (posts)
    return (
      <div className="space-y-6 overflow-hidden w-full">
        {posts?.map(post => (
          <ViewerPost post={post} key={`viewer-post-${post.id}`} />
        ))}
      </div>
    );

  return (
    <div className="space-y-6 overflow-hidden w-full">
      {[1, 2, 3].map(skeletonId => (
        <PostSkeleton
          className="h-[300px] md:h-[250px]"
          key={`viewer-post-skeleton-${skeletonId}`}
        />
      ))}
    </div>
  );
};

interface PostProps {
  post: PostSchema;
}

const ViewerPost = ({ post }: PostProps) => {
  const { title, text, tags, isLiked, likesCount, imageId, createTime } = post;
  const isHasCover = !!imageId;

  return (
    <PostContainer className="flex flex-col md:flex-row md:h-[250px] w-full">
      {isHasCover && (
        <PostCover
          className="h-[227px] md:h-full md:w-5/12"
          postCoverId={imageId}
        />
      )}

      <PostBody className="px-4 py-4 md:px-6 md:py-5 w-full flex flex-col justify-between">
        <div>
          <div className="w-full flex items-center justify-between gap-2 mb-2">
            <PostTitle
              className="max-h-[50px] overflow-hidden break-words"
              text={title}
            />
            <PostActions />
          </div>
          <PostContent className="mb-4" text={text} />
          <TagList tags={tags} />
        </div>

        <PostBottom
          action={<PostLikes isLiked={!!isLiked} likeCount={likesCount} />}
          createTime={createTime}
        />
      </PostBody>
    </PostContainer>
  );
};

const PostLikes = ({
  isLiked,
  likeCount,
}: {
  isLiked: boolean;
  likeCount: number;
}) => (
  <div className="flex items-center">
    {!isLiked ? (
      <IconButton className="mr-[6px]" iconName="heart" variant="ghost" />
    ) : (
      <IconButton
        className="mr-[6px] text-red"
        iconName="filled-heart"
        variant="ghost"
      />
    )}
    <span>{likeCount}</span>
  </div>
);
