import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
/**
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as cloudflare from "@pulumi/cloudflare";
 *
 * const exampleLoadBalancerMonitorGroup = cloudflare.getLoadBalancerMonitorGroup({
 *     accountId: "023e105f4ecef8ad9ca31a8372d0c353",
 *     monitorGroupId: "17b5962d775c646f3f9725cbc7a53df4",
 * });
 * ```
 */
export declare function getLoadBalancerMonitorGroup(args: GetLoadBalancerMonitorGroupArgs, opts?: pulumi.InvokeOptions): Promise<GetLoadBalancerMonitorGroupResult>;
/**
 * A collection of arguments for invoking getLoadBalancerMonitorGroup.
 */
export interface GetLoadBalancerMonitorGroupArgs {
    /**
     * Identifier.
     */
    accountId: string;
    monitorGroupId: string;
}
/**
 * A collection of values returned by getLoadBalancerMonitorGroup.
 */
export interface GetLoadBalancerMonitorGroupResult {
    /**
     * Identifier.
     */
    readonly accountId: string;
    /**
     * The timestamp of when the monitor group was created
     */
    readonly createdOn: string;
    /**
     * A short description of the monitor group
     */
    readonly description: string;
    /**
     * The ID of this resource.
     */
    readonly id: string;
    /**
     * List of monitors in this group
     */
    readonly members: outputs.GetLoadBalancerMonitorGroupMember[];
    /**
     * The timestamp of when the monitor group was last updated
     */
    readonly modifiedOn: string;
    readonly monitorGroupId: string;
}
/**
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as cloudflare from "@pulumi/cloudflare";
 *
 * const exampleLoadBalancerMonitorGroup = cloudflare.getLoadBalancerMonitorGroup({
 *     accountId: "023e105f4ecef8ad9ca31a8372d0c353",
 *     monitorGroupId: "17b5962d775c646f3f9725cbc7a53df4",
 * });
 * ```
 */
export declare function getLoadBalancerMonitorGroupOutput(args: GetLoadBalancerMonitorGroupOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetLoadBalancerMonitorGroupResult>;
/**
 * A collection of arguments for invoking getLoadBalancerMonitorGroup.
 */
export interface GetLoadBalancerMonitorGroupOutputArgs {
    /**
     * Identifier.
     */
    accountId: pulumi.Input<string>;
    monitorGroupId: pulumi.Input<string>;
}
//# sourceMappingURL=getLoadBalancerMonitorGroup.d.ts.map