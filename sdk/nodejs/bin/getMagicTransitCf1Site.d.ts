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
 * const exampleMagicTransitCf1Site = cloudflare.getMagicTransitCf1Site({
 *     accountId: "023e105f4ecef8ad9ca31a8372d0c353",
 *     cf1SiteId: "023e105f4ecef8ad9ca31a8372d0c353",
 * });
 * ```
 */
export declare function getMagicTransitCf1Site(args: GetMagicTransitCf1SiteArgs, opts?: pulumi.InvokeOptions): Promise<GetMagicTransitCf1SiteResult>;
/**
 * A collection of arguments for invoking getMagicTransitCf1Site.
 */
export interface GetMagicTransitCf1SiteArgs {
    /**
     * Identifier
     */
    accountId: string;
    /**
     * Identifier
     */
    cf1SiteId: string;
}
/**
 * A collection of values returned by getMagicTransitCf1Site.
 */
export interface GetMagicTransitCf1SiteResult {
    /**
     * Identifier
     */
    readonly accountId: string;
    /**
     * Identifier
     */
    readonly cf1SiteId: string;
    readonly createdOn: string;
    /**
     * A human-provided description of the CF1 Site.
     */
    readonly description: string;
    /**
     * Identifier
     */
    readonly id: string;
    readonly location: outputs.GetMagicTransitCf1SiteLocation;
    readonly modifiedOn: string;
    /**
     * A human-provided name describing the CF1 Site that should be unique within the account.
     */
    readonly name: string;
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
 * const exampleMagicTransitCf1Site = cloudflare.getMagicTransitCf1Site({
 *     accountId: "023e105f4ecef8ad9ca31a8372d0c353",
 *     cf1SiteId: "023e105f4ecef8ad9ca31a8372d0c353",
 * });
 * ```
 */
export declare function getMagicTransitCf1SiteOutput(args: GetMagicTransitCf1SiteOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetMagicTransitCf1SiteResult>;
/**
 * A collection of arguments for invoking getMagicTransitCf1Site.
 */
export interface GetMagicTransitCf1SiteOutputArgs {
    /**
     * Identifier
     */
    accountId: pulumi.Input<string>;
    /**
     * Identifier
     */
    cf1SiteId: pulumi.Input<string>;
}
//# sourceMappingURL=getMagicTransitCf1Site.d.ts.map