/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TagSchema } from './TagSchema';
import type { UserSchema } from './UserSchema';

export type PostSchema = {
    id: number;
    title: string;
    text: string;
    creatorId: number;
    likesCount: number;
    /**
     * Show if current user liked post
     */
    isLiked: boolean;
    creator: UserSchema;
    tags: Array<TagSchema>;
    imageId: number;
    createTime: string;
    updateTime: string;
};
