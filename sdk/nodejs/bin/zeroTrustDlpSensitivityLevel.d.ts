import * as pulumi from "@pulumi/pulumi";
/**
 * Accepted Permissions
 *
 * - `Zero Trust Read`
 * - `Zero Trust Write`
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as cloudflare from "@pulumi/cloudflare";
 *
 * const exampleZeroTrustDlpSensitivityLevel = new cloudflare.ZeroTrustDlpSensitivityLevel("example_zero_trust_dlp_sensitivity_level", {
 *     accountId: "account_id",
 *     sensitivityGroupId: "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
 *     name: "name",
 *     description: "description",
 * });
 * ```
 *
 * ## Import
 *
 * ```sh
 * $ pulumi import cloudflare:index/zeroTrustDlpSensitivityLevel:ZeroTrustDlpSensitivityLevel example '<account_id>/<sensitivity_group_id>/<sensitivity_level_id>'
 * ```
 */
export declare class ZeroTrustDlpSensitivityLevel extends pulumi.CustomResource {
    /**
     * Get an existing ZeroTrustDlpSensitivityLevel resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ZeroTrustDlpSensitivityLevelState, opts?: pulumi.CustomResourceOptions): ZeroTrustDlpSensitivityLevel;
    /**
     * Returns true if the given object is an instance of ZeroTrustDlpSensitivityLevel.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ZeroTrustDlpSensitivityLevel;
    readonly accountId: pulumi.Output<string>;
    readonly createdAt: pulumi.Output<string>;
    readonly description: pulumi.Output<string | undefined>;
    readonly name: pulumi.Output<string>;
    readonly sensitivityGroupId: pulumi.Output<string>;
    readonly updatedAt: pulumi.Output<string>;
    /**
     * Create a ZeroTrustDlpSensitivityLevel resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ZeroTrustDlpSensitivityLevelArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering ZeroTrustDlpSensitivityLevel resources.
 */
export interface ZeroTrustDlpSensitivityLevelState {
    accountId?: pulumi.Input<string | undefined>;
    createdAt?: pulumi.Input<string | undefined>;
    description?: pulumi.Input<string | undefined>;
    name?: pulumi.Input<string | undefined>;
    sensitivityGroupId?: pulumi.Input<string | undefined>;
    updatedAt?: pulumi.Input<string | undefined>;
}
/**
 * The set of arguments for constructing a ZeroTrustDlpSensitivityLevel resource.
 */
export interface ZeroTrustDlpSensitivityLevelArgs {
    accountId: pulumi.Input<string>;
    description?: pulumi.Input<string | undefined>;
    name: pulumi.Input<string>;
    sensitivityGroupId: pulumi.Input<string>;
}
//# sourceMappingURL=zeroTrustDlpSensitivityLevel.d.ts.map