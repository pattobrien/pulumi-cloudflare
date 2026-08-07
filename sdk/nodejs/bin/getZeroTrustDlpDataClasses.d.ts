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
 * const exampleZeroTrustDlpDataClasses = cloudflare.getZeroTrustDlpDataClasses({
 *     accountId: "account_id",
 * });
 * ```
 */
export declare function getZeroTrustDlpDataClasses(args: GetZeroTrustDlpDataClassesArgs, opts?: pulumi.InvokeOptions): Promise<GetZeroTrustDlpDataClassesResult>;
/**
 * A collection of arguments for invoking getZeroTrustDlpDataClasses.
 */
export interface GetZeroTrustDlpDataClassesArgs {
    accountId: string;
    /**
     * Max items to fetch, default: 1000
     */
    maxItems?: number;
}
/**
 * A collection of values returned by getZeroTrustDlpDataClasses.
 */
export interface GetZeroTrustDlpDataClassesResult {
    readonly accountId: string;
    /**
     * Max items to fetch, default: 1000
     */
    readonly maxItems?: number;
    /**
     * The items returned by the data source
     */
    readonly results: outputs.GetZeroTrustDlpDataClassesResult[];
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
 * const exampleZeroTrustDlpDataClasses = cloudflare.getZeroTrustDlpDataClasses({
 *     accountId: "account_id",
 * });
 * ```
 */
export declare function getZeroTrustDlpDataClassesOutput(args: GetZeroTrustDlpDataClassesOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetZeroTrustDlpDataClassesResult>;
/**
 * A collection of arguments for invoking getZeroTrustDlpDataClasses.
 */
export interface GetZeroTrustDlpDataClassesOutputArgs {
    accountId: pulumi.Input<string>;
    /**
     * Max items to fetch, default: 1000
     */
    maxItems?: pulumi.Input<number | undefined>;
}
//# sourceMappingURL=getZeroTrustDlpDataClasses.d.ts.map