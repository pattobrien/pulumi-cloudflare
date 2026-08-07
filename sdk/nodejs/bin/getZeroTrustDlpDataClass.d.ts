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
 * const exampleZeroTrustDlpDataClass = cloudflare.getZeroTrustDlpDataClass({
 *     accountId: "account_id",
 *     dataClassId: "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
 * });
 * ```
 */
export declare function getZeroTrustDlpDataClass(args: GetZeroTrustDlpDataClassArgs, opts?: pulumi.InvokeOptions): Promise<GetZeroTrustDlpDataClassResult>;
/**
 * A collection of arguments for invoking getZeroTrustDlpDataClass.
 */
export interface GetZeroTrustDlpDataClassArgs {
    accountId: string;
    dataClassId: string;
}
/**
 * A collection of values returned by getZeroTrustDlpDataClass.
 */
export interface GetZeroTrustDlpDataClassResult {
    readonly accountId: string;
    readonly createdAt: string;
    readonly dataClassId: string;
    readonly dataTags: string[];
    readonly description: string;
    readonly expression: string;
    /**
     * The ID of this resource.
     */
    readonly id: string;
    readonly name: string;
    readonly sensitivityLevels: outputs.GetZeroTrustDlpDataClassSensitivityLevel[];
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
 * const exampleZeroTrustDlpDataClass = cloudflare.getZeroTrustDlpDataClass({
 *     accountId: "account_id",
 *     dataClassId: "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
 * });
 * ```
 */
export declare function getZeroTrustDlpDataClassOutput(args: GetZeroTrustDlpDataClassOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetZeroTrustDlpDataClassResult>;
/**
 * A collection of arguments for invoking getZeroTrustDlpDataClass.
 */
export interface GetZeroTrustDlpDataClassOutputArgs {
    accountId: pulumi.Input<string>;
    dataClassId: pulumi.Input<string>;
}
//# sourceMappingURL=getZeroTrustDlpDataClass.d.ts.map