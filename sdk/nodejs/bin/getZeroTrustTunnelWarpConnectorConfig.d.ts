import * as pulumi from "@pulumi/pulumi";
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
 * const exampleZeroTrustTunnelWarpConnectorConfig = cloudflare.getZeroTrustTunnelWarpConnectorConfig({
 *     accountId: "023e105f4ecef8ad9ca31a8372d0c353",
 *     tunnelId: "f70ff985-a4ef-4643-bbbc-4a0ed4fc8415",
 * });
 * ```
 */
export declare function getZeroTrustTunnelWarpConnectorConfig(args: GetZeroTrustTunnelWarpConnectorConfigArgs, opts?: pulumi.InvokeOptions): Promise<GetZeroTrustTunnelWarpConnectorConfigResult>;
/**
 * A collection of arguments for invoking getZeroTrustTunnelWarpConnectorConfig.
 */
export interface GetZeroTrustTunnelWarpConnectorConfigArgs {
    /**
     * Identifier.
     */
    accountId: string;
    /**
     * UUID of the tunnel.
     */
    tunnelId: string;
}
/**
 * A collection of values returned by getZeroTrustTunnelWarpConnectorConfig.
 */
export interface GetZeroTrustTunnelWarpConnectorConfigResult {
    /**
     * Identifier.
     */
    readonly accountId: string;
    /**
     * Provider-specific configuration. Present for `aws` and `local` modes.
     */
    readonly config: outputs.GetZeroTrustTunnelWarpConnectorConfigConfig;
    /**
     * Monotonically increasing configuration version, incremented on each PUT.
     */
    readonly configurationVersion: number;
    /**
     * Timestamp of when the resource was created.
     */
    readonly createdAt: string;
    /**
     * High-availability mode for the WARP Connector tunnel. `none` means HA is enabled but no provider is configured yet (newly created tunnels default to this). `disabled` means HA is explicitly turned off. `aws` uses AWS ENI move for failover. `local` uses virtual IPs (VIPs) on the local interface.
     * Available values: "none", "disabled", "aws", "local".
     */
    readonly haMode: string;
    /**
     * UUID of the tunnel.
     */
    readonly tunnelId: string;
    /**
     * Timestamp of the last update. Null if never updated.
     */
    readonly updatedAt: string;
}
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
 * const exampleZeroTrustTunnelWarpConnectorConfig = cloudflare.getZeroTrustTunnelWarpConnectorConfig({
 *     accountId: "023e105f4ecef8ad9ca31a8372d0c353",
 *     tunnelId: "f70ff985-a4ef-4643-bbbc-4a0ed4fc8415",
 * });
 * ```
 */
export declare function getZeroTrustTunnelWarpConnectorConfigOutput(args: GetZeroTrustTunnelWarpConnectorConfigOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetZeroTrustTunnelWarpConnectorConfigResult>;
/**
 * A collection of arguments for invoking getZeroTrustTunnelWarpConnectorConfig.
 */
export interface GetZeroTrustTunnelWarpConnectorConfigOutputArgs {
    /**
     * Identifier.
     */
    accountId: pulumi.Input<string>;
    /**
     * UUID of the tunnel.
     */
    tunnelId: pulumi.Input<string>;
}
//# sourceMappingURL=getZeroTrustTunnelWarpConnectorConfig.d.ts.map