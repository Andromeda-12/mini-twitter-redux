/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TagSchema } from '../models/TagSchema';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class TagService {

    /**
     * @param page Page number
     * @param pageSize Number of items per page
     * @param title 
     * @returns TagSchema List of tags
     * @throws ApiError
     */
    public static tagControllerSearch(
page?: number,
pageSize?: number,
title?: string,
): CancelablePromise<Array<TagSchema>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/tag/search',
            query: {
                'page': page,
                'pageSize': pageSize,
                'title': title,
            },
        });
    }

}
