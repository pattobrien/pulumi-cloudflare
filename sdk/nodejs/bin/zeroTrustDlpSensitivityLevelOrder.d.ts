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
 * const exampleZeroTrustDlpSensitivityLevelOrder = new cloudflare.ZeroTrustDlpSensitivityLevelOrder("example_zero_trust_dlp_sensitivity_level_order", {
 *     accountId: "account_id",
 *     sensitivityGroupId: "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
 *     levelIds: ["182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e"],
 * });
 * ```
 *
 * ## Import
 *
 * ```sh
 * $ pulumi import cloudflare:index/zeroTrustDlpSensitivityLevelOrder:ZeroTrustDlpSensitivityLevelOrder example '<account_id>/<sensitivity_group_id>'
 * ```
 */
export declare class ZeroTrustDlpSensitivityLevelOrder extends pulumi.CustomResource {
    /**
     * Get an existing ZeroTrustDlpSensitivityLevelOrder resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ZeroTrustDlpSensitivityLevelOrderState, opts?: pulumi.CustomResourceOptions): ZeroTrustDlpSensitivityLevelOrder;
    /**
     * Returns true if the given object is an instance of ZeroTrustDlpSensitivityLevelOrder.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ZeroTrustDlpSensitivityLevelOrder;
    readonly accountId: pulumi.Output<string>;
    readonly levelIds: pulumi.Output<string[]>;
    readonly sensitivityGroupId: pulumi.Output<string>;
    /**
     * Create a ZeroTrustDlpSensitivityLevelOrder resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ZeroTrustDlpSensitivityLevelOrderArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering ZeroTrustDlpSensitivityLevelOrder resources.
 */
export interface ZeroTrustDlpSensitivityLevelOrderState {
    accountId?: pulumi.Input<string | undefined>;
    levelIds?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    sensitivityGroupId?: pulumi.Input<string | undefined>;
}
/**
 * The set of arguments for constructing a ZeroTrustDlpSensitivityLevelOrder resource.
 */
export interface ZeroTrustDlpSensitivityLevelOrderArgs {
    accountId: pulumi.Input<string>;
    levelIds: pulumi.Input<pulumi.Input<string>[]>;
    sensitivityGroupId: pulumi.Input<string>;
}
//# sourceMappingURL=zeroTrustDlpSensitivityLevelOrder.d.ts.map