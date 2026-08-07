import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
/**
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as cloudflare from "@pulumi/cloudflare";
 *
 * const exampleShareRecipients = cloudflare.getShareRecipients({
 *     accountId: "023e105f4ecef8ad9ca31a8372d0c353",
 *     shareId: "3fd85f74b32742f1bff64a85009dda07",
 *     includeResources: true,
 * });
 * ```
 */
export declare function getShareRecipients(args: GetShareRecipientsArgs, opts?: pulumi.InvokeOptions): Promise<GetShareRecipientsResult>;
/**
 * A collection of arguments for invoking getShareRecipients.
 */
export interface GetShareRecipientsArgs {
    /**
     * Account identifier.
     */
    accountId: string;
    /**
     * Include resources in the response.
     */
    includeResources?: boolean;
    /**
     * Max items to fetch, default: 1000
     */
    maxItems?: number;
    /**
     * Share identifier tag.
     */
    shareId: string;
}
/**
 * A collection of values returned by getShareRecipients.
 */
export interface GetShareRecipientsResult {
    /**
     * Account identifier.
     */
    readonly accountId: string;
    /**
     * Include resources in the response.
     */
    readonly includeResources?: boolean;
    /**
     * Max items to fetch, default: 1000
     */
    readonly maxItems?: number;
    /**
     * The items returned by the data source
     */
    readonly results: outputs.GetShareRecipientsResult[];
    /**
     * Share identifier tag.
     */
    readonly shareId: string;
}
/**
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as cloudflare from "@pulumi/cloudflare";
 *
 * const exampleShareRecipients = cloudflare.getShareRecipients({
 *     accountId: "023e105f4ecef8ad9ca31a8372d0c353",
 *     shareId: "3fd85f74b32742f1bff64a85009dda07",
 *     includeResources: true,
 * });
 * ```
 */
export declare function getShareRecipientsOutput(args: GetShareRecipientsOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetShareRecipientsResult>;
/**
 * A collection of arguments for invoking getShareRecipients.
 */
export interface GetShareRecipientsOutputArgs {
    /**
     * Account identifier.
     */
    accountId: pulumi.Input<string>;
    /**
     * Include resources in the response.
     */
    includeResources?: pulumi.Input<boolean | undefined>;
    /**
     * Max items to fetch, default: 1000
     */
    maxItems?: pulumi.Input<number | undefined>;
    /**
     * Share identifier tag.
     */
    shareId: pulumi.Input<string>;
}
//# sourceMappingURL=getShareRecipients.d.ts.map