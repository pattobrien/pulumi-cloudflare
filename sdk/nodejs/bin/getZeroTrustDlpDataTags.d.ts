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
 * const exampleZeroTrustDlpDataTags = cloudflare.getZeroTrustDlpDataTags({
 *     accountId: "account_id",
 *     categoryId: "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
 * });
 * ```
 */
export declare function getZeroTrustDlpDataTags(args: GetZeroTrustDlpDataTagsArgs, opts?: pulumi.InvokeOptions): Promise<GetZeroTrustDlpDataTagsResult>;
/**
 * A collection of arguments for invoking getZeroTrustDlpDataTags.
 */
export interface GetZeroTrustDlpDataTagsArgs {
    accountId: string;
    categoryId: string;
    /**
     * Max items to fetch, default: 1000
     */
    maxItems?: number;
}
/**
 * A collection of values returned by getZeroTrustDlpDataTags.
 */
export interface GetZeroTrustDlpDataTagsResult {
    readonly accountId: string;
    readonly categoryId: string;
    /**
     * Max items to fetch, default: 1000
     */
    readonly maxItems?: number;
    /**
     * The items returned by the data source
     */
    readonly results: outputs.GetZeroTrustDlpDataTagsResult[];
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
 * const exampleZeroTrustDlpDataTags = cloudflare.getZeroTrustDlpDataTags({
 *     accountId: "account_id",
 *     categoryId: "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
 * });
 * ```
 */
export declare function getZeroTrustDlpDataTagsOutput(args: GetZeroTrustDlpDataTagsOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetZeroTrustDlpDataTagsResult>;
/**
 * A collection of arguments for invoking getZeroTrustDlpDataTags.
 */
export interface GetZeroTrustDlpDataTagsOutputArgs {
    accountId: pulumi.Input<string>;
    categoryId: pulumi.Input<string>;
    /**
     * Max items to fetch, default: 1000
     */
    maxItems?: pulumi.Input<number | undefined>;
}
//# sourceMappingURL=getZeroTrustDlpDataTags.d.ts.map