import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
/**
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as cloudflare from "@pulumi/cloudflare";
 *
 * const exampleShareResources = cloudflare.getShareResources({
 *     accountId: "023e105f4ecef8ad9ca31a8372d0c353",
 *     shareId: "3fd85f74b32742f1bff64a85009dda07",
 *     resourceType: "custom-ruleset",
 *     status: "active",
 * });
 * ```
 */
export declare function getShareResources(args: GetShareResourcesArgs, opts?: pulumi.InvokeOptions): Promise<GetShareResourcesResult>;
/**
 * A collection of arguments for invoking getShareResources.
 */
export interface GetShareResourcesArgs {
    /**
     * Account identifier.
     */
    accountId: string;
    /**
     * Max items to fetch, default: 1000
     */
    maxItems?: number;
    /**
     * Filter share resources by resource_type.
     * Available values: "custom-ruleset", "gateway-policy", "gateway-destination-ip", "gateway-block-page-settings", "gateway-extended-email-matching", "idp-federation-grant".
     */
    resourceType?: string;
    /**
     * Share identifier tag.
     */
    shareId: string;
    /**
     * Filter share resources by status.
     * Available values: "active", "deleting", "deleted".
     */
    status?: string;
}
/**
 * A collection of values returned by getShareResources.
 */
export interface GetShareResourcesResult {
    /**
     * Account identifier.
     */
    readonly accountId: string;
    /**
     * Max items to fetch, default: 1000
     */
    readonly maxItems?: number;
    /**
     * Filter share resources by resource_type.
     * Available values: "custom-ruleset", "gateway-policy", "gateway-destination-ip", "gateway-block-page-settings", "gateway-extended-email-matching", "idp-federation-grant".
     */
    readonly resourceType?: string;
    /**
     * The items returned by the data source
     */
    readonly results: outputs.GetShareResourcesResult[];
    /**
     * Share identifier tag.
     */
    readonly shareId: string;
    /**
     * Filter share resources by status.
     * Available values: "active", "deleting", "deleted".
     */
    readonly status?: string;
}
/**
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as cloudflare from "@pulumi/cloudflare";
 *
 * const exampleShareResources = cloudflare.getShareResources({
 *     accountId: "023e105f4ecef8ad9ca31a8372d0c353",
 *     shareId: "3fd85f74b32742f1bff64a85009dda07",
 *     resourceType: "custom-ruleset",
 *     status: "active",
 * });
 * ```
 */
export declare function getShareResourcesOutput(args: GetShareResourcesOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetShareResourcesResult>;
/**
 * A collection of arguments for invoking getShareResources.
 */
export interface GetShareResourcesOutputArgs {
    /**
     * Account identifier.
     */
    accountId: pulumi.Input<string>;
    /**
     * Max items to fetch, default: 1000
     */
    maxItems?: pulumi.Input<number | undefined>;
    /**
     * Filter share resources by resource_type.
     * Available values: "custom-ruleset", "gateway-policy", "gateway-destination-ip", "gateway-block-page-settings", "gateway-extended-email-matching", "idp-federation-grant".
     */
    resourceType?: pulumi.Input<string | undefined>;
    /**
     * Share identifier tag.
     */
    shareId: pulumi.Input<string>;
    /**
     * Filter share resources by status.
     * Available values: "active", "deleting", "deleted".
     */
    status?: pulumi.Input<string | undefined>;
}
//# sourceMappingURL=getShareResources.d.ts.map