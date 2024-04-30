// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

/**
 * A list of PlanetScale branches.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as planetscale from "@pulumi/planetscale";
 *
 * const example = planetscale.getBranches({
 *     organization: "example.com",
 *     database: "example_db",
 * });
 * export const branches = example;
 * ```
 */
export function getBranches(args: GetBranchesArgs, opts?: pulumi.InvokeOptions): Promise<GetBranchesResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("planetscale:index/getBranches:getBranches", {
        "database": args.database,
        "organization": args.organization,
    }, opts);
}

/**
 * A collection of arguments for invoking getBranches.
 */
export interface GetBranchesArgs {
    database: string;
    organization: string;
}

/**
 * A collection of values returned by getBranches.
 */
export interface GetBranchesResult {
    readonly branches: outputs.GetBranchesBranch[];
    readonly database: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly organization: string;
}
/**
 * A list of PlanetScale branches.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as planetscale from "@pulumi/planetscale";
 *
 * const example = planetscale.getBranches({
 *     organization: "example.com",
 *     database: "example_db",
 * });
 * export const branches = example;
 * ```
 */
export function getBranchesOutput(args: GetBranchesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetBranchesResult> {
    return pulumi.output(args).apply((a: any) => getBranches(a, opts))
}

/**
 * A collection of arguments for invoking getBranches.
 */
export interface GetBranchesOutputArgs {
    database: pulumi.Input<string>;
    organization: pulumi.Input<string>;
}
