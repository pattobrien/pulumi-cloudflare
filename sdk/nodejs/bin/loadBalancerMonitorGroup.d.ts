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
 * const exampleLoadBalancerMonitorGroup = new cloudflare.LoadBalancerMonitorGroup("example_load_balancer_monitor_group", {
 *     accountId: "023e105f4ecef8ad9ca31a8372d0c353",
 *     description: "Primary datacenter monitors",
 *     members: [{
 *         enabled: true,
 *         monitorId: "monitor_id",
 *         monitoringOnly: false,
 *         mustBeHealthy: true,
 *     }],
 * });
 * ```
 *
 * ## Import
 *
 * ```sh
 * $ pulumi import cloudflare:index/loadBalancerMonitorGroup:LoadBalancerMonitorGroup example '<account_id>/<monitor_group_id>'
 * ```
 */
export declare class LoadBalancerMonitorGroup extends pulumi.CustomResource {
    /**
     * Get an existing LoadBalancerMonitorGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: LoadBalancerMonitorGroupState, opts?: pulumi.CustomResourceOptions): LoadBalancerMonitorGroup;
    /**
     * Returns true if the given object is an instance of LoadBalancerMonitorGroup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is LoadBalancerMonitorGroup;
    /**
     * Identifier.
     */
    readonly accountId: pulumi.Output<string>;
    /**
     * The timestamp of when the monitor group was created
     */
    readonly createdOn: pulumi.Output<string>;
    /**
     * A short description of the monitor group
     */
    readonly description: pulumi.Output<string>;
    /**
     * List of monitors in this group
     */
    readonly members: pulumi.Output<outputs.LoadBalancerMonitorGroupMember[]>;
    /**
     * The timestamp of when the monitor group was last updated
     */
    readonly modifiedOn: pulumi.Output<string>;
    /**
     * Create a LoadBalancerMonitorGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: LoadBalancerMonitorGroupArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering LoadBalancerMonitorGroup resources.
 */
export interface LoadBalancerMonitorGroupState {
    /**
     * Identifier.
     */
    accountId?: pulumi.Input<string | undefined>;
    /**
     * The timestamp of when the monitor group was created
     */
    createdOn?: pulumi.Input<string | undefined>;
    /**
     * A short description of the monitor group
     */
    description?: pulumi.Input<string | undefined>;
    /**
     * List of monitors in this group
     */
    members?: pulumi.Input<pulumi.Input<inputs.LoadBalancerMonitorGroupMember>[] | undefined>;
    /**
     * The timestamp of when the monitor group was last updated
     */
    modifiedOn?: pulumi.Input<string | undefined>;
}
/**
 * The set of arguments for constructing a LoadBalancerMonitorGroup resource.
 */
export interface LoadBalancerMonitorGroupArgs {
    /**
     * Identifier.
     */
    accountId: pulumi.Input<string>;
    /**
     * A short description of the monitor group
     */
    description: pulumi.Input<string>;
    /**
     * List of monitors in this group
     */
    members: pulumi.Input<pulumi.Input<inputs.LoadBalancerMonitorGroupMember>[]>;
}
//# sourceMappingURL=loadBalancerMonitorGroup.d.ts.map