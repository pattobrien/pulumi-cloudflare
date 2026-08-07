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
 * const exampleFlagshipApps = cloudflare.getFlagshipApps({
 *     accountId: "account_id",
 * });
 * ```
 */
export declare function getFlagshipApps(args: GetFlagshipAppsArgs, opts?: pulumi.InvokeOptions): Promise<GetFlagshipAppsResult>;
/**
 * A collection of arguments for invoking getFlagshipApps.
 */
export interface GetFlagshipAppsArgs {
    /**
     * Cloudflare account ID.
     */
    accountId: string;
    /**
     * Max items to fetch, default: 1000
     */
    maxItems?: number;
}
/**
 * A collection of values returned by getFlagshipApps.
 */
export interface GetFlagshipAppsResult {
    /**
     * Cloudflare account ID.
     */
    readonly accountId: string;
    /**
     * Max items to fetch, default: 1000
     */
    readonly maxItems?: number;
    /**
     * The items returned by the data source
     */
    readonly results: outputs.GetFlagshipAppsResult[];
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
 * const exampleFlagshipApps = cloudflare.getFlagshipApps({
 *     accountId: "account_id",
 * });
 * ```
 */
export declare function getFlagshipAppsOutput(args: GetFlagshipAppsOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetFlagshipAppsResult>;
/**
 * A collection of arguments for invoking getFlagshipApps.
 */
export interface GetFlagshipAppsOutputArgs {
    /**
     * Cloudflare account ID.
     */
    accountId: pulumi.Input<string>;
    /**
     * Max items to fetch, default: 1000
     */
    maxItems?: pulumi.Input<number | undefined>;
}
//# sourceMappingURL=getFlagshipApps.d.ts.map