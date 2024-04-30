// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

/**
 * A PlanetScale database.
 *
 * Known limitations:
 * - When the provider is configured with a service token, the service token needs to manually be granted permission on this database resource. This can be done in the UI or via the CLI (`pscale service-token add-access`).
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as planetscale from "@pulumi/planetscale";
 *
 * const example = new planetscale.Database("example", {organization: "example"});
 * ```
 */
export class Database extends pulumi.CustomResource {
    /**
     * Get an existing Database resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DatabaseState, opts?: pulumi.CustomResourceOptions): Database {
        return new Database(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'planetscale:index/database:Database';

    /**
     * Returns true if the given object is an instance of Database.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Database {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Database.__pulumiType;
    }

    /**
     * Whether seeding branches with data is enabled for all branches.
     */
    public readonly allowDataBranching!: pulumi.Output<boolean>;
    /**
     * If the database has reached its backup restored branch limit.
     */
    public /*out*/ readonly atBackupRestoreBranchesLimit!: pulumi.Output<boolean>;
    /**
     * If the database has reached its development branch limit.
     */
    public /*out*/ readonly atDevelopmentBranchLimit!: pulumi.Output<boolean>;
    /**
     * Whether to automatically manage Rails migrations during deploy requests.
     */
    public readonly automaticMigrations!: pulumi.Output<boolean>;
    /**
     * The total number of database branches.
     */
    public /*out*/ readonly branchesCount!: pulumi.Output<number>;
    /**
     * The URL to retrieve this database's branches via the API.
     */
    public /*out*/ readonly branchesUrl!: pulumi.Output<string>;
    /**
     * The size of the database cluster plan.
     */
    public readonly clusterSize!: pulumi.Output<string>;
    /**
     * When the database was created.
     */
    public /*out*/ readonly createdAt!: pulumi.Output<string>;
    /**
     * If the database was created from an import, describes the import process.
     */
    public /*out*/ readonly dataImport!: pulumi.Output<outputs.DatabaseDataImport>;
    /**
     * The default branch for the database.
     */
    public readonly defaultBranch!: pulumi.Output<string>;
    /**
     * Number of read only regions in the default branch.
     */
    public /*out*/ readonly defaultBranchReadOnlyRegionsCount!: pulumi.Output<number>;
    /**
     * Number of shards in the default branch.
     */
    public /*out*/ readonly defaultBranchShardCount!: pulumi.Output<number>;
    /**
     * Number of tables in the default branch schema.
     */
    public /*out*/ readonly defaultBranchTableCount!: pulumi.Output<number>;
    /**
     * The total number of database development branches.
     */
    public /*out*/ readonly developmentBranchesCount!: pulumi.Output<number>;
    /**
     * The total number of database development branches.
     */
    public /*out*/ readonly htmlUrl!: pulumi.Output<string>;
    /**
     * The URL to see this database's branches in the web UI.
     */
    public readonly insightsRawQueries!: pulumi.Output<boolean>;
    /**
     * The total number of ongoing issues within a database.
     */
    public readonly issuesCount!: pulumi.Output<number>;
    /**
     * Framework used for applying migrations.
     */
    public readonly migrationFramework!: pulumi.Output<string>;
    /**
     * Table name to use for copying schema migration data.
     */
    public readonly migrationTableName!: pulumi.Output<string>;
    /**
     * If the database requires multiple admins for deletion.
     */
    public readonly multipleAdminsRequiredForDeletion!: pulumi.Output<boolean>;
    /**
     * The name of this database.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The organization this database belongs to.
     */
    public readonly organization!: pulumi.Output<string>;
    /**
     * The database plan.
     */
    public readonly plan!: pulumi.Output<string>;
    /**
     * Whether web console is enabled for production branches.
     */
    public readonly productionBranchWebConsole!: pulumi.Output<boolean>;
    /**
     * The total number of database production branches.
     */
    public /*out*/ readonly productionBranchesCount!: pulumi.Output<number>;
    /**
     * If the database is ready to be used.
     */
    public /*out*/ readonly ready!: pulumi.Output<boolean>;
    /**
     * The region the database lives in.
     */
    public readonly region!: pulumi.Output<string>;
    /**
     * Whether an approval is required to deploy schema changes to this database.
     */
    public readonly requireApprovalForDeploy!: pulumi.Output<boolean>;
    /**
     * Whether to restrict branch creation to one region.
     */
    public readonly restrictBranchRegion!: pulumi.Output<boolean>;
    /**
     * When the default branch schema was last changed.
     */
    public /*out*/ readonly schemaLastUpdatedAt!: pulumi.Output<string>;
    /**
     * If the database is sharded.
     */
    public /*out*/ readonly sharded!: pulumi.Output<boolean>;
    /**
     * State of the database.
     */
    public /*out*/ readonly state!: pulumi.Output<string>;
    /**
     * When the database was last updated.
     */
    public /*out*/ readonly updatedAt!: pulumi.Output<string>;
    /**
     * The URL to the database API endpoint.
     */
    public /*out*/ readonly url!: pulumi.Output<string>;

    /**
     * Create a Database resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DatabaseArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DatabaseArgs | DatabaseState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DatabaseState | undefined;
            resourceInputs["allowDataBranching"] = state ? state.allowDataBranching : undefined;
            resourceInputs["atBackupRestoreBranchesLimit"] = state ? state.atBackupRestoreBranchesLimit : undefined;
            resourceInputs["atDevelopmentBranchLimit"] = state ? state.atDevelopmentBranchLimit : undefined;
            resourceInputs["automaticMigrations"] = state ? state.automaticMigrations : undefined;
            resourceInputs["branchesCount"] = state ? state.branchesCount : undefined;
            resourceInputs["branchesUrl"] = state ? state.branchesUrl : undefined;
            resourceInputs["clusterSize"] = state ? state.clusterSize : undefined;
            resourceInputs["createdAt"] = state ? state.createdAt : undefined;
            resourceInputs["dataImport"] = state ? state.dataImport : undefined;
            resourceInputs["defaultBranch"] = state ? state.defaultBranch : undefined;
            resourceInputs["defaultBranchReadOnlyRegionsCount"] = state ? state.defaultBranchReadOnlyRegionsCount : undefined;
            resourceInputs["defaultBranchShardCount"] = state ? state.defaultBranchShardCount : undefined;
            resourceInputs["defaultBranchTableCount"] = state ? state.defaultBranchTableCount : undefined;
            resourceInputs["developmentBranchesCount"] = state ? state.developmentBranchesCount : undefined;
            resourceInputs["htmlUrl"] = state ? state.htmlUrl : undefined;
            resourceInputs["insightsRawQueries"] = state ? state.insightsRawQueries : undefined;
            resourceInputs["issuesCount"] = state ? state.issuesCount : undefined;
            resourceInputs["migrationFramework"] = state ? state.migrationFramework : undefined;
            resourceInputs["migrationTableName"] = state ? state.migrationTableName : undefined;
            resourceInputs["multipleAdminsRequiredForDeletion"] = state ? state.multipleAdminsRequiredForDeletion : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["organization"] = state ? state.organization : undefined;
            resourceInputs["plan"] = state ? state.plan : undefined;
            resourceInputs["productionBranchWebConsole"] = state ? state.productionBranchWebConsole : undefined;
            resourceInputs["productionBranchesCount"] = state ? state.productionBranchesCount : undefined;
            resourceInputs["ready"] = state ? state.ready : undefined;
            resourceInputs["region"] = state ? state.region : undefined;
            resourceInputs["requireApprovalForDeploy"] = state ? state.requireApprovalForDeploy : undefined;
            resourceInputs["restrictBranchRegion"] = state ? state.restrictBranchRegion : undefined;
            resourceInputs["schemaLastUpdatedAt"] = state ? state.schemaLastUpdatedAt : undefined;
            resourceInputs["sharded"] = state ? state.sharded : undefined;
            resourceInputs["state"] = state ? state.state : undefined;
            resourceInputs["updatedAt"] = state ? state.updatedAt : undefined;
            resourceInputs["url"] = state ? state.url : undefined;
        } else {
            const args = argsOrState as DatabaseArgs | undefined;
            if ((!args || args.organization === undefined) && !opts.urn) {
                throw new Error("Missing required property 'organization'");
            }
            resourceInputs["allowDataBranching"] = args ? args.allowDataBranching : undefined;
            resourceInputs["automaticMigrations"] = args ? args.automaticMigrations : undefined;
            resourceInputs["clusterSize"] = args ? args.clusterSize : undefined;
            resourceInputs["defaultBranch"] = args ? args.defaultBranch : undefined;
            resourceInputs["insightsRawQueries"] = args ? args.insightsRawQueries : undefined;
            resourceInputs["issuesCount"] = args ? args.issuesCount : undefined;
            resourceInputs["migrationFramework"] = args ? args.migrationFramework : undefined;
            resourceInputs["migrationTableName"] = args ? args.migrationTableName : undefined;
            resourceInputs["multipleAdminsRequiredForDeletion"] = args ? args.multipleAdminsRequiredForDeletion : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["organization"] = args ? args.organization : undefined;
            resourceInputs["plan"] = args ? args.plan : undefined;
            resourceInputs["productionBranchWebConsole"] = args ? args.productionBranchWebConsole : undefined;
            resourceInputs["region"] = args ? args.region : undefined;
            resourceInputs["requireApprovalForDeploy"] = args ? args.requireApprovalForDeploy : undefined;
            resourceInputs["restrictBranchRegion"] = args ? args.restrictBranchRegion : undefined;
            resourceInputs["atBackupRestoreBranchesLimit"] = undefined /*out*/;
            resourceInputs["atDevelopmentBranchLimit"] = undefined /*out*/;
            resourceInputs["branchesCount"] = undefined /*out*/;
            resourceInputs["branchesUrl"] = undefined /*out*/;
            resourceInputs["createdAt"] = undefined /*out*/;
            resourceInputs["dataImport"] = undefined /*out*/;
            resourceInputs["defaultBranchReadOnlyRegionsCount"] = undefined /*out*/;
            resourceInputs["defaultBranchShardCount"] = undefined /*out*/;
            resourceInputs["defaultBranchTableCount"] = undefined /*out*/;
            resourceInputs["developmentBranchesCount"] = undefined /*out*/;
            resourceInputs["htmlUrl"] = undefined /*out*/;
            resourceInputs["productionBranchesCount"] = undefined /*out*/;
            resourceInputs["ready"] = undefined /*out*/;
            resourceInputs["schemaLastUpdatedAt"] = undefined /*out*/;
            resourceInputs["sharded"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
            resourceInputs["updatedAt"] = undefined /*out*/;
            resourceInputs["url"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Database.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Database resources.
 */
export interface DatabaseState {
    /**
     * Whether seeding branches with data is enabled for all branches.
     */
    allowDataBranching?: pulumi.Input<boolean>;
    /**
     * If the database has reached its backup restored branch limit.
     */
    atBackupRestoreBranchesLimit?: pulumi.Input<boolean>;
    /**
     * If the database has reached its development branch limit.
     */
    atDevelopmentBranchLimit?: pulumi.Input<boolean>;
    /**
     * Whether to automatically manage Rails migrations during deploy requests.
     */
    automaticMigrations?: pulumi.Input<boolean>;
    /**
     * The total number of database branches.
     */
    branchesCount?: pulumi.Input<number>;
    /**
     * The URL to retrieve this database's branches via the API.
     */
    branchesUrl?: pulumi.Input<string>;
    /**
     * The size of the database cluster plan.
     */
    clusterSize?: pulumi.Input<string>;
    /**
     * When the database was created.
     */
    createdAt?: pulumi.Input<string>;
    /**
     * If the database was created from an import, describes the import process.
     */
    dataImport?: pulumi.Input<inputs.DatabaseDataImport>;
    /**
     * The default branch for the database.
     */
    defaultBranch?: pulumi.Input<string>;
    /**
     * Number of read only regions in the default branch.
     */
    defaultBranchReadOnlyRegionsCount?: pulumi.Input<number>;
    /**
     * Number of shards in the default branch.
     */
    defaultBranchShardCount?: pulumi.Input<number>;
    /**
     * Number of tables in the default branch schema.
     */
    defaultBranchTableCount?: pulumi.Input<number>;
    /**
     * The total number of database development branches.
     */
    developmentBranchesCount?: pulumi.Input<number>;
    /**
     * The total number of database development branches.
     */
    htmlUrl?: pulumi.Input<string>;
    /**
     * The URL to see this database's branches in the web UI.
     */
    insightsRawQueries?: pulumi.Input<boolean>;
    /**
     * The total number of ongoing issues within a database.
     */
    issuesCount?: pulumi.Input<number>;
    /**
     * Framework used for applying migrations.
     */
    migrationFramework?: pulumi.Input<string>;
    /**
     * Table name to use for copying schema migration data.
     */
    migrationTableName?: pulumi.Input<string>;
    /**
     * If the database requires multiple admins for deletion.
     */
    multipleAdminsRequiredForDeletion?: pulumi.Input<boolean>;
    /**
     * The name of this database.
     */
    name?: pulumi.Input<string>;
    /**
     * The organization this database belongs to.
     */
    organization?: pulumi.Input<string>;
    /**
     * The database plan.
     */
    plan?: pulumi.Input<string>;
    /**
     * Whether web console is enabled for production branches.
     */
    productionBranchWebConsole?: pulumi.Input<boolean>;
    /**
     * The total number of database production branches.
     */
    productionBranchesCount?: pulumi.Input<number>;
    /**
     * If the database is ready to be used.
     */
    ready?: pulumi.Input<boolean>;
    /**
     * The region the database lives in.
     */
    region?: pulumi.Input<string>;
    /**
     * Whether an approval is required to deploy schema changes to this database.
     */
    requireApprovalForDeploy?: pulumi.Input<boolean>;
    /**
     * Whether to restrict branch creation to one region.
     */
    restrictBranchRegion?: pulumi.Input<boolean>;
    /**
     * When the default branch schema was last changed.
     */
    schemaLastUpdatedAt?: pulumi.Input<string>;
    /**
     * If the database is sharded.
     */
    sharded?: pulumi.Input<boolean>;
    /**
     * State of the database.
     */
    state?: pulumi.Input<string>;
    /**
     * When the database was last updated.
     */
    updatedAt?: pulumi.Input<string>;
    /**
     * The URL to the database API endpoint.
     */
    url?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Database resource.
 */
export interface DatabaseArgs {
    /**
     * Whether seeding branches with data is enabled for all branches.
     */
    allowDataBranching?: pulumi.Input<boolean>;
    /**
     * Whether to automatically manage Rails migrations during deploy requests.
     */
    automaticMigrations?: pulumi.Input<boolean>;
    /**
     * The size of the database cluster plan.
     */
    clusterSize?: pulumi.Input<string>;
    /**
     * The default branch for the database.
     */
    defaultBranch?: pulumi.Input<string>;
    /**
     * The URL to see this database's branches in the web UI.
     */
    insightsRawQueries?: pulumi.Input<boolean>;
    /**
     * The total number of ongoing issues within a database.
     */
    issuesCount?: pulumi.Input<number>;
    /**
     * Framework used for applying migrations.
     */
    migrationFramework?: pulumi.Input<string>;
    /**
     * Table name to use for copying schema migration data.
     */
    migrationTableName?: pulumi.Input<string>;
    /**
     * If the database requires multiple admins for deletion.
     */
    multipleAdminsRequiredForDeletion?: pulumi.Input<boolean>;
    /**
     * The name of this database.
     */
    name?: pulumi.Input<string>;
    /**
     * The organization this database belongs to.
     */
    organization: pulumi.Input<string>;
    /**
     * The database plan.
     */
    plan?: pulumi.Input<string>;
    /**
     * Whether web console is enabled for production branches.
     */
    productionBranchWebConsole?: pulumi.Input<boolean>;
    /**
     * The region the database lives in.
     */
    region?: pulumi.Input<string>;
    /**
     * Whether an approval is required to deploy schema changes to this database.
     */
    requireApprovalForDeploy?: pulumi.Input<boolean>;
    /**
     * Whether to restrict branch creation to one region.
     */
    restrictBranchRegion?: pulumi.Input<boolean>;
}
