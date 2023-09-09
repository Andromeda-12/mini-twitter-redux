/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AuthLoginDto } from '../models/AuthLoginDto';
import type { CreateUserDto } from '../models/CreateUserDto';
import type { LoginSchema } from '../models/LoginSchema';
import type { RefreshTokenDto } from '../models/RefreshTokenDto';
import type { RefreshTokenSchema } from '../models/RefreshTokenSchema';
import type { RegisterSchema } from '../models/RegisterSchema';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class AuthService {

    /**
     * @param requestBody 
     * @returns RegisterSchema 
     * @throws ApiError
     */
    public static authControllerRegister(
requestBody: CreateUserDto,
): CancelablePromise<RegisterSchema> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/auth/register',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param requestBody 
     * @returns LoginSchema 
     * @throws ApiError
     */
    public static authControllerLogin(
requestBody: AuthLoginDto,
): CancelablePromise<LoginSchema> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/auth/login',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param requestBody 
     * @returns RefreshTokenSchema 
     * @throws ApiError
     */
    public static authControllerRefresh(
requestBody: RefreshTokenDto,
): CancelablePromise<RefreshTokenSchema> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/auth/refresh',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
