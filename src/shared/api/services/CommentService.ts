/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CommentSchema } from '../models/CommentSchema';
import type { CreateCommentDto } from '../models/CreateCommentDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class CommentService {

    /**
     * @param postId 
     * @param requestBody 
     * @returns CommentSchema 
     * @throws ApiError
     */
    public static commentControllerCreateComment(
postId: number,
requestBody: CreateCommentDto,
): CancelablePromise<CommentSchema> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/post/{postId}/comments',
            path: {
                'postId': postId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param commentId 
     * @returns CommentSchema 
     * @throws ApiError
     */
    public static commentControllerDeleteById(
commentId: number,
): CancelablePromise<CommentSchema> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/post/{postId}/comments/{commentId}',
            path: {
                'commentId': commentId,
            },
        });
    }

}
