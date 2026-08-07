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
 * const exampleZeroTrustDlpDataTagCategories = cloudflare.getZeroTrustDlpDataTagCategories({
 *     accountId: "account_id",
 * });
 * ```
 */
export declare function getZeroTrustDlpDataTagCategories(args: GetZeroTrustDlpDataTagCategoriesArgs, opts?: pulumi.InvokeOptions): Promise<GetZeroTrustDlpDataTagCategoriesResult>;
/**
 * A collection of arguments for invoking getZeroTrustDlpDataTagCategories.
 */
export interface GetZeroTrustDlpDataTagCategoriesArgs {
    accountId: string;
    /**
     * Max items to fetch, default: 1000
     */
    maxItems?: number;
}
/**
 * A collection of values returned by getZeroTrustDlpDataTagCategories.
 */
export interface GetZeroTrustDlpDataTagCategoriesResult {
    readonly accountId: string;
    /**
     * Max items to fetch, default: 1000
     */
    readonly maxItems?: number;
    /**
     * The items returned by the data source
     */
    readonly results: outputs.GetZeroTrustDlpDataTagCategoriesResult[];
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
 * const exampleZeroTrustDlpDataTagCategories = cloudflare.getZeroTrustDlpDataTagCategories({
 *     accountId: "account_id",
 * });
 * ```
 */
export declare function getZeroTrustDlpDataTagCategoriesOutput(args: GetZeroTrustDlpDataTagCategoriesOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetZeroTrustDlpDataTagCategoriesResult>;
/**
 * A collection of arguments for invoking getZeroTrustDlpDataTagCategories.
 */
export interface GetZeroTrustDlpDataTagCategoriesOutputArgs {
    accountId: pulumi.Input<string>;
    /**
     * Max items to fetch, default: 1000
     */
    maxItems?: pulumi.Input<number | undefined>;
}
//# sourceMappingURL=getZeroTrustDlpDataTagCategories.d.ts.map