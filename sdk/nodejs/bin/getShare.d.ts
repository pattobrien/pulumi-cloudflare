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
 * const exampleShare = cloudflare.getShare({
 *     accountId: "023e105f4ecef8ad9ca31a8372d0c353",
 *     shareId: "3fd85f74b32742f1bff64a85009dda07",
 *     includeRecipientCounts: true,
 *     includeResources: true,
 * });
 * ```
 */
export declare function getShare(args: GetShareArgs, opts?: pulumi.InvokeOptions): Promise<GetShareResult>;
/**
 * A collection of arguments for invoking getShare.
 */
export interface GetShareArgs {
    /**
     * Account identifier.
     */
    accountId: string;
    filter?: inputs.GetShareFilter;
    /**
     * Include recipient counts in the response.
     */
    includeRecipientCounts?: boolean;
    /**
     * Include resources in the response.
     */
    includeResources?: boolean;
    /**
     * Share identifier tag.
     */
    shareId?: string;
}
/**
 * A collection of values returned by getShare.
 */
export interface GetShareResult {
    /**
     * Account identifier.
     */
    readonly accountId: string;
    /**
     * The display name of an account.
     */
    readonly accountName: string;
    /**
     * The number of recipients in the 'associated' state. This field is only included when requested via the 'include*recipient*counts' parameter.
     */
    readonly associatedRecipientCount: number;
    /**
     * The number of recipients in the 'associating' state. This field is only included when requested via the 'include*recipient*counts' parameter.
     */
    readonly associatingRecipientCount: number;
    /**
     * When the share was created.
     */
    readonly created: string;
    /**
     * The number of recipients in the 'disassociated' state. This field is only included when requested via the 'include*recipient*counts' parameter.
     */
    readonly disassociatedRecipientCount: number;
    /**
     * The number of recipients in the 'disassociating' state. This field is only included when requested via the 'include*recipient*counts' parameter.
     */
    readonly disassociatingRecipientCount: number;
    readonly filter?: outputs.GetShareFilter;
    /**
     * Share identifier tag.
     */
    readonly id: string;
    /**
     * Include recipient counts in the response.
     */
    readonly includeRecipientCounts?: boolean;
    /**
     * Include resources in the response.
     */
    readonly includeResources?: boolean;
    /**
     * Available values: "sent", "received".
     */
    readonly kind: string;
    /**
     * When the share was modified.
     */
    readonly modified: string;
    /**
     * The name of the share.
     */
    readonly name: string;
    /**
     * Organization identifier.
     */
    readonly organizationId: string;
    /**
     * A list of resources that are part of the share. This field is only included when requested via the 'include_resources' parameter.
     */
    readonly resources: outputs.GetShareResource[];
    /**
     * Share identifier tag.
     */
    readonly shareId?: string;
    /**
     * Available values: "active", "deleting", "deleted".
     */
    readonly status: string;
    /**
     * Available values: "account", "organization".
     */
    readonly targetType: string;
}
/**
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as cloudflare from "@pulumi/cloudflare";
 *
 * const exampleShare = cloudflare.getShare({
 *     accountId: "023e105f4ecef8ad9ca31a8372d0c353",
 *     shareId: "3fd85f74b32742f1bff64a85009dda07",
 *     includeRecipientCounts: true,
 *     includeResources: true,
 * });
 * ```
 */
export declare function getShareOutput(args: GetShareOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetShareResult>;
/**
 * A collection of arguments for invoking getShare.
 */
export interface GetShareOutputArgs {
    /**
     * Account identifier.
     */
    accountId: pulumi.Input<string>;
    filter?: pulumi.Input<inputs.GetShareFilterArgs | undefined>;
    /**
     * Include recipient counts in the response.
     */
    includeRecipientCounts?: pulumi.Input<boolean | undefined>;
    /**
     * Include resources in the response.
     */
    includeResources?: pulumi.Input<boolean | undefined>;
    /**
     * Share identifier tag.
     */
    shareId?: pulumi.Input<string | undefined>;
}
//# sourceMappingURL=getShare.d.ts.map