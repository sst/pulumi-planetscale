// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

/**
 * The provider type for the planetscale package. By default, resources use package-wide configuration
 * settings, however an explicit `Provider` instance may be created and passed during resource
 * construction to achieve fine-grained programmatic control over provider settings. See the
 * [documentation](https://www.pulumi.com/docs/reference/programming-model/#providers) for more information.
 */
export class Provider extends pulumi.ProviderResource {
    /** @internal */
    public static readonly __pulumiType = 'planetscale';

    /**
     * Returns true if the given object is an instance of Provider.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Provider {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === "pulumi:providers:" + Provider.__pulumiType;
    }

    /**
     * Name of the service token to use. Alternatively, use `PLANETSCALE_SERVICE_TOKEN_NAME`. Mutually exclusive with
     * `service_token_name` and `service_token`.
     */
    public readonly accessToken!: pulumi.Output<string | undefined>;
    /**
     * If set, points the API client to a different endpoint than `https:://api.planetscale.com/v1`.
     */
    public readonly endpoint!: pulumi.Output<string | undefined>;
    /**
     * Value of the service token to use. Alternatively, use `PLANETSCALE_SERVICE_TOKEN`. Mutually exclusive with
     * `access_token`.
     */
    public readonly serviceToken!: pulumi.Output<string | undefined>;
    /**
     * Name of the service token to use. Alternatively, use `PLANETSCALE_SERVICE_TOKEN_NAME`. Mutually exclusive with
     * `access_token`.
     */
    public readonly serviceTokenName!: pulumi.Output<string | undefined>;

    /**
     * Create a Provider resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: ProviderArgs, opts?: pulumi.ResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        {
            resourceInputs["accessToken"] = args?.accessToken ? pulumi.secret(args.accessToken) : undefined;
            resourceInputs["endpoint"] = args ? args.endpoint : undefined;
            resourceInputs["serviceToken"] = args?.serviceToken ? pulumi.secret(args.serviceToken) : undefined;
            resourceInputs["serviceTokenName"] = args ? args.serviceTokenName : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["accessToken", "serviceToken"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(Provider.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Provider resource.
 */
export interface ProviderArgs {
    /**
     * Name of the service token to use. Alternatively, use `PLANETSCALE_SERVICE_TOKEN_NAME`. Mutually exclusive with
     * `service_token_name` and `service_token`.
     */
    accessToken?: pulumi.Input<string>;
    /**
     * If set, points the API client to a different endpoint than `https:://api.planetscale.com/v1`.
     */
    endpoint?: pulumi.Input<string>;
    /**
     * Value of the service token to use. Alternatively, use `PLANETSCALE_SERVICE_TOKEN`. Mutually exclusive with
     * `access_token`.
     */
    serviceToken?: pulumi.Input<string>;
    /**
     * Name of the service token to use. Alternatively, use `PLANETSCALE_SERVICE_TOKEN_NAME`. Mutually exclusive with
     * `access_token`.
     */
    serviceTokenName?: pulumi.Input<string>;
}
