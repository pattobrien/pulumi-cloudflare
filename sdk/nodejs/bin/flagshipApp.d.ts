import * as pulumi from "@pulumi/pulumi";
/**
 * Accepted Permissions
 *
 * - `Flagship Read`
 * - `Flagship Write`
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as cloudflare from "@pulumi/cloudflare";
 *
 * const exampleFlagshipApp = new cloudflare.FlagshipApp("example_flagship_app", {
 *     accountId: "account_id",
 *     name: "x",
 * });
 * ```
 *
 * ## Import
 *
 * ```sh
 * $ pulumi import cloudflare:index/flagshipApp:FlagshipApp example '<account_id>/<app_id>'
 * ```
 */
export declare class FlagshipApp extends pulumi.CustomResource {
    /**
     * Get an existing FlagshipApp resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: FlagshipAppState, opts?: pulumi.CustomResourceOptions): FlagshipApp;
    /**
     * Returns true if the given object is an instance of FlagshipApp.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is FlagshipApp;
    /**
     * Cloudflare account ID.
     */
    readonly accountId: pulumi.Output<string>;
    readonly createdAt: pulumi.Output<string>;
    readonly name: pulumi.Output<string>;
    readonly updatedAt: pulumi.Output<string>;
    /**
     * Email of the actor who last modified the app, or `edge-gateway` for gateway-authenticated changes.
     */
    readonly updatedBy: pulumi.Output<string>;
    /**
     * Create a FlagshipApp resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: FlagshipAppArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering FlagshipApp resources.
 */
export interface FlagshipAppState {
    /**
     * Cloudflare account ID.
     */
    accountId?: pulumi.Input<string | undefined>;
    createdAt?: pulumi.Input<string | undefined>;
    name?: pulumi.Input<string | undefined>;
    updatedAt?: pulumi.Input<string | undefined>;
    /**
     * Email of the actor who last modified the app, or `edge-gateway` for gateway-authenticated changes.
     */
    updatedBy?: pulumi.Input<string | undefined>;
}
/**
 * The set of arguments for constructing a FlagshipApp resource.
 */
export interface FlagshipAppArgs {
    /**
     * Cloudflare account ID.
     */
    accountId: pulumi.Input<string>;
    name: pulumi.Input<string>;
}
//# sourceMappingURL=flagshipApp.d.ts.map