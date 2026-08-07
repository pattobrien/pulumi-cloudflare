import * as pulumi from "@pulumi/pulumi";
/**
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as cloudflare from "@pulumi/cloudflare";
 *
 * const exampleOriginCloudRegion = cloudflare.getOriginCloudRegion({
 *     zoneId: "023e105f4ecef8ad9ca31a8372d0c353",
 *     originIp: "192.0.2.1",
 * });
 * ```
 */
export declare function getOriginCloudRegion(args: GetOriginCloudRegionArgs, opts?: pulumi.InvokeOptions): Promise<GetOriginCloudRegionResult>;
/**
 * A collection of arguments for invoking getOriginCloudRegion.
 */
export interface GetOriginCloudRegionArgs {
    originIp: string;
    /**
     * Identifier.
     */
    zoneId: string;
}
/**
 * A collection of values returned by getOriginCloudRegion.
 */
export interface GetOriginCloudRegionResult {
    /**
     * The ID of this resource.
     */
    readonly id: string;
    /**
     * Time this mapping was last modified.
     */
    readonly modifiedOn: string;
    readonly originIp: string;
    /**
     * Cloud vendor region identifier.
     */
    readonly region: string;
    /**
     * Cloud vendor hosting the origin.
     * Available values: "aws", "azure", "gcp", "oci".
     */
    readonly vendor: string;
    /**
     * Identifier.
     */
    readonly zoneId: string;
}
/**
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as cloudflare from "@pulumi/cloudflare";
 *
 * const exampleOriginCloudRegion = cloudflare.getOriginCloudRegion({
 *     zoneId: "023e105f4ecef8ad9ca31a8372d0c353",
 *     originIp: "192.0.2.1",
 * });
 * ```
 */
export declare function getOriginCloudRegionOutput(args: GetOriginCloudRegionOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetOriginCloudRegionResult>;
/**
 * A collection of arguments for invoking getOriginCloudRegion.
 */
export interface GetOriginCloudRegionOutputArgs {
    originIp: pulumi.Input<string>;
    /**
     * Identifier.
     */
    zoneId: pulumi.Input<string>;
}
//# sourceMappingURL=getOriginCloudRegion.d.ts.map