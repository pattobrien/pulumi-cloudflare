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
 * const exampleZeroTrustDlpDataTag = cloudflare.getZeroTrustDlpDataTag({
 *     accountId: "account_id",
 *     categoryId: "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
 *     tagId: "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
 * });
 * ```
 */
export declare function getZeroTrustDlpDataTag(args: GetZeroTrustDlpDataTagArgs, opts?: pulumi.InvokeOptions): Promise<GetZeroTrustDlpDataTagResult>;
/**
 * A collection of arguments for invoking getZeroTrustDlpDataTag.
 */
export interface GetZeroTrustDlpDataTagArgs {
    accountId: string;
    categoryId: string;
    tagId: string;
}
/**
 * A collection of values returned by getZeroTrustDlpDataTag.
 */
export interface GetZeroTrustDlpDataTagResult {
    readonly accountId: string;
    readonly categoryId: string;
    readonly createdAt: string;
    readonly description: string;
    /**
     * The ID of this resource.
     */
    readonly id: string;
    readonly name: string;
    readonly tagId: string;
    readonly updatedAt: string;
}
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
 * const exampleZeroTrustDlpDataTag = cloudflare.getZeroTrustDlpDataTag({
 *     accountId: "account_id",
 *     categoryId: "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
 *     tagId: "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
 * });
 * ```
 */
export declare function getZeroTrustDlpDataTagOutput(args: GetZeroTrustDlpDataTagOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetZeroTrustDlpDataTagResult>;
/**
 * A collection of arguments for invoking getZeroTrustDlpDataTag.
 */
export interface GetZeroTrustDlpDataTagOutputArgs {
    accountId: pulumi.Input<string>;
    categoryId: pulumi.Input<string>;
    tagId: pulumi.Input<string>;
}
//# sourceMappingURL=getZeroTrustDlpDataTag.d.ts.map