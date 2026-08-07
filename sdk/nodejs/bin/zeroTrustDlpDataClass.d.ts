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
 * const exampleZeroTrustDlpDataClass = new cloudflare.ZeroTrustDlpDataClass("example_zero_trust_dlp_data_class", {
 *     accountId: "account_id",
 *     dataTags: ["182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e"],
 *     expression: "expression",
 *     name: "name",
 *     sensitivityLevels: [{
 *         groupId: "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
 *         levelId: "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
 *     }],
 *     description: "description",
 * });
 * ```
 *
 * ## Import
 *
 * ```sh
 * $ pulumi import cloudflare:index/zeroTrustDlpDataClass:ZeroTrustDlpDataClass example '<account_id>/<data_class_id>'
 * ```
 */
export declare class ZeroTrustDlpDataClass extends pulumi.CustomResource {
    /**
     * Get an existing ZeroTrustDlpDataClass resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ZeroTrustDlpDataClassState, opts?: pulumi.CustomResourceOptions): ZeroTrustDlpDataClass;
    /**
     * Returns true if the given object is an instance of ZeroTrustDlpDataClass.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ZeroTrustDlpDataClass;
    readonly accountId: pulumi.Output<string>;
    readonly createdAt: pulumi.Output<string>;
    readonly dataTags: pulumi.Output<string[]>;
    readonly description: pulumi.Output<string | undefined>;
    readonly expression: pulumi.Output<string>;
    readonly name: pulumi.Output<string>;
    readonly sensitivityLevels: pulumi.Output<outputs.ZeroTrustDlpDataClassSensitivityLevel[]>;
    readonly updatedAt: pulumi.Output<string>;
    /**
     * Create a ZeroTrustDlpDataClass resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ZeroTrustDlpDataClassArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering ZeroTrustDlpDataClass resources.
 */
export interface ZeroTrustDlpDataClassState {
    accountId?: pulumi.Input<string | undefined>;
    createdAt?: pulumi.Input<string | undefined>;
    dataTags?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    description?: pulumi.Input<string | undefined>;
    expression?: pulumi.Input<string | undefined>;
    name?: pulumi.Input<string | undefined>;
    sensitivityLevels?: pulumi.Input<pulumi.Input<inputs.ZeroTrustDlpDataClassSensitivityLevel>[] | undefined>;
    updatedAt?: pulumi.Input<string | undefined>;
}
/**
 * The set of arguments for constructing a ZeroTrustDlpDataClass resource.
 */
export interface ZeroTrustDlpDataClassArgs {
    accountId: pulumi.Input<string>;
    dataTags: pulumi.Input<pulumi.Input<string>[]>;
    description?: pulumi.Input<string | undefined>;
    expression: pulumi.Input<string>;
    name: pulumi.Input<string>;
    sensitivityLevels: pulumi.Input<pulumi.Input<inputs.ZeroTrustDlpDataClassSensitivityLevel>[]>;
}
//# sourceMappingURL=zeroTrustDlpDataClass.d.ts.map