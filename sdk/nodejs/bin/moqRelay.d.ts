import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
/**
 * ## Import
 *
 * ```sh
 * $ pulumi import cloudflare:index/moqRelay:MoqRelay example '<account_id>/<relay_id>'
 * ```
 */
export declare class MoqRelay extends pulumi.CustomResource {
    /**
     * Get an existing MoqRelay resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: MoqRelayState, opts?: pulumi.CustomResourceOptions): MoqRelay;
    /**
     * Returns true if the given object is an instance of MoqRelay.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is MoqRelay;
    /**
     * Cloudflare account identifier.
     */
    readonly accountId: pulumi.Output<string>;
    /**
     * upstreams and lingeringSubscribe are mutually exclusive.
     */
    readonly config: pulumi.Output<outputs.MoqRelayConfig>;
    readonly created: pulumi.Output<string>;
    readonly modified: pulumi.Output<string>;
    /**
     * Human-readable name for the relay.
     */
    readonly name: pulumi.Output<string>;
    /**
     * "connected" when active, omitted otherwise.
     * Available values: "connected".
     */
    readonly status: pulumi.Output<string>;
    /**
     * Full access token (publish + subscribe). Treat as sensitive.
     */
    readonly tokenPublishSubscribe: pulumi.Output<string>;
    /**
     * Subscribe-only token. Treat as sensitive.
     */
    readonly tokenSubscribe: pulumi.Output<string>;
    /**
     * Server-generated unique identifier (32 hex chars).
     */
    readonly uid: pulumi.Output<string>;
    /**
     * Create a MoqRelay resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: MoqRelayArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering MoqRelay resources.
 */
export interface MoqRelayState {
    /**
     * Cloudflare account identifier.
     */
    accountId?: pulumi.Input<string | undefined>;
    /**
     * upstreams and lingeringSubscribe are mutually exclusive.
     */
    config?: pulumi.Input<inputs.MoqRelayConfig | undefined>;
    created?: pulumi.Input<string | undefined>;
    modified?: pulumi.Input<string | undefined>;
    /**
     * Human-readable name for the relay.
     */
    name?: pulumi.Input<string | undefined>;
    /**
     * "connected" when active, omitted otherwise.
     * Available values: "connected".
     */
    status?: pulumi.Input<string | undefined>;
    /**
     * Full access token (publish + subscribe). Treat as sensitive.
     */
    tokenPublishSubscribe?: pulumi.Input<string | undefined>;
    /**
     * Subscribe-only token. Treat as sensitive.
     */
    tokenSubscribe?: pulumi.Input<string | undefined>;
    /**
     * Server-generated unique identifier (32 hex chars).
     */
    uid?: pulumi.Input<string | undefined>;
}
/**
 * The set of arguments for constructing a MoqRelay resource.
 */
export interface MoqRelayArgs {
    /**
     * Cloudflare account identifier.
     */
    accountId: pulumi.Input<string>;
    /**
     * upstreams and lingeringSubscribe are mutually exclusive.
     */
    config?: pulumi.Input<inputs.MoqRelayConfig | undefined>;
    /**
     * Human-readable name for the relay.
     */
    name: pulumi.Input<string>;
}
//# sourceMappingURL=moqRelay.d.ts.map