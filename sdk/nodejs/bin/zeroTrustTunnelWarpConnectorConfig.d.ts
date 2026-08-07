import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
/**
 * Accepted Permissions
 *
 * - `Cloudflare One Connector: WARP Read`
 * - `Cloudflare One Connector: WARP Write`
 * - `Cloudflare One Connectors Read`
 * - `Cloudflare One Connectors Write`
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as cloudflare from "@pulumi/cloudflare";
 *
 * const exampleZeroTrustTunnelWarpConnectorConfig = new cloudflare.ZeroTrustTunnelWarpConnectorConfig("example_zero_trust_tunnel_warp_connector_config", {
 *     accountId: "023e105f4ecef8ad9ca31a8372d0c353",
 *     tunnelId: "f70ff985-a4ef-4643-bbbc-4a0ed4fc8415",
 *     haMode: "aws",
 *     config: {
 *         fnrId: "eni-0123456789abcdef0",
 *     },
 * });
 * ```
 *
 * ## Import
 *
 * ```sh
 * $ pulumi import cloudflare:index/zeroTrustTunnelWarpConnectorConfig:ZeroTrustTunnelWarpConnectorConfig example '<account_id>/<tunnel_id>'
 * ```
 */
export declare class ZeroTrustTunnelWarpConnectorConfig extends pulumi.CustomResource {
    /**
     * Get an existing ZeroTrustTunnelWarpConnectorConfig resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ZeroTrustTunnelWarpConnectorConfigState, opts?: pulumi.CustomResourceOptions): ZeroTrustTunnelWarpConnectorConfig;
    /**
     * Returns true if the given object is an instance of ZeroTrustTunnelWarpConnectorConfig.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ZeroTrustTunnelWarpConnectorConfig;
    /**
     * Identifier.
     */
    readonly accountId: pulumi.Output<string>;
    /**
     * Provider-specific configuration. Required shape depends on ha_mode. For `aws`, must contain `fnrId`. For `local`, must contain `vips`. For `none` and `disabled`, must be empty or omitted.
     */
    readonly config: pulumi.Output<outputs.ZeroTrustTunnelWarpConnectorConfigConfig | undefined>;
    /**
     * Monotonically increasing configuration version, incremented on each PUT.
     */
    readonly configurationVersion: pulumi.Output<number>;
    /**
     * Timestamp of when the resource was created.
     */
    readonly createdAt: pulumi.Output<string>;
    /**
     * High-availability mode for the WARP Connector tunnel. `none` means HA is enabled but no provider is configured yet (newly created tunnels default to this). `disabled` means HA is explicitly turned off. `aws` uses AWS ENI move for failover. `local` uses virtual IPs (VIPs) on the local interface.
     * Available values: "none", "disabled", "aws", "local".
     */
    readonly haMode: pulumi.Output<string>;
    /**
     * UUID of the tunnel.
     */
    readonly tunnelId: pulumi.Output<string>;
    /**
     * Timestamp of the last update. Null if never updated.
     */
    readonly updatedAt: pulumi.Output<string>;
    /**
     * Create a ZeroTrustTunnelWarpConnectorConfig resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ZeroTrustTunnelWarpConnectorConfigArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering ZeroTrustTunnelWarpConnectorConfig resources.
 */
export interface ZeroTrustTunnelWarpConnectorConfigState {
    /**
     * Identifier.
     */
    accountId?: pulumi.Input<string | undefined>;
    /**
     * Provider-specific configuration. Required shape depends on ha_mode. For `aws`, must contain `fnrId`. For `local`, must contain `vips`. For `none` and `disabled`, must be empty or omitted.
     */
    config?: pulumi.Input<inputs.ZeroTrustTunnelWarpConnectorConfigConfig | undefined>;
    /**
     * Monotonically increasing configuration version, incremented on each PUT.
     */
    configurationVersion?: pulumi.Input<number | undefined>;
    /**
     * Timestamp of when the resource was created.
     */
    createdAt?: pulumi.Input<string | undefined>;
    /**
     * High-availability mode for the WARP Connector tunnel. `none` means HA is enabled but no provider is configured yet (newly created tunnels default to this). `disabled` means HA is explicitly turned off. `aws` uses AWS ENI move for failover. `local` uses virtual IPs (VIPs) on the local interface.
     * Available values: "none", "disabled", "aws", "local".
     */
    haMode?: pulumi.Input<string | undefined>;
    /**
     * UUID of the tunnel.
     */
    tunnelId?: pulumi.Input<string | undefined>;
    /**
     * Timestamp of the last update. Null if never updated.
     */
    updatedAt?: pulumi.Input<string | undefined>;
}
/**
 * The set of arguments for constructing a ZeroTrustTunnelWarpConnectorConfig resource.
 */
export interface ZeroTrustTunnelWarpConnectorConfigArgs {
    /**
     * Identifier.
     */
    accountId: pulumi.Input<string>;
    /**
     * Provider-specific configuration. Required shape depends on ha_mode. For `aws`, must contain `fnrId`. For `local`, must contain `vips`. For `none` and `disabled`, must be empty or omitted.
     */
    config?: pulumi.Input<inputs.ZeroTrustTunnelWarpConnectorConfigConfig | undefined>;
    /**
     * High-availability mode for the WARP Connector tunnel. `none` means HA is enabled but no provider is configured yet (newly created tunnels default to this). `disabled` means HA is explicitly turned off. `aws` uses AWS ENI move for failover. `local` uses virtual IPs (VIPs) on the local interface.
     * Available values: "none", "disabled", "aws", "local".
     */
    haMode: pulumi.Input<string>;
    /**
     * UUID of the tunnel.
     */
    tunnelId: pulumi.Input<string>;
}
//# sourceMappingURL=zeroTrustTunnelWarpConnectorConfig.d.ts.map