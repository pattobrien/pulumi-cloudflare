import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
/**
 * Accepted Permissions
 *
 * - `OAuth Client Read`
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as cloudflare from "@pulumi/cloudflare";
 *
 * const exampleOauthClients = cloudflare.getOauthClients({
 *     accountId: "023e105f4ecef8ad9ca31a8372d0c353",
 * });
 * ```
 */
export declare function getOauthClients(args: GetOauthClientsArgs, opts?: pulumi.InvokeOptions): Promise<GetOauthClientsResult>;
/**
 * A collection of arguments for invoking getOauthClients.
 */
export interface GetOauthClientsArgs {
    /**
     * Account identifier tag.
     */
    accountId: string;
    /**
     * Max items to fetch, default: 1000
     */
    maxItems?: number;
}
/**
 * A collection of values returned by getOauthClients.
 */
export interface GetOauthClientsResult {
    /**
     * Account identifier tag.
     */
    readonly accountId: string;
    /**
     * Max items to fetch, default: 1000
     */
    readonly maxItems?: number;
    /**
     * The items returned by the data source
     */
    readonly results: outputs.GetOauthClientsResult[];
}
/**
 * Accepted Permissions
 *
 * - `OAuth Client Read`
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as cloudflare from "@pulumi/cloudflare";
 *
 * const exampleOauthClients = cloudflare.getOauthClients({
 *     accountId: "023e105f4ecef8ad9ca31a8372d0c353",
 * });
 * ```
 */
export declare function getOauthClientsOutput(args: GetOauthClientsOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetOauthClientsResult>;
/**
 * A collection of arguments for invoking getOauthClients.
 */
export interface GetOauthClientsOutputArgs {
    /**
     * Account identifier tag.
     */
    accountId: pulumi.Input<string>;
    /**
     * Max items to fetch, default: 1000
     */
    maxItems?: pulumi.Input<number | undefined>;
}
//# sourceMappingURL=getOauthClients.d.ts.map