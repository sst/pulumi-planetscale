// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";

export interface BackupActor {
    /**
     * The URL of the actor's avatar
     */
    avatarUrl?: pulumi.Input<string>;
    /**
     * The name of the actor
     */
    displayName?: pulumi.Input<string>;
    /**
     * The ID of the actor
     */
    id?: pulumi.Input<string>;
}

export interface BackupBackupPolicy {
    /**
     * When the backup policy was created.
     */
    createdAt?: pulumi.Input<string>;
    /**
     * The unit for the frequency of the backup policy. Not configurable for now.
     */
    frequencyUnit?: pulumi.Input<string>;
    /**
     * A number value for the frequency of the backup policy. Not configurable for now.
     */
    frequencyValue?: pulumi.Input<number>;
    /**
     * The ID of the backup policy.
     */
    id?: pulumi.Input<string>;
    /**
     * When the backup was last run.
     */
    lastRanAt?: pulumi.Input<string>;
    /**
     * The name of the backup policy.
     */
    name?: pulumi.Input<string>;
    /**
     * When the backup will next run.
     */
    nextRunAt?: pulumi.Input<string>;
    /**
     * The unit for the retention period of the backup policy.
     */
    retentionUnit: pulumi.Input<string>;
    /**
     * A number value for the retention period of the backup policy.
     */
    retentionValue: pulumi.Input<number>;
    /**
     * Day of the week that the backup is scheduled.
     */
    scheduleDay?: pulumi.Input<string>;
    /**
     * Week of the month that the backup is scheduled.
     */
    scheduleWeek?: pulumi.Input<string>;
    /**
     * Whether the backup policy is for a production or development database, or for a database branch.
     */
    target?: pulumi.Input<string>;
    /**
     * When the backup policy was last updated.
     */
    updatedAt?: pulumi.Input<string>;
}

export interface BranchActor {
    /**
     * The URL of the actor's avatar
     */
    avatarUrl?: pulumi.Input<string>;
    /**
     * The name of the actor
     */
    displayName?: pulumi.Input<string>;
    /**
     * The ID of the actor
     */
    id?: pulumi.Input<string>;
}

export interface BranchRegion {
    /**
     * Name of the region.
     */
    displayName?: pulumi.Input<string>;
    /**
     * Whether or not the region is currently active.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * The ID of the region.
     */
    id?: pulumi.Input<string>;
    /**
     * Location of the region.
     */
    location?: pulumi.Input<string>;
    /**
     * Provider for the region (ex. AWS).
     */
    provider?: pulumi.Input<string>;
    /**
     * Public IP addresses for the region.
     */
    publicIpAddresses?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The slug of the region.
     */
    slug?: pulumi.Input<string>;
}

export interface BranchRestoredFromBranch {
    /**
     * When the resource was created.
     */
    createdAt?: pulumi.Input<string>;
    /**
     * When the resource was deleted, if deleted.
     */
    deletedAt?: pulumi.Input<string>;
    /**
     * The ID for the resource.
     */
    id?: pulumi.Input<string>;
    /**
     * The name for the resource.
     */
    name?: pulumi.Input<string>;
    /**
     * When the resource was last updated.
     */
    updatedAt?: pulumi.Input<string>;
}

export interface DatabaseDataImport {
    /**
     * Connection information for the source of the data for the import.
     */
    dataSource?: pulumi.Input<inputs.DatabaseDataImportDataSource>;
    /**
     * When the import finished.
     */
    finishedAt?: pulumi.Input<string>;
    /**
     * Errors encountered while preparing the import.
     */
    importCheckErrors?: pulumi.Input<string>;
    /**
     * When the import started.
     */
    startedAt?: pulumi.Input<string>;
    /**
     * The state of the import, one of: pending, queued, in_progress, complete, cancelled, error.
     */
    state?: pulumi.Input<string>;
}

export interface DatabaseDataImportDataSource {
    /**
     * The name of the database imported from.
     */
    database: pulumi.Input<string>;
    /**
     * The hostname where the database lives.
     */
    hostname: pulumi.Input<string>;
    /**
     * The port on which the database listens on the host.
     */
    port: pulumi.Input<string>;
}

export interface GetDatabaseDataImport {
    /**
     * Connection information for the source of the data for the import.
     */
    dataSource?: inputs.GetDatabaseDataImportDataSource;
    /**
     * When the import finished.
     */
    finishedAt?: string;
    /**
     * Errors encountered while preparing the import.
     */
    importCheckErrors?: string;
    /**
     * When the import started.
     */
    startedAt?: string;
    /**
     * The state of the import, one of: pending, queued, in_progress, complete, cancelled, error.
     */
    state?: string;
}

export interface GetDatabaseDataImportArgs {
    /**
     * Connection information for the source of the data for the import.
     */
    dataSource?: pulumi.Input<inputs.GetDatabaseDataImportDataSourceArgs>;
    /**
     * When the import finished.
     */
    finishedAt?: pulumi.Input<string>;
    /**
     * Errors encountered while preparing the import.
     */
    importCheckErrors?: pulumi.Input<string>;
    /**
     * When the import started.
     */
    startedAt?: pulumi.Input<string>;
    /**
     * The state of the import, one of: pending, queued, in_progress, complete, cancelled, error.
     */
    state?: pulumi.Input<string>;
}

export interface GetDatabaseDataImportDataSource {
    /**
     * The name of the database imported from.
     */
    database: string;
    /**
     * The hostname where the database lives.
     */
    hostname: string;
    /**
     * The port on which the database listens on the host.
     */
    port: string;
}

export interface GetDatabaseDataImportDataSourceArgs {
    /**
     * The name of the database imported from.
     */
    database: pulumi.Input<string>;
    /**
     * The hostname where the database lives.
     */
    hostname: pulumi.Input<string>;
    /**
     * The port on which the database listens on the host.
     */
    port: pulumi.Input<string>;
}

export interface GetDatabaseRegion {
    /**
     * Name of the region.
     */
    displayName?: string;
    /**
     * Whether or not the region is currently active.
     */
    enabled?: boolean;
    /**
     * The ID of the region.
     */
    id?: string;
    /**
     * Location of the region.
     */
    location?: string;
    /**
     * Provider for the region (ex. AWS).
     */
    provider?: string;
    /**
     * Public IP addresses for the region.
     */
    publicIpAddresses?: string[];
    /**
     * The slug of the region.
     */
    slug?: string;
}

export interface GetDatabaseRegionArgs {
    /**
     * Name of the region.
     */
    displayName?: pulumi.Input<string>;
    /**
     * Whether or not the region is currently active.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * The ID of the region.
     */
    id?: pulumi.Input<string>;
    /**
     * Location of the region.
     */
    location?: pulumi.Input<string>;
    /**
     * Provider for the region (ex. AWS).
     */
    provider?: pulumi.Input<string>;
    /**
     * Public IP addresses for the region.
     */
    publicIpAddresses?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The slug of the region.
     */
    slug?: pulumi.Input<string>;
}

export interface PasswordActor {
    /**
     * The URL of the actor's avatar
     */
    avatarUrl?: pulumi.Input<string>;
    /**
     * The name of the actor
     */
    displayName?: pulumi.Input<string>;
    /**
     * The ID of the actor
     */
    id?: pulumi.Input<string>;
}

export interface PasswordDatabaseBranch {
    accessHostUrl?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    mysqlEdgeAddress?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    production?: pulumi.Input<boolean>;
}

export interface PasswordRegion {
    /**
     * Name of the region.
     */
    displayName?: pulumi.Input<string>;
    /**
     * Whether or not the region is currently active.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * The ID of the region.
     */
    id?: pulumi.Input<string>;
    /**
     * Location of the region.
     */
    location?: pulumi.Input<string>;
    /**
     * Provider for the region (ex. AWS).
     */
    provider?: pulumi.Input<string>;
    /**
     * Public IP addresses for the region.
     */
    publicIpAddresses?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The slug of the region.
     */
    slug?: pulumi.Input<string>;
}
