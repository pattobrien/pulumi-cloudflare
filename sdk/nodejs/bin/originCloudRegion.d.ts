import * as pulumi from "@pulumi/pulumi";
/**
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as cloudflare from "@pulumi/cloudflare";
 *
 * const exampleOriginCloudRegion = new cloudflare.OriginCloudRegion("example_origin_cloud_region", {
 *     zoneId: "023e105f4ecef8ad9ca31a8372d0c353",
 *     originIp: "192.0.2.1",
 *     region: "us-east-1",
 *     vendor: "aws",
 * });
 * ```
 *
 * ## Import
 *
 * ```sh
 * $ pulumi import cloudflare:index/originCloudRegion:OriginCloudRegion example '<zone_id>/<origin_ip>'
 * ```
 */
export declare class OriginCloudRegion extends pulumi.CustomResource {
    /**
     * Get an existing OriginCloudRegion resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: OriginCloudRegionState, opts?: pulumi.CustomResourceOptions): OriginCloudRegion;
    /**
     * Returns true if the given object is an instance of OriginCloudRegion.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is OriginCloudRegion;
    /**
     * Time this mapping was last modified.
     */
    readonly modifiedOn: pulumi.Output<string>;
    /**
     * Origin IP address (IPv4 or IPv6). For the single PUT endpoint (`PUT /origin/cloud_regions/{origin_ip}`), this field must match the path parameter or the request will be rejected with a 400 error. For the batch PUT endpoint, this field identifies which mapping to upsert.
     */
    readonly originIp: pulumi.Output<string>;
    /**
     * Cloud vendor region identifier. Must be a valid region for the specified vendor as returned by the supportedRegions endpoint.
     */
    readonly region: pulumi.Output<string>;
    /**
     * Cloud vendor hosting the origin. Must be one of the supported vendors.
     * Available values: "aws", "azure", "gcp", "oci".
     */
    readonly vendor: pulumi.Output<string>;
    /**
     * Identifier.
     */
    readonly zoneId: pulumi.Output<string>;
    /**
     * Create a OriginCloudRegion resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: OriginCloudRegionArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering OriginCloudRegion resources.
 */
export interface OriginCloudRegionState {
    /**
     * Time this mapping was last modified.
     */
    modifiedOn?: pulumi.Input<string | undefined>;
    /**
     * Origin IP address (IPv4 or IPv6). For the single PUT endpoint (`PUT /origin/cloud_regions/{origin_ip}`), this field must match the path parameter or the request will be rejected with a 400 error. For the batch PUT endpoint, this field identifies which mapping to upsert.
     */
    originIp?: pulumi.Input<string | undefined>;
    /**
     * Cloud vendor region identifier. Must be a valid region for the specified vendor as returned by the supportedRegions endpoint.
     */
    region?: pulumi.Input<string | undefined>;
    /**
     * Cloud vendor hosting the origin. Must be one of the supported vendors.
     * Available values: "aws", "azure", "gcp", "oci".
     */
    vendor?: pulumi.Input<string | undefined>;
    /**
     * Identifier.
     */
    zoneId?: pulumi.Input<string | undefined>;
}
/**
 * The set of arguments for constructing a OriginCloudRegion resource.
 */
export interface OriginCloudRegionArgs {
    /**
     * Origin IP address (IPv4 or IPv6). For the single PUT endpoint (`PUT /origin/cloud_regions/{origin_ip}`), this field must match the path parameter or the request will be rejected with a 400 error. For the batch PUT endpoint, this field identifies which mapping to upsert.
     */
    originIp: pulumi.Input<string>;
    /**
     * Cloud vendor region identifier. Must be a valid region for the specified vendor as returned by the supportedRegions endpoint.
     */
    region: pulumi.Input<string>;
    /**
     * Cloud vendor hosting the origin. Must be one of the supported vendors.
     * Available values: "aws", "azure", "gcp", "oci".
     */
    vendor: pulumi.Input<string>;
    /**
     * Identifier.
     */
    zoneId: pulumi.Input<string>;
}
//# sourceMappingURL=originCloudRegion.d.ts.map