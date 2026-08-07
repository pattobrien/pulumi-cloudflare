import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
/**
 * Accepted Permissions
 *
 * - `Email Routing Rules Read`
 * - `Email Routing Rules Write`
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as cloudflare from "@pulumi/cloudflare";
 *
 * const exampleEmailRoutingCatchAll = cloudflare.getEmailRoutingCatchAll({
 *     zoneId: "023e105f4ecef8ad9ca31a8372d0c353",
 * });
 * ```
 */
export declare function getEmailRoutingCatchAll(args?: GetEmailRoutingCatchAllArgs, opts?: pulumi.InvokeOptions): Promise<GetEmailRoutingCatchAllResult>;
/**
 * A collection of arguments for invoking getEmailRoutingCatchAll.
 */
export interface GetEmailRoutingCatchAllArgs {
    /**
     * Identifier.
     */
    zoneId?: string;
}
/**
 * A collection of values returned by getEmailRoutingCatchAll.
 */
export interface GetEmailRoutingCatchAllResult {
    /**
     * List actions for the catch-all routing rule.
     */
    readonly actions: outputs.GetEmailRoutingCatchAllAction[];
    /**
     * Routing rule status.
     */
    readonly enabled: boolean;
    /**
     * Identifier.
     */
    readonly id: string;
    /**
     * List of matchers for the catch-all routing rule.
     */
    readonly matchers: outputs.GetEmailRoutingCatchAllMatcher[];
    /**
     * Routing rule name.
     */
    readonly name: string;
    /**
     * Who manages the rule. `api` covers dashboard, generic API, and Terraform;
     * `wrangler` means the rule is managed by a Worker's wrangler.jsonc. Defaults
     * to `api` when omitted on write.
     * Available values: "api", "wrangler".
     */
    readonly source: string;
    /**
     * Routing rule tag. (Deprecated, replaced by routing rule identifier)
     *
     * @deprecated This attribute is deprecated.
     */
    readonly tag: string;
    /**
     * Identifier.
     */
    readonly zoneId?: string;
}
/**
 * Accepted Permissions
 *
 * - `Email Routing Rules Read`
 * - `Email Routing Rules Write`
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as cloudflare from "@pulumi/cloudflare";
 *
 * const exampleEmailRoutingCatchAll = cloudflare.getEmailRoutingCatchAll({
 *     zoneId: "023e105f4ecef8ad9ca31a8372d0c353",
 * });
 * ```
 */
export declare function getEmailRoutingCatchAllOutput(args?: GetEmailRoutingCatchAllOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetEmailRoutingCatchAllResult>;
/**
 * A collection of arguments for invoking getEmailRoutingCatchAll.
 */
export interface GetEmailRoutingCatchAllOutputArgs {
    /**
     * Identifier.
     */
    zoneId?: pulumi.Input<string | undefined>;
}
//# sourceMappingURL=getEmailRoutingCatchAll.d.ts.map