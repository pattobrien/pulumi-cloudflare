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
 * const exampleZeroTrustDlpSensitivityLevels = cloudflare.getZeroTrustDlpSensitivityLevels({
 *     accountId: "account_id",
 *     sensitivityGroupId: "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
 * });
 * ```
 */
export declare function getZeroTrustDlpSensitivityLevels(args: GetZeroTrustDlpSensitivityLevelsArgs, opts?: pulumi.InvokeOptions): Promise<GetZeroTrustDlpSensitivityLevelsResult>;
/**
 * A collection of arguments for invoking getZeroTrustDlpSensitivityLevels.
 */
export interface GetZeroTrustDlpSensitivityLevelsArgs {
    accountId: string;
    /**
     * Max items to fetch, default: 1000
     */
    maxItems?: number;
    sensitivityGroupId: string;
}
/**
 * A collection of values returned by getZeroTrustDlpSensitivityLevels.
 */
export interface GetZeroTrustDlpSensitivityLevelsResult {
    readonly accountId: string;
    /**
     * Max items to fetch, default: 1000
     */
    readonly maxItems?: number;
    /**
     * The items returned by the data source
     */
    readonly results: outputs.GetZeroTrustDlpSensitivityLevelsResult[];
    readonly sensitivityGroupId: string;
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
 * const exampleZeroTrustDlpSensitivityLevels = cloudflare.getZeroTrustDlpSensitivityLevels({
 *     accountId: "account_id",
 *     sensitivityGroupId: "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
 * });
 * ```
 */
export declare function getZeroTrustDlpSensitivityLevelsOutput(args: GetZeroTrustDlpSensitivityLevelsOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetZeroTrustDlpSensitivityLevelsResult>;
/**
 * A collection of arguments for invoking getZeroTrustDlpSensitivityLevels.
 */
export interface GetZeroTrustDlpSensitivityLevelsOutputArgs {
    accountId: pulumi.Input<string>;
    /**
     * Max items to fetch, default: 1000
     */
    maxItems?: pulumi.Input<number | undefined>;
    sensitivityGroupId: pulumi.Input<string>;
}
//# sourceMappingURL=getZeroTrustDlpSensitivityLevels.d.ts.map