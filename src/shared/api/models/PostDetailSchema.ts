/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CommentSchema } from './CommentSchema';
import type { TagSchema } from './TagSchema';
import type { UserSchema } from './UserSchema';

export type PostDetailSchema = {
    id: number;
    title: string;
    text: string;
    creatorId: number;
    likeCount: number;
    /**
     * Show if current user liked post
     */
    isLiked: number;
    creator: UserSchema;
    tags: Array<TagSchema>;
    imageId: number;
    createTime: string;
    updateTime: string;
    comments: Array<CommentSchema>;
};