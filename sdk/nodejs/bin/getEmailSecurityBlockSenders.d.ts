import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
/**
 * Accepted Permissions
 *
 * - `Cloud Email Security: Read`
 * - `Cloud Email Security: Write`
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as cloudflare from "@pulumi/cloudflare";
 *
 * const exampleEmailSecurityBlockSenders = cloudflare.getEmailSecurityBlockSenders({
 *     accountId: "023e105f4ecef8ad9ca31a8372d0c353",
 *     direction: "asc",
 *     order: "pattern",
 *     pattern: "pattern",
 *     patternType: "EMAIL",
 *     search: "search",
 * });
 * ```
 */
export declare function getEmailSecurityBlockSenders(args?: GetEmailSecurityBlockSendersArgs, opts?: pulumi.InvokeOptions): Promise<GetEmailSecurityBlockSendersResult>;
/**
 * A collection of arguments for invoking getEmailSecurityBlockSenders.
 */
export interface GetEmailSecurityBlockSendersArgs {
    accountId?: string;
    direction?: string;
    maxItems?: number;
    order?: string;
    pattern?: string;
    patternType?: string;
    search?: string;
}
/**
 * A collection of values returned by getEmailSecurityBlockSenders.
 */
export interface GetEmailSecurityBlockSendersResult {
    readonly accountId?: string;
    readonly direction?: string;
    readonly maxItems?: number;
    readonly order?: string;
    readonly pattern?: string;
    readonly patternType?: string;
    readonly results: outputs.GetEmailSecurityBlockSendersResult[];
    readonly search?: string;
}
/**
 * Accepted Permissions
 *
 * - `Cloud Email Security: Read`
 * - `Cloud Email Security: Write`
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as cloudflare from "@pulumi/cloudflare";
 *
 * const exampleEmailSecurityBlockSenders = cloudflare.getEmailSecurityBlockSenders({
 *     accountId: "023e105f4ecef8ad9ca31a8372d0c353",
 *     direction: "asc",
 *     order: "pattern",
 *     pattern: "pattern",
 *     patternType: "EMAIL",
 *     search: "search",
 * });
 * ```
 */
export declare function getEmailSecurityBlockSendersOutput(args?: GetEmailSecurityBlockSendersOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetEmailSecurityBlockSendersResult>;
/**
 * A collection of arguments for invoking getEmailSecurityBlockSenders.
 */
export interface GetEmailSecurityBlockSendersOutputArgs {
    accountId?: pulumi.Input<string | undefined>;
    direction?: pulumi.Input<string | undefined>;
    maxItems?: pulumi.Input<number | undefined>;
    order?: pulumi.Input<string | undefined>;
    pattern?: pulumi.Input<string | undefined>;
    patternType?: pulumi.Input<string | undefined>;
    search?: pulumi.Input<string | undefined>;
}
//# sourceMappingURL=getEmailSecurityBlockSenders.d.ts.map