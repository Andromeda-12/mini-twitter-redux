/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { InitSchema } from '../models/InitSchema';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class InitService {

    /**
     * @returns InitSchema 
     * @throws ApiError
     */
    public static initControllerInit(): CancelablePromise<InitSchema> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/init',
        });
    }

}
