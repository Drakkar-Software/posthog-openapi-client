/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ExternalDataSourceSerializers } from '../models/ExternalDataSourceSerializers';
import type { PaginatedExternalDataSourceSerializersList } from '../models/PaginatedExternalDataSourceSerializersList';
import type { PatchedExternalDataSourceSerializers } from '../models/PatchedExternalDataSourceSerializers';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ExternalDataSourcesService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Create, Read, Update and Delete External data Sources.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @param search A search term.
     * @returns PaginatedExternalDataSourceSerializersList
     * @throws ApiError
     */
    public externalDataSourcesList(
        projectId: string,
        limit?: number,
        offset?: number,
        search?: string,
    ): CancelablePromise<PaginatedExternalDataSourceSerializersList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/external_data_sources/',
            path: {
                'project_id': projectId,
            },
            query: {
                'limit': limit,
                'offset': offset,
                'search': search,
            },
        });
    }

    /**
     * Create, Read, Update and Delete External data Sources.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns ExternalDataSourceSerializers
     * @throws ApiError
     */
    public externalDataSourcesCreate(
        projectId: string,
        requestBody: ExternalDataSourceSerializers,
    ): CancelablePromise<ExternalDataSourceSerializers> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/projects/{project_id}/external_data_sources/',
            path: {
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Create, Read, Update and Delete External data Sources.
     * @param id A UUID string identifying this external data source.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns ExternalDataSourceSerializers
     * @throws ApiError
     */
    public externalDataSourcesRetrieve(
        id: string,
        projectId: string,
    ): CancelablePromise<ExternalDataSourceSerializers> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/external_data_sources/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
        });
    }

    /**
     * Create, Read, Update and Delete External data Sources.
     * @param id A UUID string identifying this external data source.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns ExternalDataSourceSerializers
     * @throws ApiError
     */
    public externalDataSourcesUpdate(
        id: string,
        projectId: string,
        requestBody: ExternalDataSourceSerializers,
    ): CancelablePromise<ExternalDataSourceSerializers> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/projects/{project_id}/external_data_sources/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Create, Read, Update and Delete External data Sources.
     * @param id A UUID string identifying this external data source.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns ExternalDataSourceSerializers
     * @throws ApiError
     */
    public externalDataSourcesPartialUpdate(
        id: string,
        projectId: string,
        requestBody?: PatchedExternalDataSourceSerializers,
    ): CancelablePromise<ExternalDataSourceSerializers> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/projects/{project_id}/external_data_sources/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Create, Read, Update and Delete External data Sources.
     * @param id A UUID string identifying this external data source.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns void
     * @throws ApiError
     */
    public externalDataSourcesDestroy(
        id: string,
        projectId: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/projects/{project_id}/external_data_sources/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
        });
    }

    /**
     * Create, Read, Update and Delete External data Sources.
     * @param id A UUID string identifying this external data source.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns ExternalDataSourceSerializers
     * @throws ApiError
     */
    public externalDataSourcesReloadCreate(
        id: string,
        projectId: string,
        requestBody: ExternalDataSourceSerializers,
    ): CancelablePromise<ExternalDataSourceSerializers> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/projects/{project_id}/external_data_sources/{id}/reload/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
