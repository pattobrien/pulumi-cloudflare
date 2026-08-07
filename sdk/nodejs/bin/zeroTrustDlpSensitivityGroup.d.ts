import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
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
 * const exampleZeroTrustDlpSensitivityGroup = new cloudflare.ZeroTrustDlpSensitivityGroup("example_zero_trust_dlp_sensitivity_group", {
 *     accountId: "account_id",
 *     name: "name",
 *     description: "description",
 * });
 * ```
 *
 * ## Import
 *
 * ```sh
 * $ pulumi import cloudflare:index/zeroTrustDlpSensitivityGroup:ZeroTrustDlpSensitivityGroup example '<account_id>/<sensitivity_group_id>'
 * ```
 */
export declare class ZeroTrustDlpSensitivityGroup extends pulumi.CustomResource {
    /**
     * Get an existing ZeroTrustDlpSensitivityGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ZeroTrustDlpSensitivityGroupState, opts?: pulumi.CustomResourceOptions): ZeroTrustDlpSensitivityGroup;
    /**
     * Returns true if the given object is an instance of ZeroTrustDlpSensitivityGroup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ZeroTrustDlpSensitivityGroup;
    readonly accountId: pulumi.Output<string>;
    readonly createdAt: pulumi.Output<string>;
    readonly description: pulumi.Output<string | undefined>;
    readonly levels: pulumi.Output<outputs.ZeroTrustDlpSensitivityGroupLevel[]>;
    readonly name: pulumi.Output<string>;
    readonly templateId: pulumi.Output<string>;
    readonly updatedAt: pulumi.Output<string>;
    /**
     * Create a ZeroTrustDlpSensitivityGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ZeroTrustDlpSensitivityGroupArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering ZeroTrustDlpSensitivityGroup resources.
 */
export interface ZeroTrustDlpSensitivityGroupState {
    accountId?: pulumi.Input<string | undefined>;
    createdAt?: pulumi.Input<string | undefined>;
    description?: pulumi.Input<string | undefined>;
    levels?: pulumi.Input<pulumi.Input<inputs.ZeroTrustDlpSensitivityGroupLevel>[] | undefined>;
    name?: pulumi.Input<string | undefined>;
    templateId?: pulumi.Input<string | undefined>;
    updatedAt?: pulumi.Input<string | undefined>;
}
/**
 * The set of arguments for constructing a ZeroTrustDlpSensitivityGroup resource.
 */
export interface ZeroTrustDlpSensitivityGroupArgs {
    accountId: pulumi.Input<string>;
    description?: pulumi.Input<string | undefined>;
    name: pulumi.Input<string>;
}
//# sourceMappingURL=zeroTrustDlpSensitivityGroup.d.ts.map