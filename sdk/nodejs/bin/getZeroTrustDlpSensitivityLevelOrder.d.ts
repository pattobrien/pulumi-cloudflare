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
 * const exampleZeroTrustDlpSensitivityLevelOrder = cloudflare.getZeroTrustDlpSensitivityLevelOrder({
 *     accountId: "account_id",
 *     sensitivityGroupId: "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
 * });
 * ```
 */
export declare function getZeroTrustDlpSensitivityLevelOrder(args: GetZeroTrustDlpSensitivityLevelOrderArgs, opts?: pulumi.InvokeOptions): Promise<GetZeroTrustDlpSensitivityLevelOrderResult>;
/**
 * A collection of arguments for invoking getZeroTrustDlpSensitivityLevelOrder.
 */
export interface GetZeroTrustDlpSensitivityLevelOrderArgs {
    accountId: string;
    sensitivityGroupId: string;
}
/**
 * A collection of values returned by getZeroTrustDlpSensitivityLevelOrder.
 */
export interface GetZeroTrustDlpSensitivityLevelOrderResult {
    readonly accountId: string;
    /**
     * The ID of this resource.
     */
    readonly id: string;
    readonly levelIds: string[];
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
 * const exampleZeroTrustDlpSensitivityLevelOrder = cloudflare.getZeroTrustDlpSensitivityLevelOrder({
 *     accountId: "account_id",
 *     sensitivityGroupId: "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
 * });
 * ```
 */
export declare function getZeroTrustDlpSensitivityLevelOrderOutput(args: GetZeroTrustDlpSensitivityLevelOrderOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetZeroTrustDlpSensitivityLevelOrderResult>;
/**
 * A collection of arguments for invoking getZeroTrustDlpSensitivityLevelOrder.
 */
export interface GetZeroTrustDlpSensitivityLevelOrderOutputArgs {
    accountId: pulumi.Input<string>;
    sensitivityGroupId: pulumi.Input<string>;
}
//# sourceMappingURL=getZeroTrustDlpSensitivityLevelOrder.d.ts.map