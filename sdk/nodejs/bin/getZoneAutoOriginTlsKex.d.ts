import * as pulumi from "@pulumi/pulumi";
/**
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as cloudflare from "@pulumi/cloudflare";
 *
 * const exampleZoneAutoOriginTlsKex = cloudflare.getZoneAutoOriginTlsKex({
 *     zoneId: "023e105f4ecef8ad9ca31a8372d0c353",
 * });
 * ```
 */
export declare function getZoneAutoOriginTlsKex(args: GetZoneAutoOriginTlsKexArgs, opts?: pulumi.InvokeOptions): Promise<GetZoneAutoOriginTlsKexResult>;
/**
 * A collection of arguments for invoking getZoneAutoOriginTlsKex.
 */
export interface GetZoneAutoOriginTlsKexArgs {
    zoneId: string;
}
/**
 * A collection of values returned by getZoneAutoOriginTlsKex.
 */
export interface GetZoneAutoOriginTlsKexResult {
    /**
     * Whether Auto-Origin TLS KEX selection is enabled for the zone.
     */
    readonly enabled: boolean;
    /**
     * The ID of this resource.
     */
    readonly id: string;
    /**
     * Last time this setting was modified.
     */
    readonly modifiedOn: string;
    readonly zoneId: string;
}
/**
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as cloudflare from "@pulumi/cloudflare";
 *
 * const exampleZoneAutoOriginTlsKex = cloudflare.getZoneAutoOriginTlsKex({
 *     zoneId: "023e105f4ecef8ad9ca31a8372d0c353",
 * });
 * ```
 */
export declare function getZoneAutoOriginTlsKexOutput(args: GetZoneAutoOriginTlsKexOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetZoneAutoOriginTlsKexResult>;
/**
 * A collection of arguments for invoking getZoneAutoOriginTlsKex.
 */
export interface GetZoneAutoOriginTlsKexOutputArgs {
    zoneId: pulumi.Input<string>;
}
//# sourceMappingURL=getZoneAutoOriginTlsKex.d.ts.map