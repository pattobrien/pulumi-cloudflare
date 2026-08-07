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
 * const exampleZeroTrustDlpDataTag = new cloudflare.ZeroTrustDlpDataTag("example_zero_trust_dlp_data_tag", {
 *     accountId: "account_id",
 *     categoryId: "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
 *     name: "name",
 *     description: "description",
 * });
 * ```
 *
 * ## Import
 *
 * ```sh
 * $ pulumi import cloudflare:index/zeroTrustDlpDataTag:ZeroTrustDlpDataTag example '<account_id>/<category_id>/<tag_id>'
 * ```
 */
export declare class ZeroTrustDlpDataTag extends pulumi.CustomResource {
    /**
     * Get an existing ZeroTrustDlpDataTag resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ZeroTrustDlpDataTagState, opts?: pulumi.CustomResourceOptions): ZeroTrustDlpDataTag;
    /**
     * Returns true if the given object is an instance of ZeroTrustDlpDataTag.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ZeroTrustDlpDataTag;
    readonly accountId: pulumi.Output<string>;
    readonly categoryId: pulumi.Output<string>;
    readonly createdAt: pulumi.Output<string>;
    readonly description: pulumi.Output<string | undefined>;
    readonly name: pulumi.Output<string>;
    readonly updatedAt: pulumi.Output<string>;
    /**
     * Create a ZeroTrustDlpDataTag resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ZeroTrustDlpDataTagArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering ZeroTrustDlpDataTag resources.
 */
export interface ZeroTrustDlpDataTagState {
    accountId?: pulumi.Input<string | undefined>;
    categoryId?: pulumi.Input<string | undefined>;
    createdAt?: pulumi.Input<string | undefined>;
    description?: pulumi.Input<string | undefined>;
    name?: pulumi.Input<string | undefined>;
    updatedAt?: pulumi.Input<string | undefined>;
}
/**
 * The set of arguments for constructing a ZeroTrustDlpDataTag resource.
 */
export interface ZeroTrustDlpDataTagArgs {
    accountId: pulumi.Input<string>;
    categoryId: pulumi.Input<string>;
    description?: pulumi.Input<string | undefined>;
    name: pulumi.Input<string>;
}
//# sourceMappingURL=zeroTrustDlpDataTag.d.ts.map