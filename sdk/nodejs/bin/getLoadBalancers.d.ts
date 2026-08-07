import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
/**
 * Accepted Permissions
 *
 * - `Load Balancers Read`
 * - `Load Balancers Write`
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as cloudflare from "@pulumi/cloudflare";
 *
 * const exampleLoadBalancers = cloudflare.getLoadBalancers({
 *     zoneId: "zone_id",
 * });
 * ```
 */
export declare function getLoadBalancers(args?: GetLoadBalancersArgs, opts?: pulumi.InvokeOptions): Promise<GetLoadBalancersResult>;
/**
 * A collection of arguments for invoking getLoadBalancers.
 */
export interface GetLoadBalancersArgs {
    /**
     * Max items to fetch, default: 1000
     */
    maxItems?: number;
    zoneId?: string;
}
/**
 * A collection of values returned by getLoadBalancers.
 */
export interface GetLoadBalancersResult {
    /**
     * Max items to fetch, default: 1000
     */
    readonly maxItems?: number;
    /**
     * The items returned by the data source
     */
    readonly results: outputs.GetLoadBalancersResult[];
    readonly zoneId?: string;
}
/**
 * Accepted Permissions
 *
 * - `Load Balancers Read`
 * - `Load Balancers Write`
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as cloudflare from "@pulumi/cloudflare";
 *
 * const exampleLoadBalancers = cloudflare.getLoadBalancers({
 *     zoneId: "zone_id",
 * });
 * ```
 */
export declare function getLoadBalancersOutput(args?: GetLoadBalancersOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetLoadBalancersResult>;
/**
 * A collection of arguments for invoking getLoadBalancers.
 */
export interface GetLoadBalancersOutputArgs {
    /**
     * Max items to fetch, default: 1000
     */
    maxItems?: pulumi.Input<number | undefined>;
    zoneId?: pulumi.Input<string | undefined>;
}
//# sourceMappingURL=getLoadBalancers.d.ts.map