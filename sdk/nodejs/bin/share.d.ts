import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
/**
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as cloudflare from "@pulumi/cloudflare";
 *
 * const exampleShare = new cloudflare.Share("example_share", {
 *     accountId: "023e105f4ecef8ad9ca31a8372d0c353",
 *     name: "My Shared WAF Managed Rule",
 *     recipients: [{
 *         organizationId: "023e105f4ecef8ad9ca31a8372d0c353",
 *         recipientAccountId: "023e105f4ecef8ad9ca31a8372d0c353",
 *     }],
 *     resources: [{
 *         meta: {},
 *         resourceAccountId: "023e105f4ecef8ad9ca31a8372d0c353",
 *         resourceId: "023e105f4ecef8ad9ca31a8372d0c353",
 *         resourceType: "custom-ruleset",
 *     }],
 * });
 * ```
 *
 * ## Import
 *
 * ```sh
 * $ pulumi import cloudflare:index/share:Share example '<account_id>/<share_id>'
 * ```
 */
export declare class Share extends pulumi.CustomResource {
    /**
     * Get an existing Share resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ShareState, opts?: pulumi.CustomResourceOptions): Share;
    /**
     * Returns true if the given object is an instance of Share.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Share;
    /**
     * Account identifier.
     */
    readonly accountId: pulumi.Output<string>;
    /**
     * The display name of an account.
     */
    readonly accountName: pulumi.Output<string>;
    /**
     * The number of recipients in the 'associated' state. This field is only included when requested via the 'include*recipient*counts' parameter.
     */
    readonly associatedRecipientCount: pulumi.Output<number>;
    /**
     * The number of recipients in the 'associating' state. This field is only included when requested via the 'include*recipient*counts' parameter.
     */
    readonly associatingRecipientCount: pulumi.Output<number>;
    /**
     * When the share was created.
     */
    readonly created: pulumi.Output<string>;
    /**
     * The number of recipients in the 'disassociated' state. This field is only included when requested via the 'include*recipient*counts' parameter.
     */
    readonly disassociatedRecipientCount: pulumi.Output<number>;
    /**
     * The number of recipients in the 'disassociating' state. This field is only included when requested via the 'include*recipient*counts' parameter.
     */
    readonly disassociatingRecipientCount: pulumi.Output<number>;
    /**
     * Available values: "sent", "received".
     */
    readonly kind: pulumi.Output<string>;
    /**
     * When the share was modified.
     */
    readonly modified: pulumi.Output<string>;
    /**
     * The name of the share.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Organization identifier.
     */
    readonly organizationId: pulumi.Output<string>;
    readonly recipients: pulumi.Output<outputs.ShareRecipient[]>;
    readonly resources: pulumi.Output<outputs.ShareResource[]>;
    /**
     * Available values: "active", "deleting", "deleted".
     */
    readonly status: pulumi.Output<string>;
    /**
     * Available values: "account", "organization".
     */
    readonly targetType: pulumi.Output<string>;
    /**
     * Create a Share resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ShareArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Share resources.
 */
export interface ShareState {
    /**
     * Account identifier.
     */
    accountId?: pulumi.Input<string | undefined>;
    /**
     * The display name of an account.
     */
    accountName?: pulumi.Input<string | undefined>;
    /**
     * The number of recipients in the 'associated' state. This field is only included when requested via the 'include*recipient*counts' parameter.
     */
    associatedRecipientCount?: pulumi.Input<number | undefined>;
    /**
     * The number of recipients in the 'associating' state. This field is only included when requested via the 'include*recipient*counts' parameter.
     */
    associatingRecipientCount?: pulumi.Input<number | undefined>;
    /**
     * When the share was created.
     */
    created?: pulumi.Input<string | undefined>;
    /**
     * The number of recipients in the 'disassociated' state. This field is only included when requested via the 'include*recipient*counts' parameter.
     */
    disassociatedRecipientCount?: pulumi.Input<number | undefined>;
    /**
     * The number of recipients in the 'disassociating' state. This field is only included when requested via the 'include*recipient*counts' parameter.
     */
    disassociatingRecipientCount?: pulumi.Input<number | undefined>;
    /**
     * Available values: "sent", "received".
     */
    kind?: pulumi.Input<string | undefined>;
    /**
     * When the share was modified.
     */
    modified?: pulumi.Input<string | undefined>;
    /**
     * The name of the share.
     */
    name?: pulumi.Input<string | undefined>;
    /**
     * Organization identifier.
     */
    organizationId?: pulumi.Input<string | undefined>;
    recipients?: pulumi.Input<pulumi.Input<inputs.ShareRecipient>[] | undefined>;
    resources?: pulumi.Input<pulumi.Input<inputs.ShareResource>[] | undefined>;
    /**
     * Available values: "active", "deleting", "deleted".
     */
    status?: pulumi.Input<string | undefined>;
    /**
     * Available values: "account", "organization".
     */
    targetType?: pulumi.Input<string | undefined>;
}
/**
 * The set of arguments for constructing a Share resource.
 */
export interface ShareArgs {
    /**
     * Account identifier.
     */
    accountId: pulumi.Input<string>;
    /**
     * The name of the share.
     */
    name: pulumi.Input<string>;
    recipients: pulumi.Input<pulumi.Input<inputs.ShareRecipient>[]>;
    resources: pulumi.Input<pulumi.Input<inputs.ShareResource>[]>;
}
//# sourceMappingURL=share.d.ts.map