// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

/**
 * A PlanetScale branch.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as planetscale from "@pulumi/planetscale";
 *
 * const example = planetscale.getBranch({
 *     organization: "example.com",
 *     database: "example_db",
 *     name: "main",
 * });
 * export const branch = example;
 * ```
 */
export function getBranch(args: GetBranchArgs, opts?: pulumi.InvokeOptions): Promise<GetBranchResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("planetscale:index/getBranch:getBranch", {
        "database": args.database,
        "name": args.name,
        "organization": args.organization,
    }, opts);
}

/**
 * A collection of arguments for invoking getBranch.
 */
export interface GetBranchArgs {
    /**
     * The database this branch belongs to.
     */
    database: string;
    /**
     * The name of the branch.
     */
    name: string;
    /**
     * The organization this branch belongs to.
     */
    organization: string;
}

/**
 * A collection of values returned by getBranch.
 */
export interface GetBranchResult {
    /**
     * The access host URL for the branch. This is a legacy field, use `mysqlEdgeAddress`.
     */
    readonly accessHostUrl: string;
    /**
     * The actor who created this branch.
     */
    readonly actor: outputs.GetBranchActor;
    /**
     * The SKU representing the branch's cluster size.
     */
    readonly clusterRateName: string;
    /**
     * When the branch was created.
     */
    readonly createdAt: string;
    /**
     * The database this branch belongs to.
     */
    readonly database: string;
    /**
     * Planetscale app URL for the branch.
     */
    readonly htmlUrl: string;
    /**
     * The ID of the branch.
     */
    readonly id: string;
    /**
     * The ID of the backup from which the branch was restored.
     */
    readonly initialRestoreId: string;
    /**
     * The MySQL address for the branch.
     */
    readonly mysqlAddress: string;
    /**
     * The address of the MySQL provider for the branch.
     */
    readonly mysqlEdgeAddress: string;
    /**
     * The name of the branch.
     */
    readonly name: string;
    /**
     * The organization this branch belongs to.
     */
    readonly organization: string;
    /**
     * The name of the parent branch from which the branch was created.
     */
    readonly parentBranch: string;
    /**
     * Whether or not the branch is a production branch.
     */
    readonly production: boolean;
    /**
     * Whether or not the branch is ready to serve queries.
     */
    readonly ready: boolean;
    /**
     * The region in which this branch lives.
     */
    readonly region: outputs.GetBranchRegion;
    /**
     * When a user last marked a backup restore checklist as completed.
     */
    readonly restoreChecklistCompletedAt: string;
    readonly restoredFromBranch: outputs.GetBranchRestoredFromBranch;
    /**
     * When the schema for the branch was last updated.
     */
    readonly schemaLastUpdatedAt: string;
    /**
     * The number of shards in the branch.
     */
    readonly shardCount: number;
    /**
     * Whether or not the branch is sharded.
     */
    readonly sharded: boolean;
    /**
     * When the branch was last updated.
     */
    readonly updatedAt: string;
}
/**
 * A PlanetScale branch.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as planetscale from "@pulumi/planetscale";
 *
 * const example = planetscale.getBranch({
 *     organization: "example.com",
 *     database: "example_db",
 *     name: "main",
 * });
 * export const branch = example;
 * ```
 */
export function getBranchOutput(args: GetBranchOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetBranchResult> {
    return pulumi.output(args).apply((a: any) => getBranch(a, opts))
}

/**
 * A collection of arguments for invoking getBranch.
 */
export interface GetBranchOutputArgs {
    /**
     * The database this branch belongs to.
     */
    database: pulumi.Input<string>;
    /**
     * The name of the branch.
     */
    name: pulumi.Input<string>;
    /**
     * The organization this branch belongs to.
     */
    organization: pulumi.Input<string>;
}