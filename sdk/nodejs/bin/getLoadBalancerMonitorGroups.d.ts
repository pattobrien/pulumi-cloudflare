import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
/**
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as cloudflare from "@pulumi/cloudflare";
 *
 * const exampleLoadBalancerMonitorGroups = cloudflare.getLoadBalancerMonitorGroups({
 *     accountId: "023e105f4ecef8ad9ca31a8372d0c353",
 * });
 * ```
 */
export declare function getLoadBalancerMonitorGroups(args: GetLoadBalancerMonitorGroupsArgs, opts?: pulumi.InvokeOptions): Promise<GetLoadBalancerMonitorGroupsResult>;
/**
 * A collection of arguments for invoking getLoadBalancerMonitorGroups.
 */
export interface GetLoadBalancerMonitorGroupsArgs {
    /**
     * Identifier.
     */
    accountId: string;
    /**
     * Max items to fetch, default: 1000
     */
    maxItems?: number;
}
/**
 * A collection of values returned by getLoadBalancerMonitorGroups.
 */
export interface GetLoadBalancerMonitorGroupsResult {
    /**
     * Identifier.
     */
    readonly accountId: string;
    /**
     * Max items to fetch, default: 1000
     */
    readonly maxItems?: number;
    /**
     * The items returned by the data source
     */
    readonly results: outputs.GetLoadBalancerMonitorGroupsResult[];
}
/**
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as cloudflare from "@pulumi/cloudflare";
 *
 * const exampleLoadBalancerMonitorGroups = cloudflare.getLoadBalancerMonitorGroups({
 *     accountId: "023e105f4ecef8ad9ca31a8372d0c353",
 * });
 * ```
 */
export declare function getLoadBalancerMonitorGroupsOutput(args: GetLoadBalancerMonitorGroupsOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetLoadBalancerMonitorGroupsResult>;
/**
 * A collection of arguments for invoking getLoadBalancerMonitorGroups.
 */
export interface GetLoadBalancerMonitorGroupsOutputArgs {
    /**
     * Identifier.
     */
    accountId: pulumi.Input<string>;
    /**
     * Max items to fetch, default: 1000
     */
    maxItems?: pulumi.Input<number | undefined>;
}
//# sourceMappingURL=getLoadBalancerMonitorGroups.d.ts.map