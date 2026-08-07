import * as pulumi from "@pulumi/pulumi";
/**
 * Accepted Permissions
 *
 * - `DLS: Read`
 * - `DLS: Write`
 * - `IP Prefixes: Write`
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as cloudflare from "@pulumi/cloudflare";
 *
 * const exampleDlsPrefixBinding = new cloudflare.DlsPrefixBinding("example_dls_prefix_binding", {
 *     accountId: "023e105f4ecef8ad9ca31a8372d0c353",
 *     cidr: "10.0.1.0/24",
 *     prefixId: "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
 *     regionKey: "eu",
 * });
 * ```
 *
 * ## Import
 *
 * ```sh
 * $ pulumi import cloudflare:index/dlsPrefixBinding:DlsPrefixBinding example '<account_id>/<binding_id>'
 * ```
 */
export declare class DlsPrefixBinding extends pulumi.CustomResource {
    /**
     * Get an existing DlsPrefixBinding resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DlsPrefixBindingState, opts?: pulumi.CustomResourceOptions): DlsPrefixBinding;
    /**
     * Returns true if the given object is an instance of DlsPrefixBinding.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is DlsPrefixBinding;
    /**
     * Identifier of a Cloudflare account.
     */
    readonly accountId: pulumi.Output<string>;
    /**
     * IP prefix in CIDR notation to bind.
     */
    readonly cidr: pulumi.Output<string>;
    /**
     * The ID of the parent IP prefix that contains the CIDR.
     */
    readonly prefixId: pulumi.Output<string>;
    /**
     * Region key from managed regions (e.g., "us", "eu").
     */
    readonly regionKey: pulumi.Output<string>;
    /**
     * Create a DlsPrefixBinding resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DlsPrefixBindingArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering DlsPrefixBinding resources.
 */
export interface DlsPrefixBindingState {
    /**
     * Identifier of a Cloudflare account.
     */
    accountId?: pulumi.Input<string | undefined>;
    /**
     * IP prefix in CIDR notation to bind.
     */
    cidr?: pulumi.Input<string | undefined>;
    /**
     * The ID of the parent IP prefix that contains the CIDR.
     */
    prefixId?: pulumi.Input<string | undefined>;
    /**
     * Region key from managed regions (e.g., "us", "eu").
     */
    regionKey?: pulumi.Input<string | undefined>;
}
/**
 * The set of arguments for constructing a DlsPrefixBinding resource.
 */
export interface DlsPrefixBindingArgs {
    /**
     * Identifier of a Cloudflare account.
     */
    accountId: pulumi.Input<string>;
    /**
     * IP prefix in CIDR notation to bind.
     */
    cidr: pulumi.Input<string>;
    /**
     * The ID of the parent IP prefix that contains the CIDR.
     */
    prefixId: pulumi.Input<string>;
    /**
     * Region key from managed regions (e.g., "us", "eu").
     */
    regionKey: pulumi.Input<string>;
}
//# sourceMappingURL=dlsPrefixBinding.d.ts.map