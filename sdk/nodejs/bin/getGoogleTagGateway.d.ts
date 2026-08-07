import * as pulumi from "@pulumi/pulumi";
/**
 * Accepted Permissions
 *
 * - `Zaraz Admin`
 * - `Zaraz Edit`
 * - `Zaraz Read`
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as cloudflare from "@pulumi/cloudflare";
 *
 * const exampleGoogleTagGateway = cloudflare.getGoogleTagGateway({
 *     zoneId: "023e105f4ecef8ad9ca31a8372d0c353",
 * });
 * ```
 */
export declare function getGoogleTagGateway(args: GetGoogleTagGatewayArgs, opts?: pulumi.InvokeOptions): Promise<GetGoogleTagGatewayResult>;
/**
 * A collection of arguments for invoking getGoogleTagGateway.
 */
export interface GetGoogleTagGatewayArgs {
    /**
     * Identifier.
     */
    zoneId: string;
}
/**
 * A collection of values returned by getGoogleTagGateway.
 */
export interface GetGoogleTagGatewayResult {
    /**
     * Enables or disables Google Tag Gateway for this zone.
     */
    readonly enabled: boolean;
    /**
     * Specifies the endpoint path for proxying Google Tag Manager requests. Use an absolute path starting with '/', with no nested paths and alphanumeric characters only (e.g. /metrics).
     */
    readonly endpoint: string;
    /**
     * Hides the original client IP address from Google when enabled.
     */
    readonly hideOriginalIp: boolean;
    /**
     * Identifier.
     */
    readonly id: string;
    /**
     * Specify the Google Tag Manager container or measurement ID (e.g. GTM-XXXXXXX or G-XXXXXXXXXX).
     */
    readonly measurementId: string;
    /**
     * Set up the associated Google Tag on the zone automatically when enabled.
     */
    readonly setUpTag: boolean;
    /**
     * Identifier.
     */
    readonly zoneId: string;
}
/**
 * Accepted Permissions
 *
 * - `Zaraz Admin`
 * - `Zaraz Edit`
 * - `Zaraz Read`
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as cloudflare from "@pulumi/cloudflare";
 *
 * const exampleGoogleTagGateway = cloudflare.getGoogleTagGateway({
 *     zoneId: "023e105f4ecef8ad9ca31a8372d0c353",
 * });
 * ```
 */
export declare function getGoogleTagGatewayOutput(args: GetGoogleTagGatewayOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetGoogleTagGatewayResult>;
/**
 * A collection of arguments for invoking getGoogleTagGateway.
 */
export interface GetGoogleTagGatewayOutputArgs {
    /**
     * Identifier.
     */
    zoneId: pulumi.Input<string>;
}
//# sourceMappingURL=getGoogleTagGateway.d.ts.map