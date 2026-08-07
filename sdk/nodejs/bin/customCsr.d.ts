import * as pulumi from "@pulumi/pulumi";
/**
 * Accepted Permissions
 *
 * - `Account: SSL and Certificates Read`
 * - `Account: SSL and Certificates Write`
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as cloudflare from "@pulumi/cloudflare";
 *
 * const exampleCustomCsr = new cloudflare.CustomCsr("example_custom_csr", {
 *     commonName: "example.com",
 *     country: "US",
 *     locality: "San Francisco",
 *     organization: "Cloudflare, Inc.",
 *     sans: [
 *         "example.com",
 *         "www.example.com",
 *     ],
 *     state: "California",
 *     zoneId: "zone_id",
 *     description: "CSR for example.com wildcard",
 *     keyType: "rsa2048",
 *     name: "My Custom CSR",
 *     organizationalUnit: "Engineering",
 * });
 * ```
 *
 * ## Import
 *
 * ```sh
 * $ pulumi import cloudflare:index/customCsr:CustomCsr example '<{accounts|zones}/{account_id|zone_id}>/<custom_csr_id>'
 * ```
 */
export declare class CustomCsr extends pulumi.CustomResource {
    /**
     * Get an existing CustomCsr resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CustomCsrState, opts?: pulumi.CustomResourceOptions): CustomCsr;
    /**
     * Returns true if the given object is an instance of CustomCsr.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is CustomCsr;
    /**
     * The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.
     */
    readonly accountId: pulumi.Output<string | undefined>;
    /**
     * Account identifier associated with this CSR.
     */
    readonly accountTag: pulumi.Output<string>;
    /**
     * The common name (domain) for the CSR. Must be at most 64 characters.
     */
    readonly commonName: pulumi.Output<string>;
    /**
     * Two-letter ISO 3166-1 alpha-2 country code.
     */
    readonly country: pulumi.Output<string>;
    /**
     * When the CSR was created.
     */
    readonly createdAt: pulumi.Output<string>;
    /**
     * The PEM-encoded Certificate Signing Request.
     */
    readonly csr: pulumi.Output<string>;
    /**
     * Optional description for the CSR.
     */
    readonly description: pulumi.Output<string | undefined>;
    /**
     * Key algorithm to use for the CSR. Defaults to rsa2048 if not specified.
     * Available values: "rsa2048", "p256v1".
     */
    readonly keyType: pulumi.Output<string>;
    /**
     * City or locality name.
     */
    readonly locality: pulumi.Output<string>;
    /**
     * Human-readable name for the CSR.
     */
    readonly name: pulumi.Output<string | undefined>;
    /**
     * Organization name.
     */
    readonly organization: pulumi.Output<string>;
    /**
     * Organizational unit name.
     */
    readonly organizationalUnit: pulumi.Output<string | undefined>;
    /**
     * Subject Alternative Names for the CSR. At least one SAN is required.
     */
    readonly sans: pulumi.Output<string[]>;
    /**
     * State or province name.
     */
    readonly state: pulumi.Output<string>;
    /**
     * The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.
     */
    readonly zoneId: pulumi.Output<string | undefined>;
    /**
     * Create a CustomCsr resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CustomCsrArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering CustomCsr resources.
 */
export interface CustomCsrState {
    /**
     * The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.
     */
    accountId?: pulumi.Input<string | undefined>;
    /**
     * Account identifier associated with this CSR.
     */
    accountTag?: pulumi.Input<string | undefined>;
    /**
     * The common name (domain) for the CSR. Must be at most 64 characters.
     */
    commonName?: pulumi.Input<string | undefined>;
    /**
     * Two-letter ISO 3166-1 alpha-2 country code.
     */
    country?: pulumi.Input<string | undefined>;
    /**
     * When the CSR was created.
     */
    createdAt?: pulumi.Input<string | undefined>;
    /**
     * The PEM-encoded Certificate Signing Request.
     */
    csr?: pulumi.Input<string | undefined>;
    /**
     * Optional description for the CSR.
     */
    description?: pulumi.Input<string | undefined>;
    /**
     * Key algorithm to use for the CSR. Defaults to rsa2048 if not specified.
     * Available values: "rsa2048", "p256v1".
     */
    keyType?: pulumi.Input<string | undefined>;
    /**
     * City or locality name.
     */
    locality?: pulumi.Input<string | undefined>;
    /**
     * Human-readable name for the CSR.
     */
    name?: pulumi.Input<string | undefined>;
    /**
     * Organization name.
     */
    organization?: pulumi.Input<string | undefined>;
    /**
     * Organizational unit name.
     */
    organizationalUnit?: pulumi.Input<string | undefined>;
    /**
     * Subject Alternative Names for the CSR. At least one SAN is required.
     */
    sans?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * State or province name.
     */
    state?: pulumi.Input<string | undefined>;
    /**
     * The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.
     */
    zoneId?: pulumi.Input<string | undefined>;
}
/**
 * The set of arguments for constructing a CustomCsr resource.
 */
export interface CustomCsrArgs {
    /**
     * The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.
     */
    accountId?: pulumi.Input<string | undefined>;
    /**
     * The common name (domain) for the CSR. Must be at most 64 characters.
     */
    commonName: pulumi.Input<string>;
    /**
     * Two-letter ISO 3166-1 alpha-2 country code.
     */
    country: pulumi.Input<string>;
    /**
     * Optional description for the CSR.
     */
    description?: pulumi.Input<string | undefined>;
    /**
     * Key algorithm to use for the CSR. Defaults to rsa2048 if not specified.
     * Available values: "rsa2048", "p256v1".
     */
    keyType?: pulumi.Input<string | undefined>;
    /**
     * City or locality name.
     */
    locality: pulumi.Input<string>;
    /**
     * Human-readable name for the CSR.
     */
    name?: pulumi.Input<string | undefined>;
    /**
     * Organization name.
     */
    organization: pulumi.Input<string>;
    /**
     * Organizational unit name.
     */
    organizationalUnit?: pulumi.Input<string | undefined>;
    /**
     * Subject Alternative Names for the CSR. At least one SAN is required.
     */
    sans: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * State or province name.
     */
    state: pulumi.Input<string>;
    /**
     * The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.
     */
    zoneId?: pulumi.Input<string | undefined>;
}
//# sourceMappingURL=customCsr.d.ts.map