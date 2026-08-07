import * as pulumi from "@pulumi/pulumi";
/**
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as cloudflare from "@pulumi/cloudflare";
 *
 * const exampleOriginTlsComplianceModes = new cloudflare.OriginTlsComplianceModes("example_origin_tls_compliance_modes", {
 *     zoneId: "023e105f4ecef8ad9ca31a8372d0c353",
 *     values: [
 *         "fips",
 *         "pqh",
 *     ],
 * });
 * ```
 *
 * ## Import
 *
 * ```sh
 * $ pulumi import cloudflare:index/originTlsComplianceModes:OriginTlsComplianceModes example '<zone_id>'
 * ```
 */
export declare class OriginTlsComplianceModes extends pulumi.CustomResource {
    /**
     * Get an existing OriginTlsComplianceModes resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: OriginTlsComplianceModesState, opts?: pulumi.CustomResourceOptions): OriginTlsComplianceModes;
    /**
     * Returns true if the given object is an instance of OriginTlsComplianceModes.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is OriginTlsComplianceModes;
    /**
     * Whether the setting is editable.
     */
    readonly editable: pulumi.Output<boolean>;
    /**
     * Last time this setting was modified.
     */
    readonly modifiedOn: pulumi.Output<string>;
    /**
     * List of TLS compliance modes that constrain the key-exchange algorithms Cloudflare may use when establishing the TLS connection to the zone's origin. Currently supported values are `fips` (FIPS-approved curves) and `pqh` (post-quantum hybrid). Future modes (e.g. `cnsa2`) may be added; clients should treat unknown values as opaque strings. Multiple modes are combined as the intersection of their permitted algorithm lists; selections whose intersection is empty are rejected. An empty list clears the constraint.
     */
    readonly values: pulumi.Output<string[]>;
    /**
     * Identifier.
     */
    readonly zoneId: pulumi.Output<string>;
    /**
     * Create a OriginTlsComplianceModes resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: OriginTlsComplianceModesArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering OriginTlsComplianceModes resources.
 */
export interface OriginTlsComplianceModesState {
    /**
     * Whether the setting is editable.
     */
    editable?: pulumi.Input<boolean | undefined>;
    /**
     * Last time this setting was modified.
     */
    modifiedOn?: pulumi.Input<string | undefined>;
    /**
     * List of TLS compliance modes that constrain the key-exchange algorithms Cloudflare may use when establishing the TLS connection to the zone's origin. Currently supported values are `fips` (FIPS-approved curves) and `pqh` (post-quantum hybrid). Future modes (e.g. `cnsa2`) may be added; clients should treat unknown values as opaque strings. Multiple modes are combined as the intersection of their permitted algorithm lists; selections whose intersection is empty are rejected. An empty list clears the constraint.
     */
    values?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * Identifier.
     */
    zoneId?: pulumi.Input<string | undefined>;
}
/**
 * The set of arguments for constructing a OriginTlsComplianceModes resource.
 */
export interface OriginTlsComplianceModesArgs {
    /**
     * List of TLS compliance modes that constrain the key-exchange algorithms Cloudflare may use when establishing the TLS connection to the zone's origin. Currently supported values are `fips` (FIPS-approved curves) and `pqh` (post-quantum hybrid). Future modes (e.g. `cnsa2`) may be added; clients should treat unknown values as opaque strings. Multiple modes are combined as the intersection of their permitted algorithm lists; selections whose intersection is empty are rejected. An empty list clears the constraint.
     */
    values: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Identifier.
     */
    zoneId: pulumi.Input<string>;
}
//# sourceMappingURL=originTlsComplianceModes.d.ts.map