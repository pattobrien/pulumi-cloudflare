import * as pulumi from "@pulumi/pulumi";
/**
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as cloudflare from "@pulumi/cloudflare";
 *
 * const exampleZoneAutoOriginTlsKex = new cloudflare.ZoneAutoOriginTlsKex("example_zone_auto_origin_tls_kex", {
 *     zoneId: "023e105f4ecef8ad9ca31a8372d0c353",
 *     enabled: true,
 * });
 * ```
 *
 * ## Import
 *
 * ```sh
 * $ pulumi import cloudflare:index/zoneAutoOriginTlsKex:ZoneAutoOriginTlsKex example '<zone_id>'
 * ```
 */
export declare class ZoneAutoOriginTlsKex extends pulumi.CustomResource {
    /**
     * Get an existing ZoneAutoOriginTlsKex resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ZoneAutoOriginTlsKexState, opts?: pulumi.CustomResourceOptions): ZoneAutoOriginTlsKex;
    /**
     * Returns true if the given object is an instance of ZoneAutoOriginTlsKex.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ZoneAutoOriginTlsKex;
    /**
     * Controls enablement of Auto-Origin TLS KEX selection for the zone.
     */
    readonly enabled: pulumi.Output<boolean>;
    /**
     * Last time this setting was modified.
     */
    readonly modifiedOn: pulumi.Output<string>;
    readonly zoneId: pulumi.Output<string>;
    /**
     * Create a ZoneAutoOriginTlsKex resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ZoneAutoOriginTlsKexArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering ZoneAutoOriginTlsKex resources.
 */
export interface ZoneAutoOriginTlsKexState {
    /**
     * Controls enablement of Auto-Origin TLS KEX selection for the zone.
     */
    enabled?: pulumi.Input<boolean | undefined>;
    /**
     * Last time this setting was modified.
     */
    modifiedOn?: pulumi.Input<string | undefined>;
    zoneId?: pulumi.Input<string | undefined>;
}
/**
 * The set of arguments for constructing a ZoneAutoOriginTlsKex resource.
 */
export interface ZoneAutoOriginTlsKexArgs {
    /**
     * Controls enablement of Auto-Origin TLS KEX selection for the zone.
     */
    enabled: pulumi.Input<boolean>;
    zoneId: pulumi.Input<string>;
}
//# sourceMappingURL=zoneAutoOriginTlsKex.d.ts.map