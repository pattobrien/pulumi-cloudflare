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
 * const exampleGoogleTagGateway = new cloudflare.GoogleTagGateway("example_google_tag_gateway", {
 *     zoneId: "023e105f4ecef8ad9ca31a8372d0c353",
 *     enabled: true,
 *     endpoint: "/metrics",
 *     hideOriginalIp: true,
 *     measurementId: "GTM-P2F3N47Q",
 *     setUpTag: true,
 * });
 * ```
 *
 * ## Import
 *
 * ```sh
 * $ pulumi import cloudflare:index/googleTagGateway:GoogleTagGateway example '<zone_id>'
 * ```
 */
export declare class GoogleTagGateway extends pulumi.CustomResource {
    /**
     * Get an existing GoogleTagGateway resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: GoogleTagGatewayState, opts?: pulumi.CustomResourceOptions): GoogleTagGateway;
    /**
     * Returns true if the given object is an instance of GoogleTagGateway.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is GoogleTagGateway;
    /**
     * Enables or disables Google Tag Gateway for this zone.
     */
    readonly enabled: pulumi.Output<boolean>;
    /**
     * Specifies the endpoint path for proxying Google Tag Manager requests. Use an absolute path starting with '/', with no nested paths and alphanumeric characters only (e.g. /metrics).
     */
    readonly endpoint: pulumi.Output<string>;
    /**
     * Hides the original client IP address from Google when enabled.
     */
    readonly hideOriginalIp: pulumi.Output<boolean>;
    /**
     * Specify the Google Tag Manager container or measurement ID (e.g. GTM-XXXXXXX or G-XXXXXXXXXX).
     */
    readonly measurementId: pulumi.Output<string>;
    /**
     * Set up the associated Google Tag on the zone automatically when enabled.
     */
    readonly setUpTag: pulumi.Output<boolean | undefined>;
    /**
     * Identifier.
     */
    readonly zoneId: pulumi.Output<string>;
    /**
     * Create a GoogleTagGateway resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: GoogleTagGatewayArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering GoogleTagGateway resources.
 */
export interface GoogleTagGatewayState {
    /**
     * Enables or disables Google Tag Gateway for this zone.
     */
    enabled?: pulumi.Input<boolean | undefined>;
    /**
     * Specifies the endpoint path for proxying Google Tag Manager requests. Use an absolute path starting with '/', with no nested paths and alphanumeric characters only (e.g. /metrics).
     */
    endpoint?: pulumi.Input<string | undefined>;
    /**
     * Hides the original client IP address from Google when enabled.
     */
    hideOriginalIp?: pulumi.Input<boolean | undefined>;
    /**
     * Specify the Google Tag Manager container or measurement ID (e.g. GTM-XXXXXXX or G-XXXXXXXXXX).
     */
    measurementId?: pulumi.Input<string | undefined>;
    /**
     * Set up the associated Google Tag on the zone automatically when enabled.
     */
    setUpTag?: pulumi.Input<boolean | undefined>;
    /**
     * Identifier.
     */
    zoneId?: pulumi.Input<string | undefined>;
}
/**
 * The set of arguments for constructing a GoogleTagGateway resource.
 */
export interface GoogleTagGatewayArgs {
    /**
     * Enables or disables Google Tag Gateway for this zone.
     */
    enabled: pulumi.Input<boolean>;
    /**
     * Specifies the endpoint path for proxying Google Tag Manager requests. Use an absolute path starting with '/', with no nested paths and alphanumeric characters only (e.g. /metrics).
     */
    endpoint: pulumi.Input<string>;
    /**
     * Hides the original client IP address from Google when enabled.
     */
    hideOriginalIp: pulumi.Input<boolean>;
    /**
     * Specify the Google Tag Manager container or measurement ID (e.g. GTM-XXXXXXX or G-XXXXXXXXXX).
     */
    measurementId: pulumi.Input<string>;
    /**
     * Set up the associated Google Tag on the zone automatically when enabled.
     */
    setUpTag?: pulumi.Input<boolean | undefined>;
    /**
     * Identifier.
     */
    zoneId: pulumi.Input<string>;
}
//# sourceMappingURL=googleTagGateway.d.ts.map