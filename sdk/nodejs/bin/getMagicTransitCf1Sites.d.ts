import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
/**
 * Accepted Permissions
 *
 * - `Magic Transit Read`
 * - `Magic Transit Write`
 * - `Magic WAN Read`
 * - `Magic WAN Write`
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as cloudflare from "@pulumi/cloudflare";
 *
 * const exampleMagicTransitCf1Sites = cloudflare.getMagicTransitCf1Sites({
 *     accountId: "023e105f4ecef8ad9ca31a8372d0c353",
 * });
 * ```
 */
export declare function getMagicTransitCf1Sites(args: GetMagicTransitCf1SitesArgs, opts?: pulumi.InvokeOptions): Promise<GetMagicTransitCf1SitesResult>;
/**
 * A collection of arguments for invoking getMagicTransitCf1Sites.
 */
export interface GetMagicTransitCf1SitesArgs {
    /**
     * Identifier
     */
    accountId: string;
    /**
     * Max items to fetch, default: 1000
     */
    maxItems?: number;
}
/**
 * A collection of values returned by getMagicTransitCf1Sites.
 */
export interface GetMagicTransitCf1SitesResult {
    /**
     * Identifier
     */
    readonly accountId: string;
    /**
     * Max items to fetch, default: 1000
     */
    readonly maxItems?: number;
    /**
     * The items returned by the data source
     */
    readonly results: outputs.GetMagicTransitCf1SitesResult[];
}
/**
 * Accepted Permissions
 *
 * - `Magic Transit Read`
 * - `Magic Transit Write`
 * - `Magic WAN Read`
 * - `Magic WAN Write`
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as cloudflare from "@pulumi/cloudflare";
 *
 * const exampleMagicTransitCf1Sites = cloudflare.getMagicTransitCf1Sites({
 *     accountId: "023e105f4ecef8ad9ca31a8372d0c353",
 * });
 * ```
 */
export declare function getMagicTransitCf1SitesOutput(args: GetMagicTransitCf1SitesOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetMagicTransitCf1SitesResult>;
/**
 * A collection of arguments for invoking getMagicTransitCf1Sites.
 */
export interface GetMagicTransitCf1SitesOutputArgs {
    /**
     * Identifier
     */
    accountId: pulumi.Input<string>;
    /**
     * Max items to fetch, default: 1000
     */
    maxItems?: pulumi.Input<number | undefined>;
}
//# sourceMappingURL=getMagicTransitCf1Sites.d.ts.map