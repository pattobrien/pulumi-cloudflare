import * as pulumi from "@pulumi/pulumi";
/**
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as cloudflare from "@pulumi/cloudflare";
 *
 * const exampleShareResource = new cloudflare.ShareResource("example_share_resource", {
 *     accountId: "023e105f4ecef8ad9ca31a8372d0c353",
 *     shareId: "3fd85f74b32742f1bff64a85009dda07",
 *     meta: {},
 *     resourceAccountId: "023e105f4ecef8ad9ca31a8372d0c353",
 *     resourceId: "023e105f4ecef8ad9ca31a8372d0c353",
 *     resourceType: "custom-ruleset",
 * });
 * ```
 *
 * ## Import
 *
 * ```sh
 * $ pulumi import cloudflare:index/shareResource:ShareResource example '<account_id>/<share_id>/<share_resource_id>'
 * ```
 */
export declare class ShareResource extends pulumi.CustomResource {
    /**
     * Get an existing ShareResource resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ShareResourceState, opts?: pulumi.CustomResourceOptions): ShareResource;
    /**
     * Returns true if the given object is an instance of ShareResource.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ShareResource;
    /**
     * Account identifier.
     */
    readonly accountId: pulumi.Output<string>;
    /**
     * When the share was created.
     */
    readonly created: pulumi.Output<string>;
    /**
     * Resource Metadata.
     */
    readonly meta: pulumi.Output<string>;
    /**
     * When the share was modified.
     */
    readonly modified: pulumi.Output<string>;
    /**
     * Account identifier.
     */
    readonly resourceAccountId: pulumi.Output<string>;
    /**
     * Share Resource identifier.
     */
    readonly resourceId: pulumi.Output<string>;
    /**
     * Resource Type.
     * Available values: "custom-ruleset", "gateway-policy", "gateway-destination-ip", "gateway-block-page-settings", "gateway-extended-email-matching", "idp-federation-grant".
     */
    readonly resourceType: pulumi.Output<string>;
    /**
     * Resource Version.
     */
    readonly resourceVersion: pulumi.Output<number>;
    /**
     * Share identifier tag.
     */
    readonly shareId: pulumi.Output<string>;
    /**
     * Resource Status.
     * Available values: "active", "deleting", "deleted".
     */
    readonly status: pulumi.Output<string>;
    /**
     * Create a ShareResource resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ShareResourceArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering ShareResource resources.
 */
export interface ShareResourceState {
    /**
     * Account identifier.
     */
    accountId?: pulumi.Input<string | undefined>;
    /**
     * When the share was created.
     */
    created?: pulumi.Input<string | undefined>;
    /**
     * Resource Metadata.
     */
    meta?: pulumi.Input<string | undefined>;
    /**
     * When the share was modified.
     */
    modified?: pulumi.Input<string | undefined>;
    /**
     * Account identifier.
     */
    resourceAccountId?: pulumi.Input<string | undefined>;
    /**
     * Share Resource identifier.
     */
    resourceId?: pulumi.Input<string | undefined>;
    /**
     * Resource Type.
     * Available values: "custom-ruleset", "gateway-policy", "gateway-destination-ip", "gateway-block-page-settings", "gateway-extended-email-matching", "idp-federation-grant".
     */
    resourceType?: pulumi.Input<string | undefined>;
    /**
     * Resource Version.
     */
    resourceVersion?: pulumi.Input<number | undefined>;
    /**
     * Share identifier tag.
     */
    shareId?: pulumi.Input<string | undefined>;
    /**
     * Resource Status.
     * Available values: "active", "deleting", "deleted".
     */
    status?: pulumi.Input<string | undefined>;
}
/**
 * The set of arguments for constructing a ShareResource resource.
 */
export interface ShareResourceArgs {
    /**
     * Account identifier.
     */
    accountId: pulumi.Input<string>;
    /**
     * Resource Metadata.
     */
    meta: pulumi.Input<string>;
    /**
     * Account identifier.
     */
    resourceAccountId: pulumi.Input<string>;
    /**
     * Share Resource identifier.
     */
    resourceId: pulumi.Input<string>;
    /**
     * Resource Type.
     * Available values: "custom-ruleset", "gateway-policy", "gateway-destination-ip", "gateway-block-page-settings", "gateway-extended-email-matching", "idp-federation-grant".
     */
    resourceType: pulumi.Input<string>;
    /**
     * Share identifier tag.
     */
    shareId: pulumi.Input<string>;
}
//# sourceMappingURL=shareResource.d.ts.map