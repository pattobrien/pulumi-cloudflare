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
 * const exampleZeroTrustDlpDataTagCategory = new cloudflare.ZeroTrustDlpDataTagCategory("example_zero_trust_dlp_data_tag_category", {
 *     accountId: "account_id",
 *     name: "name",
 *     description: "description",
 * });
 * ```
 *
 * ## Import
 *
 * ```sh
 * $ pulumi import cloudflare:index/zeroTrustDlpDataTagCategory:ZeroTrustDlpDataTagCategory example '<account_id>/<category_id>'
 * ```
 */
export declare class ZeroTrustDlpDataTagCategory extends pulumi.CustomResource {
    /**
     * Get an existing ZeroTrustDlpDataTagCategory resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ZeroTrustDlpDataTagCategoryState, opts?: pulumi.CustomResourceOptions): ZeroTrustDlpDataTagCategory;
    /**
     * Returns true if the given object is an instance of ZeroTrustDlpDataTagCategory.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ZeroTrustDlpDataTagCategory;
    readonly accountId: pulumi.Output<string>;
    readonly createdAt: pulumi.Output<string>;
    readonly description: pulumi.Output<string | undefined>;
    readonly name: pulumi.Output<string>;
    readonly tags: pulumi.Output<outputs.ZeroTrustDlpDataTagCategoryTag[]>;
    readonly templateId: pulumi.Output<string>;
    readonly updatedAt: pulumi.Output<string>;
    /**
     * Create a ZeroTrustDlpDataTagCategory resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ZeroTrustDlpDataTagCategoryArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering ZeroTrustDlpDataTagCategory resources.
 */
export interface ZeroTrustDlpDataTagCategoryState {
    accountId?: pulumi.Input<string | undefined>;
    createdAt?: pulumi.Input<string | undefined>;
    description?: pulumi.Input<string | undefined>;
    name?: pulumi.Input<string | undefined>;
    tags?: pulumi.Input<pulumi.Input<inputs.ZeroTrustDlpDataTagCategoryTag>[] | undefined>;
    templateId?: pulumi.Input<string | undefined>;
    updatedAt?: pulumi.Input<string | undefined>;
}
/**
 * The set of arguments for constructing a ZeroTrustDlpDataTagCategory resource.
 */
export interface ZeroTrustDlpDataTagCategoryArgs {
    accountId: pulumi.Input<string>;
    description?: pulumi.Input<string | undefined>;
    name: pulumi.Input<string>;
}
//# sourceMappingURL=zeroTrustDlpDataTagCategory.d.ts.map