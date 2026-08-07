import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getMoqRelays(args: GetMoqRelaysArgs, opts?: pulumi.InvokeOptions): Promise<GetMoqRelaysResult>;
/**
 * A collection of arguments for invoking getMoqRelays.
 */
export interface GetMoqRelaysArgs {
    /**
     * Cloudflare account identifier.
     */
    accountId: string;
    /**
     * Sort order by `created`. When true, results are returned oldest-first
     * (ascending); otherwise newest-first (descending, the default).
     */
    asc?: boolean;
    /**
     * Cursor for pagination. Returns relays created strictly after this
     * RFC 3339 timestamp (typically the `created` value of the last item
     * on the current page, to fetch the next page).
     */
    createdAfter?: string;
    /**
     * Cursor for pagination. Returns relays created strictly before this
     * RFC 3339 timestamp (typically the `created` value of the first item
     * on the current page, to fetch the previous page).
     */
    createdBefore?: string;
    /**
     * Max items to fetch, default: 1000
     */
    maxItems?: number;
    /**
     * Maximum number of relays to return per page.
     */
    perPage?: number;
}
/**
 * A collection of values returned by getMoqRelays.
 */
export interface GetMoqRelaysResult {
    /**
     * Cloudflare account identifier.
     */
    readonly accountId: string;
    /**
     * Sort order by `created`. When true, results are returned oldest-first
     * (ascending); otherwise newest-first (descending, the default).
     */
    readonly asc: boolean;
    /**
     * Cursor for pagination. Returns relays created strictly after this
     * RFC 3339 timestamp (typically the `created` value of the last item
     * on the current page, to fetch the next page).
     */
    readonly createdAfter?: string;
    /**
     * Cursor for pagination. Returns relays created strictly before this
     * RFC 3339 timestamp (typically the `created` value of the first item
     * on the current page, to fetch the previous page).
     */
    readonly createdBefore?: string;
    /**
     * Max items to fetch, default: 1000
     */
    readonly maxItems?: number;
    /**
     * Maximum number of relays to return per page.
     */
    readonly perPage?: number;
    /**
     * The items returned by the data source
     */
    readonly results: outputs.GetMoqRelaysResult[];
}
export declare function getMoqRelaysOutput(args: GetMoqRelaysOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetMoqRelaysResult>;
/**
 * A collection of arguments for invoking getMoqRelays.
 */
export interface GetMoqRelaysOutputArgs {
    /**
     * Cloudflare account identifier.
     */
    accountId: pulumi.Input<string>;
    /**
     * Sort order by `created`. When true, results are returned oldest-first
     * (ascending); otherwise newest-first (descending, the default).
     */
    asc?: pulumi.Input<boolean | undefined>;
    /**
     * Cursor for pagination. Returns relays created strictly after this
     * RFC 3339 timestamp (typically the `created` value of the last item
     * on the current page, to fetch the next page).
     */
    createdAfter?: pulumi.Input<string | undefined>;
    /**
     * Cursor for pagination. Returns relays created strictly before this
     * RFC 3339 timestamp (typically the `created` value of the first item
     * on the current page, to fetch the previous page).
     */
    createdBefore?: pulumi.Input<string | undefined>;
    /**
     * Max items to fetch, default: 1000
     */
    maxItems?: pulumi.Input<number | undefined>;
    /**
     * Maximum number of relays to return per page.
     */
    perPage?: pulumi.Input<number | undefined>;
}
//# sourceMappingURL=getMoqRelays.d.ts.map