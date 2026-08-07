import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
/**
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as cloudflare from "@pulumi/cloudflare";
 *
 * const exampleZeroTrustDeviceDeploymentGroups = new cloudflare.ZeroTrustDeviceDeploymentGroups("example_zero_trust_device_deployment_groups", {
 *     accountId: "account_id",
 *     name: "Engineering Ring 0",
 *     versionConfigs: [{
 *         targetEnvironment: "windows",
 *         version: "2026.6.234.0",
 *     }],
 *     policyIds: ["string"],
 * });
 * ```
 *
 * ## Import
 *
 * ```sh
 * $ pulumi import cloudflare:index/zeroTrustDeviceDeploymentGroups:ZeroTrustDeviceDeploymentGroups example '<account_id>/<group_id>'
 * ```
 */
export declare class ZeroTrustDeviceDeploymentGroups extends pulumi.CustomResource {
    /**
     * Get an existing ZeroTrustDeviceDeploymentGroups resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ZeroTrustDeviceDeploymentGroupsState, opts?: pulumi.CustomResourceOptions): ZeroTrustDeviceDeploymentGroups;
    /**
     * Returns true if the given object is an instance of ZeroTrustDeviceDeploymentGroups.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ZeroTrustDeviceDeploymentGroups;
    readonly accountId: pulumi.Output<string>;
    /**
     * The RFC3339Nano timestamp when the deployment group was created.
     */
    readonly createdAt: pulumi.Output<string>;
    /**
     * A user-friendly name for the deployment group.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Contains an optional list of policy IDs assigned to a group.
     */
    readonly policyIds: pulumi.Output<string[] | undefined>;
    /**
     * The RFC3339Nano timestamp when the deployment group was last updated.
     */
    readonly updatedAt: pulumi.Output<string>;
    /**
     * Contains at least one version configuration.
     */
    readonly versionConfigs: pulumi.Output<outputs.ZeroTrustDeviceDeploymentGroupsVersionConfig[]>;
    /**
     * Create a ZeroTrustDeviceDeploymentGroups resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ZeroTrustDeviceDeploymentGroupsArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering ZeroTrustDeviceDeploymentGroups resources.
 */
export interface ZeroTrustDeviceDeploymentGroupsState {
    accountId?: pulumi.Input<string | undefined>;
    /**
     * The RFC3339Nano timestamp when the deployment group was created.
     */
    createdAt?: pulumi.Input<string | undefined>;
    /**
     * A user-friendly name for the deployment group.
     */
    name?: pulumi.Input<string | undefined>;
    /**
     * Contains an optional list of policy IDs assigned to a group.
     */
    policyIds?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * The RFC3339Nano timestamp when the deployment group was last updated.
     */
    updatedAt?: pulumi.Input<string | undefined>;
    /**
     * Contains at least one version configuration.
     */
    versionConfigs?: pulumi.Input<pulumi.Input<inputs.ZeroTrustDeviceDeploymentGroupsVersionConfig>[] | undefined>;
}
/**
 * The set of arguments for constructing a ZeroTrustDeviceDeploymentGroups resource.
 */
export interface ZeroTrustDeviceDeploymentGroupsArgs {
    accountId: pulumi.Input<string>;
    /**
     * A user-friendly name for the deployment group.
     */
    name: pulumi.Input<string>;
    /**
     * Contains an optional list of policy IDs assigned to a group.
     */
    policyIds?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * Contains at least one version configuration.
     */
    versionConfigs: pulumi.Input<pulumi.Input<inputs.ZeroTrustDeviceDeploymentGroupsVersionConfig>[]>;
}
//# sourceMappingURL=zeroTrustDeviceDeploymentGroups.d.ts.map