// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

/**
 * A list of PlanetScale organizations.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as planetscale from "@pulumi/planetscale";
 *
 * const example = planetscale.getOrganizations({});
 * export const orgs = example;
 * ```
 */
export function getOrganizations(opts?: pulumi.InvokeOptions): Promise<GetOrganizationsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("planetscale:index/getOrganizations:getOrganizations", {
    }, opts);
}

/**
 * A collection of values returned by getOrganizations.
 */
export interface GetOrganizationsResult {
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly organizations: outputs.GetOrganizationsOrganization[];
}
/**
 * A list of PlanetScale organizations.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as planetscale from "@pulumi/planetscale";
 *
 * const example = planetscale.getOrganizations({});
 * export const orgs = example;
 * ```
 */
export function getOrganizationsOutput(opts?: pulumi.InvokeOptions): pulumi.Output<GetOrganizationsResult> {
    return pulumi.output(getOrganizations(opts))
}
