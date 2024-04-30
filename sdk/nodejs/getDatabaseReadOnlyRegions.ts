// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

/**
 * A list of PlanetScale read-only regions.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as planetscale from "@pulumi/planetscale";
 *
 * const example = planetscale.getDatabaseReadOnlyRegions({
 *     organization: "example.com",
 *     name: "example_db",
 * });
 * export const databaseRoRegions = data.planetscale_database_regions.example;
 * ```
 */
export function getDatabaseReadOnlyRegions(args: GetDatabaseReadOnlyRegionsArgs, opts?: pulumi.InvokeOptions): Promise<GetDatabaseReadOnlyRegionsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("planetscale:index/getDatabaseReadOnlyRegions:getDatabaseReadOnlyRegions", {
        "name": args.name,
        "organization": args.organization,
    }, opts);
}

/**
 * A collection of arguments for invoking getDatabaseReadOnlyRegions.
 */
export interface GetDatabaseReadOnlyRegionsArgs {
    /**
     * The name of the database for which the read-only regions are available.
     */
    name: string;
    /**
     * The organization for which the read-only regions are available.
     */
    organization: string;
}

/**
 * A collection of values returned by getDatabaseReadOnlyRegions.
 */
export interface GetDatabaseReadOnlyRegionsResult {
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    /**
     * The name of the database for which the read-only regions are available.
     */
    readonly name: string;
    /**
     * The organization for which the read-only regions are available.
     */
    readonly organization: string;
    /**
     * The list of read-only regions available for the database.
     */
    readonly regions: outputs.GetDatabaseReadOnlyRegionsRegion[];
}
/**
 * A list of PlanetScale read-only regions.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as planetscale from "@pulumi/planetscale";
 *
 * const example = planetscale.getDatabaseReadOnlyRegions({
 *     organization: "example.com",
 *     name: "example_db",
 * });
 * export const databaseRoRegions = data.planetscale_database_regions.example;
 * ```
 */
export function getDatabaseReadOnlyRegionsOutput(args: GetDatabaseReadOnlyRegionsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDatabaseReadOnlyRegionsResult> {
    return pulumi.output(args).apply((a: any) => getDatabaseReadOnlyRegions(a, opts))
}

/**
 * A collection of arguments for invoking getDatabaseReadOnlyRegions.
 */
export interface GetDatabaseReadOnlyRegionsOutputArgs {
    /**
     * The name of the database for which the read-only regions are available.
     */
    name: pulumi.Input<string>;
    /**
     * The organization for which the read-only regions are available.
     */
    organization: pulumi.Input<string>;
}