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
 * const exampleZeroTrustDlpSensitivityGroups = cloudflare.getZeroTrustDlpSensitivityGroups({
 *     accountId: "account_id",
 * });
 * ```
 */
export declare function getZeroTrustDlpSensitivityGroups(args: GetZeroTrustDlpSensitivityGroupsArgs, opts?: pulumi.InvokeOptions): Promise<GetZeroTrustDlpSensitivityGroupsResult>;
/**
 * A collection of arguments for invoking getZeroTrustDlpSensitivityGroups.
 */
export interface GetZeroTrustDlpSensitivityGroupsArgs {
    accountId: string;
    /**
     * Max items to fetch, default: 1000
     */
    maxItems?: number;
}
/**
 * A collection of values returned by getZeroTrustDlpSensitivityGroups.
 */
export interface GetZeroTrustDlpSensitivityGroupsResult {
    readonly accountId: string;
    /**
     * Max items to fetch, default: 1000
     */
    readonly maxItems?: number;
    /**
     * The items returned by the data source
     */
    readonly results: outputs.GetZeroTrustDlpSensitivityGroupsResult[];
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
 * const exampleZeroTrustDlpSensitivityGroups = cloudflare.getZeroTrustDlpSensitivityGroups({
 *     accountId: "account_id",
 * });
 * ```
 */
export declare function getZeroTrustDlpSensitivityGroupsOutput(args: GetZeroTrustDlpSensitivityGroupsOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetZeroTrustDlpSensitivityGroupsResult>;
/**
 * A collection of arguments for invoking getZeroTrustDlpSensitivityGroups.
 */
export interface GetZeroTrustDlpSensitivityGroupsOutputArgs {
    accountId: pulumi.Input<string>;
    /**
     * Max items to fetch, default: 1000
     */
    maxItems?: pulumi.Input<number | undefined>;
}
//# sourceMappingURL=getZeroTrustDlpSensitivityGroups.d.ts.map