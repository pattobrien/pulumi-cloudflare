import * as pulumi from "@pulumi/pulumi";
/**
 * Accepted Permissions
 *
 * - `DLS: Read`
 * - `DLS: Write`
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as cloudflare from "@pulumi/cloudflare";
 *
 * const exampleDlsPrefixBinding = cloudflare.getDlsPrefixBinding({
 *     accountId: "023e105f4ecef8ad9ca31a8372d0c353",
 *     bindingId: "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
 * });
 * ```
 */
export declare function getDlsPrefixBinding(args: GetDlsPrefixBindingArgs, opts?: pulumi.InvokeOptions): Promise<GetDlsPrefixBindingResult>;
/**
 * A collection of arguments for invoking getDlsPrefixBinding.
 */
export interface GetDlsPrefixBindingArgs {
    /**
     * Identifier of a Cloudflare account.
     */
    accountId: string;
    /**
     * Unique identifier for the prefix binding.
     */
    bindingId: string;
}
/**
 * A collection of values returned by getDlsPrefixBinding.
 */
export interface GetDlsPrefixBindingResult {
    /**
     * Identifier of a Cloudflare account.
     */
    readonly accountId: string;
    /**
     * Unique identifier for the prefix binding.
     */
    readonly bindingId: string;
    /**
     * The CIDR that is bound.
     */
    readonly cidr: string;
    /**
     * Unique identifier for the prefix binding.
     */
    readonly id: string;
    /**
     * The ID of the parent prefix.
     */
    readonly prefixId: string;
    /**
     * The region key used for the binding.
     */
    readonly regionKey: string;
}
/**
 * Accepted Permissions
 *
 * - `DLS: Read`
 * - `DLS: Write`
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as cloudflare from "@pulumi/cloudflare";
 *
 * const exampleDlsPrefixBinding = cloudflare.getDlsPrefixBinding({
 *     accountId: "023e105f4ecef8ad9ca31a8372d0c353",
 *     bindingId: "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
 * });
 * ```
 */
export declare function getDlsPrefixBindingOutput(args: GetDlsPrefixBindingOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetDlsPrefixBindingResult>;
/**
 * A collection of arguments for invoking getDlsPrefixBinding.
 */
export interface GetDlsPrefixBindingOutputArgs {
    /**
     * Identifier of a Cloudflare account.
     */
    accountId: pulumi.Input<string>;
    /**
     * Unique identifier for the prefix binding.
     */
    bindingId: pulumi.Input<string>;
}
//# sourceMappingURL=getDlsPrefixBinding.d.ts.map