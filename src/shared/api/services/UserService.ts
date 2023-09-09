/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SwaggerFileUploadDto } from '../models/SwaggerFileUploadDto';
import type { UpdateUserDto } from '../models/UpdateUserDto';
import type { UserDetailSchema } from '../models/UserDetailSchema';
import type { UserSchema } from '../models/UserSchema';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class UserService {

    /**
     * @param page Page number
     * @param pageSize Number of items per page
     * @param nickname 
     * @param firstName 
     * @param lastName 
     * @returns UserSchema List of users
     * @throws ApiError
     */
    public static userControllerSearch(
page?: number,
pageSize?: number,
nickname?: string,
firstName?: string,
lastName?: string,
): CancelablePromise<Array<UserSchema>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/user',
            query: {
                'page': page,
                'pageSize': pageSize,
                'nickname': nickname,
                'firstName': firstName,
                'lastName': lastName,
            },
        });
    }

    /**
     * @param requestBody 
     * @returns UserDetailSchema 
     * @throws ApiError
     */
    public static userControllerUpdate(
requestBody: UpdateUserDto,
): CancelablePromise<UserDetailSchema> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/user',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param id 
     * @returns UserDetailSchema One user
     * @throws ApiError
     */
    public static userControllerFindById(
id: number,
): CancelablePromise<UserDetailSchema> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/user/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @param id 
     * @returns UserDetailSchema 
     * @throws ApiError
     */
    public static userControllerSubscribe(
id: number,
): CancelablePromise<UserDetailSchema> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/user/{id}/subscribe',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @param id 
     * @returns UserDetailSchema 
     * @throws ApiError
     */
    public static userControllerDeleteSubscribe(
id: number,
): CancelablePromise<UserDetailSchema> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/user/{id}/subscribe',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @param formData Upload avatar for user
     * @returns UserDetailSchema 
     * @throws ApiError
     */
    public static userControllerAddAvatar(
formData: SwaggerFileUploadDto,
): CancelablePromise<UserDetailSchema> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/user/avatar',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * @param postId 
     * @returns UserDetailSchema Pin post
     * @throws ApiError
     */
    public static userControllerPinPost(
postId: number,
): CancelablePromise<UserDetailSchema> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/user/pin-post/{postId}',
            path: {
                'postId': postId,
            },
        });
    }

    /**
     * @returns UserDetailSchema Unpin post
     * @throws ApiError
     */
    public static userControllerUnpinPost(): CancelablePromise<UserDetailSchema> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/user/unpin-post',
        });
    }

}
