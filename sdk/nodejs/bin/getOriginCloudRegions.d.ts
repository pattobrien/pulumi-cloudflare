import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
/**
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as cloudflare from "@pulumi/cloudflare";
 *
 * const exampleOriginCloudRegions = cloudflare.getOriginCloudRegions({
 *     zoneId: "023e105f4ecef8ad9ca31a8372d0c353",
 * });
 * ```
 */
export declare function getOriginCloudRegions(args: GetOriginCloudRegionsArgs, opts?: pulumi.InvokeOptions): Promise<GetOriginCloudRegionsResult>;
/**
 * A collection of arguments for invoking getOriginCloudRegions.
 */
export interface GetOriginCloudRegionsArgs {
    /**
     * Max items to fetch, default: 1000
     */
    maxItems?: number;
    /**
     * Identifier.
     */
    zoneId: string;
}
/**
 * A collection of values returned by getOriginCloudRegions.
 */
export interface GetOriginCloudRegionsResult {
    /**
     * Max items to fetch, default: 1000
     */
    readonly maxItems?: number;
    /**
     * The items returned by the data source
     */
    readonly results: outputs.GetOriginCloudRegionsResult[];
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
 * const exampleOriginCloudRegions = cloudflare.getOriginCloudRegions({
 *     zoneId: "023e105f4ecef8ad9ca31a8372d0c353",
 * });
 * ```
 */
export declare function getOriginCloudRegionsOutput(args: GetOriginCloudRegionsOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetOriginCloudRegionsResult>;
/**
 * A collection of arguments for invoking getOriginCloudRegions.
 */
export interface GetOriginCloudRegionsOutputArgs {
    /**
     * Max items to fetch, default: 1000
     */
    maxItems?: pulumi.Input<number | undefined>;
    /**
     * Identifier.
     */
    zoneId: pulumi.Input<string>;
}
//# sourceMappingURL=getOriginCloudRegions.d.ts.map