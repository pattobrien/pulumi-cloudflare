import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
/**
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as cloudflare from "@pulumi/cloudflare";
 *
 * const exampleShareResource = cloudflare.getShareResource({
 *     accountId: "023e105f4ecef8ad9ca31a8372d0c353",
 *     shareId: "3fd85f74b32742f1bff64a85009dda07",
 *     shareResourceId: "023e105f4ecef8ad9ca31a8372d0c353",
 * });
 * ```
 */
export declare function getShareResource(args: GetShareResourceArgs, opts?: pulumi.InvokeOptions): Promise<GetShareResourceResult>;
/**
 * A collection of arguments for invoking getShareResource.
 */
export interface GetShareResourceArgs {
    /**
     * Account identifier.
     */
    accountId: string;
    filter?: inputs.GetShareResourceFilter;
    /**
     * Share identifier tag.
     */
    shareId: string;
    /**
     * Share Resource identifier.
     */
    shareResourceId?: string;
}
/**
 * A collection of values returned by getShareResource.
 */
export interface GetShareResourceResult {
    /**
     * Account identifier.
     */
    readonly accountId: string;
    /**
     * When the share was created.
     */
    readonly created: string;
    readonly filter?: outputs.GetShareResourceFilter;
    /**
     * Share Resource identifier.
     */
    readonly id: string;
    /**
     * Resource Metadata.
     */
    readonly meta: string;
    /**
     * When the share was modified.
     */
    readonly modified: string;
    /**
     * Account identifier.
     */
    readonly resourceAccountId: string;
    /**
     * Share Resource identifier.
     */
    readonly resourceId: string;
    /**
     * Resource Type.
     * Available values: "custom-ruleset", "gateway-policy", "gateway-destination-ip", "gateway-block-page-settings", "gateway-extended-email-matching", "idp-federation-grant".
     */
    readonly resourceType: string;
    /**
     * Resource Version.
     */
    readonly resourceVersion: number;
    /**
     * Share identifier tag.
     */
    readonly shareId: string;
    /**
     * Share Resource identifier.
     */
    readonly shareResourceId?: string;
    /**
     * Resource Status.
     * Available values: "active", "deleting", "deleted".
     */
    readonly status: string;
}
/**
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as cloudflare from "@pulumi/cloudflare";
 *
 * const exampleShareResource = cloudflare.getShareResource({
 *     accountId: "023e105f4ecef8ad9ca31a8372d0c353",
 *     shareId: "3fd85f74b32742f1bff64a85009dda07",
 *     shareResourceId: "023e105f4ecef8ad9ca31a8372d0c353",
 * });
 * ```
 */
export declare function getShareResourceOutput(args: GetShareResourceOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetShareResourceResult>;
/**
 * A collection of arguments for invoking getShareResource.
 */
export interface GetShareResourceOutputArgs {
    /**
     * Account identifier.
     */
    accountId: pulumi.Input<string>;
    filter?: pulumi.Input<inputs.GetShareResourceFilterArgs | undefined>;
    /**
     * Share identifier tag.
     */
    shareId: pulumi.Input<string>;
    /**
     * Share Resource identifier.
     */
    shareResourceId?: pulumi.Input<string | undefined>;
}
//# sourceMappingURL=getShareResource.d.ts.map