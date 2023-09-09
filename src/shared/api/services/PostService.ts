/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreatePostDto } from '../models/CreatePostDto';
import type { LikeSchema } from '../models/LikeSchema';
import type { PostDetailSchema } from '../models/PostDetailSchema';
import type { PostSchema } from '../models/PostSchema';
import type { SwaggerFileUploadDto } from '../models/SwaggerFileUploadDto';
import type { UpdatePostDto } from '../models/UpdatePostDto';
import type { UserDetailSchema } from '../models/UserDetailSchema';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class PostService {

    /**
     * @param page Page number
     * @param pageSize Number of items per page
     * @param tags Titles of tags
     * @param userId For filtering by creator
     * @returns PostSchema List of posts
     * @throws ApiError
     */
    public static postControllerSearch(
page?: number,
pageSize?: number,
tags?: Array<string>,
userId?: number,
): CancelablePromise<Array<PostSchema>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/post',
            query: {
                'page': page,
                'pageSize': pageSize,
                'tags': tags,
                'userId': userId,
            },
        });
    }

    /**
     * @param requestBody 
     * @returns PostSchema 
     * @throws ApiError
     */
    public static postControllerCreate(
requestBody: CreatePostDto,
): CancelablePromise<PostSchema> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/post',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param page Page number
     * @param pageSize Number of items per page
     * @param tags Titles of tags
     * @returns PostSchema Posts from subscriptions
     * @throws ApiError
     */
    public static postControllerGetPostsFromSubscriptions(
page?: number,
pageSize?: number,
tags?: Array<string>,
): CancelablePromise<Array<PostSchema>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/post/my-feed',
            query: {
                'page': page,
                'pageSize': pageSize,
                'tags': tags,
            },
        });
    }

    /**
     * @param id 
     * @returns PostDetailSchema One post
     * @throws ApiError
     */
    public static postControllerFindById(
id: number,
): CancelablePromise<PostDetailSchema> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/post/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @param id 
     * @param requestBody 
     * @returns PostDetailSchema 
     * @throws ApiError
     */
    public static postControllerUpdate(
id: number,
requestBody: UpdatePostDto,
): CancelablePromise<PostDetailSchema> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/post/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param id 
     * @returns PostSchema 
     * @throws ApiError
     */
    public static postControllerDelete(
id: number,
): CancelablePromise<PostSchema> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/post/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @param id 
     * @returns LikeSchema 
     * @throws ApiError
     */
    public static postControllerAddOrRemoveLike(
id: number,
): CancelablePromise<LikeSchema> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/post/{id}/likes',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @param id 
     * @param formData Upload image for post
     * @returns UserDetailSchema 
     * @throws ApiError
     */
    public static postControllerAddImage(
id: number,
formData: SwaggerFileUploadDto,
): CancelablePromise<UserDetailSchema> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/post/image/{id}',
            path: {
                'id': id,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

}
