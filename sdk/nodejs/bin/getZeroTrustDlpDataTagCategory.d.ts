import * as pulumi from "@pulumi/pulumi";
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
 * const exampleZeroTrustDlpDataTagCategory = cloudflare.getZeroTrustDlpDataTagCategory({
 *     accountId: "account_id",
 *     categoryId: "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
 * });
 * ```
 */
export declare function getZeroTrustDlpDataTagCategory(args: GetZeroTrustDlpDataTagCategoryArgs, opts?: pulumi.InvokeOptions): Promise<GetZeroTrustDlpDataTagCategoryResult>;
/**
 * A collection of arguments for invoking getZeroTrustDlpDataTagCategory.
 */
export interface GetZeroTrustDlpDataTagCategoryArgs {
    accountId: string;
    categoryId: string;
}
/**
 * A collection of values returned by getZeroTrustDlpDataTagCategory.
 */
export interface GetZeroTrustDlpDataTagCategoryResult {
    readonly accountId: string;
    readonly categoryId: string;
    readonly createdAt: string;
    readonly description: string;
    /**
     * The ID of this resource.
     */
    readonly id: string;
    readonly name: string;
    readonly tags: outputs.GetZeroTrustDlpDataTagCategoryTag[];
    readonly templateId: string;
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
 * const exampleZeroTrustDlpDataTagCategory = cloudflare.getZeroTrustDlpDataTagCategory({
 *     accountId: "account_id",
 *     categoryId: "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
 * });
 * ```
 */
export declare function getZeroTrustDlpDataTagCategoryOutput(args: GetZeroTrustDlpDataTagCategoryOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetZeroTrustDlpDataTagCategoryResult>;
/**
 * A collection of arguments for invoking getZeroTrustDlpDataTagCategory.
 */
export interface GetZeroTrustDlpDataTagCategoryOutputArgs {
    accountId: pulumi.Input<string>;
    categoryId: pulumi.Input<string>;
}
//# sourceMappingURL=getZeroTrustDlpDataTagCategory.d.ts.map