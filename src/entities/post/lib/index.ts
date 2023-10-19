import { UpdatePostDto } from '@/shared/api';

export interface UpdatePostData {
  postId: number;
  body: UpdatePostDto;
}
