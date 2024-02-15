/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UserBasic } from './UserBasic';
export type PatchedScheduledChange = {
    readonly id?: number;
    readonly team_id?: number;
    record_id?: string;
    /**
     * * `FeatureFlag` - feature flag
     */
    model_name?: PatchedScheduledChange.model_name;
    payload?: any;
    scheduled_at?: string;
    executed_at?: string | null;
    failure_reason?: string | null;
    readonly created_at?: string;
    readonly created_by?: UserBasic;
    readonly updated_at?: string;
};
export namespace PatchedScheduledChange {
    /**
     * * `FeatureFlag` - feature flag
     */
    export enum model_name {
        FEATURE_FLAG = 'FeatureFlag',
    }
}
