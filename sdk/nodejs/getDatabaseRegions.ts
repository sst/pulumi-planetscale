// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

/**
 * A list of PlanetScale regions.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as planetscale from "@pulumi/planetscale";
 *
 * const example = planetscale.getDatabaseRegions({
 *     organization: "example.com",
 *     name: "example_db",
 * });
 * export const databaseRegions = example;
 * ```
 */
export function getDatabaseRegions(args: GetDatabaseRegionsArgs, opts?: pulumi.InvokeOptions): Promise<GetDatabaseRegionsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("planetscale:index/getDatabaseRegions:getDatabaseRegions", {
        "name": args.name,
        "organization": args.organization,
    }, opts);
}

/**
 * A collection of arguments for invoking getDatabaseRegions.
 */
export interface GetDatabaseRegionsArgs {
    /**
     * The database for which the regions are available.
     */
    name: string;
    /**
     * The organization for which the regions are available.
     */
    organization: string;
}

/**
 * A collection of values returned by getDatabaseRegions.
 */
export interface GetDatabaseRegionsResult {
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    /**
     * The database for which the regions are available.
     */
    readonly name: string;
    /**
     * The organization for which the regions are available.
     */
    readonly organization: string;
    /**
     * The list of regions available for the database.
     */
    readonly regions: outputs.GetDatabaseRegionsRegion[];
}
/**
 * A list of PlanetScale regions.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as planetscale from "@pulumi/planetscale";
 *
 * const example = planetscale.getDatabaseRegions({
 *     organization: "example.com",
 *     name: "example_db",
 * });
 * export const databaseRegions = example;
 * ```
 */
export function getDatabaseRegionsOutput(args: GetDatabaseRegionsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDatabaseRegionsResult> {
    return pulumi.output(args).apply((a: any) => getDatabaseRegions(a, opts))
}

/**
 * A collection of arguments for invoking getDatabaseRegions.
 */
export interface GetDatabaseRegionsOutputArgs {
    /**
     * The database for which the regions are available.
     */
    name: pulumi.Input<string>;
    /**
     * The organization for which the regions are available.
     */
    organization: pulumi.Input<string>;
}