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
 * const exampleZeroTrustDlpSensitivityGroup = cloudflare.getZeroTrustDlpSensitivityGroup({
 *     accountId: "account_id",
 *     sensitivityGroupId: "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
 * });
 * ```
 */
export declare function getZeroTrustDlpSensitivityGroup(args: GetZeroTrustDlpSensitivityGroupArgs, opts?: pulumi.InvokeOptions): Promise<GetZeroTrustDlpSensitivityGroupResult>;
/**
 * A collection of arguments for invoking getZeroTrustDlpSensitivityGroup.
 */
export interface GetZeroTrustDlpSensitivityGroupArgs {
    accountId: string;
    sensitivityGroupId: string;
}
/**
 * A collection of values returned by getZeroTrustDlpSensitivityGroup.
 */
export interface GetZeroTrustDlpSensitivityGroupResult {
    readonly accountId: string;
    readonly createdAt: string;
    readonly description: string;
    /**
     * The ID of this resource.
     */
    readonly id: string;
    readonly levels: outputs.GetZeroTrustDlpSensitivityGroupLevel[];
    readonly name: string;
    readonly sensitivityGroupId: string;
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
 * const exampleZeroTrustDlpSensitivityGroup = cloudflare.getZeroTrustDlpSensitivityGroup({
 *     accountId: "account_id",
 *     sensitivityGroupId: "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
 * });
 * ```
 */
export declare function getZeroTrustDlpSensitivityGroupOutput(args: GetZeroTrustDlpSensitivityGroupOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetZeroTrustDlpSensitivityGroupResult>;
/**
 * A collection of arguments for invoking getZeroTrustDlpSensitivityGroup.
 */
export interface GetZeroTrustDlpSensitivityGroupOutputArgs {
    accountId: pulumi.Input<string>;
    sensitivityGroupId: pulumi.Input<string>;
}
//# sourceMappingURL=getZeroTrustDlpSensitivityGroup.d.ts.map