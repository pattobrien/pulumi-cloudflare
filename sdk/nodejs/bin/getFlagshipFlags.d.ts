import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
/**
 * Accepted Permissions
 *
 * - `Flagship Read`
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as cloudflare from "@pulumi/cloudflare";
 *
 * const exampleFlagshipFlags = cloudflare.getFlagshipFlags({
 *     accountId: "account_id",
 *     appId: "app_id",
 *     limit: "limit",
 * });
 * ```
 */
export declare function getFlagshipFlags(args: GetFlagshipFlagsArgs, opts?: pulumi.InvokeOptions): Promise<GetFlagshipFlagsResult>;
/**
 * A collection of arguments for invoking getFlagshipFlags.
 */
export interface GetFlagshipFlagsArgs {
    /**
     * Cloudflare account ID.
     */
    accountId: string;
    /**
     * App identifier.
     */
    appId: string;
    /**
     * Max items to return (1–200).
     */
    limit?: string;
    /**
     * Max items to fetch, default: 1000
     */
    maxItems?: number;
}
/**
 * A collection of values returned by getFlagshipFlags.
 */
export interface GetFlagshipFlagsResult {
    /**
     * Cloudflare account ID.
     */
    readonly accountId: string;
    /**
     * App identifier.
     */
    readonly appId: string;
    /**
     * Max items to return (1–200).
     */
    readonly limit?: string;
    /**
     * Max items to fetch, default: 1000
     */
    readonly maxItems?: number;
    /**
     * The items returned by the data source
     */
    readonly results: outputs.GetFlagshipFlagsResult[];
}
/**
 * Accepted Permissions
 *
 * - `Flagship Read`
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as cloudflare from "@pulumi/cloudflare";
 *
 * const exampleFlagshipFlags = cloudflare.getFlagshipFlags({
 *     accountId: "account_id",
 *     appId: "app_id",
 *     limit: "limit",
 * });
 * ```
 */
export declare function getFlagshipFlagsOutput(args: GetFlagshipFlagsOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetFlagshipFlagsResult>;
/**
 * A collection of arguments for invoking getFlagshipFlags.
 */
export interface GetFlagshipFlagsOutputArgs {
    /**
     * Cloudflare account ID.
     */
    accountId: pulumi.Input<string>;
    /**
     * App identifier.
     */
    appId: pulumi.Input<string>;
    /**
     * Max items to return (1–200).
     */
    limit?: pulumi.Input<string | undefined>;
    /**
     * Max items to fetch, default: 1000
     */
    maxItems?: pulumi.Input<number | undefined>;
}
//# sourceMappingURL=getFlagshipFlags.d.ts.map