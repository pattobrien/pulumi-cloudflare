import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
/**
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as cloudflare from "@pulumi/cloudflare";
 *
 * const exampleShares = cloudflare.getShares({
 *     accountId: "023e105f4ecef8ad9ca31a8372d0c353",
 *     includeRecipientCounts: true,
 *     includeResources: true,
 *     kind: "sent",
 *     resourceTypes: ["custom-ruleset"],
 *     status: "active",
 *     tags: ["env=production"],
 *     targetType: "account",
 * });
 * ```
 */
export declare function getShares(args: GetSharesArgs, opts?: pulumi.InvokeOptions): Promise<GetSharesResult>;
/**
 * A collection of arguments for invoking getShares.
 */
export interface GetSharesArgs {
    /**
     * Account identifier.
     */
    accountId: string;
    /**
     * Direction to sort objects.
     * Available values: "asc", "desc".
     */
    direction?: string;
    /**
     * Include recipient counts in the response.
     */
    includeRecipientCounts?: boolean;
    /**
     * Include resources in the response.
     */
    includeResources?: boolean;
    /**
     * Filter shares by kind.
     * Available values: "sent", "received".
     */
    kind?: string;
    /**
     * Max items to fetch, default: 1000
     */
    maxItems?: number;
    /**
     * Order shares by values in the given field.
     * Available values: "name", "created".
     */
    order?: string;
    /**
     * Filter share resources by resource_types.
     */
    resourceTypes?: string[];
    /**
     * Filter shares by status.
     * Available values: "active", "deleting", "deleted".
     */
    status?: string;
    /**
     * Filter shares by tag. Each value is either `key=value` (matches shares whose tags contain that key/value pair) or `key` alone (matches shares that have any value for that key). May be repeated; multiple `tag` parameters are ANDed together. Maximum 20 `tag` parameters per request.
     */
    tags?: string[];
    /**
     * Filter shares by target_type.
     * Available values: "account", "organization".
     */
    targetType?: string;
}
/**
 * A collection of values returned by getShares.
 */
export interface GetSharesResult {
    /**
     * Account identifier.
     */
    readonly accountId: string;
    /**
     * Direction to sort objects.
     * Available values: "asc", "desc".
     */
    readonly direction: string;
    /**
     * Include recipient counts in the response.
     */
    readonly includeRecipientCounts?: boolean;
    /**
     * Include resources in the response.
     */
    readonly includeResources?: boolean;
    /**
     * Filter shares by kind.
     * Available values: "sent", "received".
     */
    readonly kind?: string;
    /**
     * Max items to fetch, default: 1000
     */
    readonly maxItems?: number;
    /**
     * Order shares by values in the given field.
     * Available values: "name", "created".
     */
    readonly order: string;
    /**
     * Filter share resources by resource_types.
     */
    readonly resourceTypes?: string[];
    /**
     * The items returned by the data source
     */
    readonly results: outputs.GetSharesResult[];
    /**
     * Filter shares by status.
     * Available values: "active", "deleting", "deleted".
     */
    readonly status?: string;
    /**
     * Filter shares by tag. Each value is either `key=value` (matches shares whose tags contain that key/value pair) or `key` alone (matches shares that have any value for that key). May be repeated; multiple `tag` parameters are ANDed together. Maximum 20 `tag` parameters per request.
     */
    readonly tags?: string[];
    /**
     * Filter shares by target_type.
     * Available values: "account", "organization".
     */
    readonly targetType?: string;
}
/**
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as cloudflare from "@pulumi/cloudflare";
 *
 * const exampleShares = cloudflare.getShares({
 *     accountId: "023e105f4ecef8ad9ca31a8372d0c353",
 *     includeRecipientCounts: true,
 *     includeResources: true,
 *     kind: "sent",
 *     resourceTypes: ["custom-ruleset"],
 *     status: "active",
 *     tags: ["env=production"],
 *     targetType: "account",
 * });
 * ```
 */
export declare function getSharesOutput(args: GetSharesOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSharesResult>;
/**
 * A collection of arguments for invoking getShares.
 */
export interface GetSharesOutputArgs {
    /**
     * Account identifier.
     */
    accountId: pulumi.Input<string>;
    /**
     * Direction to sort objects.
     * Available values: "asc", "desc".
     */
    direction?: pulumi.Input<string | undefined>;
    /**
     * Include recipient counts in the response.
     */
    includeRecipientCounts?: pulumi.Input<boolean | undefined>;
    /**
     * Include resources in the response.
     */
    includeResources?: pulumi.Input<boolean | undefined>;
    /**
     * Filter shares by kind.
     * Available values: "sent", "received".
     */
    kind?: pulumi.Input<string | undefined>;
    /**
     * Max items to fetch, default: 1000
     */
    maxItems?: pulumi.Input<number | undefined>;
    /**
     * Order shares by values in the given field.
     * Available values: "name", "created".
     */
    order?: pulumi.Input<string | undefined>;
    /**
     * Filter share resources by resource_types.
     */
    resourceTypes?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * Filter shares by status.
     * Available values: "active", "deleting", "deleted".
     */
    status?: pulumi.Input<string | undefined>;
    /**
     * Filter shares by tag. Each value is either `key=value` (matches shares whose tags contain that key/value pair) or `key` alone (matches shares that have any value for that key). May be repeated; multiple `tag` parameters are ANDed together. Maximum 20 `tag` parameters per request.
     */
    tags?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * Filter shares by target_type.
     * Available values: "account", "organization".
     */
    targetType?: pulumi.Input<string | undefined>;
}
//# sourceMappingURL=getShares.d.ts.map