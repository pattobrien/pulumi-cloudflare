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
 * const exampleZeroTrustDlpSensitivityLevel = cloudflare.getZeroTrustDlpSensitivityLevel({
 *     accountId: "account_id",
 *     sensitivityGroupId: "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
 *     sensitivityLevelId: "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
 * });
 * ```
 */
export declare function getZeroTrustDlpSensitivityLevel(args: GetZeroTrustDlpSensitivityLevelArgs, opts?: pulumi.InvokeOptions): Promise<GetZeroTrustDlpSensitivityLevelResult>;
/**
 * A collection of arguments for invoking getZeroTrustDlpSensitivityLevel.
 */
export interface GetZeroTrustDlpSensitivityLevelArgs {
    accountId: string;
    sensitivityGroupId: string;
    sensitivityLevelId: string;
}
/**
 * A collection of values returned by getZeroTrustDlpSensitivityLevel.
 */
export interface GetZeroTrustDlpSensitivityLevelResult {
    readonly accountId: string;
    readonly createdAt: string;
    readonly description: string;
    /**
     * The ID of this resource.
     */
    readonly id: string;
    readonly name: string;
    readonly sensitivityGroupId: string;
    readonly sensitivityLevelId: string;
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
 * const exampleZeroTrustDlpSensitivityLevel = cloudflare.getZeroTrustDlpSensitivityLevel({
 *     accountId: "account_id",
 *     sensitivityGroupId: "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
 *     sensitivityLevelId: "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
 * });
 * ```
 */
export declare function getZeroTrustDlpSensitivityLevelOutput(args: GetZeroTrustDlpSensitivityLevelOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetZeroTrustDlpSensitivityLevelResult>;
/**
 * A collection of arguments for invoking getZeroTrustDlpSensitivityLevel.
 */
export interface GetZeroTrustDlpSensitivityLevelOutputArgs {
    accountId: pulumi.Input<string>;
    sensitivityGroupId: pulumi.Input<string>;
    sensitivityLevelId: pulumi.Input<string>;
}
//# sourceMappingURL=getZeroTrustDlpSensitivityLevel.d.ts.map