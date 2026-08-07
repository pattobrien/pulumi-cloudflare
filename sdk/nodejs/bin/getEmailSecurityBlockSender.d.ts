import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
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
 * const exampleEmailSecurityBlockSender = cloudflare.getEmailSecurityBlockSender({
 *     accountId: "023e105f4ecef8ad9ca31a8372d0c353",
 *     patternId: "2402",
 * });
 * ```
 */
export declare function getEmailSecurityBlockSender(args?: GetEmailSecurityBlockSenderArgs, opts?: pulumi.InvokeOptions): Promise<GetEmailSecurityBlockSenderResult>;
/**
 * A collection of arguments for invoking getEmailSecurityBlockSender.
 */
export interface GetEmailSecurityBlockSenderArgs {
    accountId?: string;
    filter?: inputs.GetEmailSecurityBlockSenderFilter;
    patternId?: string;
}
/**
 * A collection of values returned by getEmailSecurityBlockSender.
 */
export interface GetEmailSecurityBlockSenderResult {
    readonly accountId?: string;
    readonly comments: string;
    readonly createdAt: string;
    readonly filter?: outputs.GetEmailSecurityBlockSenderFilter;
    readonly id: string;
    readonly isRegex: boolean;
    /**
     * @deprecated Use `modifiedAt` instead.
     */
    readonly lastModified: string;
    readonly modifiedAt: string;
    readonly pattern: string;
    readonly patternId?: string;
    readonly patternType: string;
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
 * const exampleEmailSecurityBlockSender = cloudflare.getEmailSecurityBlockSender({
 *     accountId: "023e105f4ecef8ad9ca31a8372d0c353",
 *     patternId: "2402",
 * });
 * ```
 */
export declare function getEmailSecurityBlockSenderOutput(args?: GetEmailSecurityBlockSenderOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetEmailSecurityBlockSenderResult>;
/**
 * A collection of arguments for invoking getEmailSecurityBlockSender.
 */
export interface GetEmailSecurityBlockSenderOutputArgs {
    accountId?: pulumi.Input<string | undefined>;
    filter?: pulumi.Input<inputs.GetEmailSecurityBlockSenderFilterArgs | undefined>;
    patternId?: pulumi.Input<string | undefined>;
}
//# sourceMappingURL=getEmailSecurityBlockSender.d.ts.map