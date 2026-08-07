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
 * const exampleShareRecipient = new cloudflare.ShareRecipient("example_share_recipient", {
 *     accountId: "023e105f4ecef8ad9ca31a8372d0c353",
 *     shareId: "3fd85f74b32742f1bff64a85009dda07",
 *     organizationId: "023e105f4ecef8ad9ca31a8372d0c353",
 *     recipientAccountId: "023e105f4ecef8ad9ca31a8372d0c353",
 * });
 * ```
 *
 * ## Import
 *
 * ```sh
 * $ pulumi import cloudflare:index/shareRecipient:ShareRecipient example '<account_id>/<share_id>/<recipient_id>'
 * ```
 */
export declare class ShareRecipient extends pulumi.CustomResource {
    /**
     * Get an existing ShareRecipient resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ShareRecipientState, opts?: pulumi.CustomResourceOptions): ShareRecipient;
    /**
     * Returns true if the given object is an instance of ShareRecipient.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ShareRecipient;
    /**
     * Account identifier.
     */
    readonly accountId: pulumi.Output<string>;
    /**
     * Share Recipient association status.
     * Available values: "associating", "associated", "disassociating", "disassociated".
     */
    readonly associationStatus: pulumi.Output<string>;
    /**
     * When the share was created.
     */
    readonly created: pulumi.Output<string>;
    /**
     * When the share was modified.
     */
    readonly modified: pulumi.Output<string>;
    /**
     * Organization identifier.
     */
    readonly organizationId: pulumi.Output<string | undefined>;
    /**
     * The account that will receive the share.
     */
    readonly recipientAccountId: pulumi.Output<string | undefined>;
    readonly resources: pulumi.Output<outputs.ShareRecipientResource[]>;
    /**
     * Share identifier tag.
     */
    readonly shareId: pulumi.Output<string>;
    /**
     * Create a ShareRecipient resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ShareRecipientArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering ShareRecipient resources.
 */
export interface ShareRecipientState {
    /**
     * Account identifier.
     */
    accountId?: pulumi.Input<string | undefined>;
    /**
     * Share Recipient association status.
     * Available values: "associating", "associated", "disassociating", "disassociated".
     */
    associationStatus?: pulumi.Input<string | undefined>;
    /**
     * When the share was created.
     */
    created?: pulumi.Input<string | undefined>;
    /**
     * When the share was modified.
     */
    modified?: pulumi.Input<string | undefined>;
    /**
     * Organization identifier.
     */
    organizationId?: pulumi.Input<string | undefined>;
    /**
     * The account that will receive the share.
     */
    recipientAccountId?: pulumi.Input<string | undefined>;
    resources?: pulumi.Input<pulumi.Input<inputs.ShareRecipientResource>[] | undefined>;
    /**
     * Share identifier tag.
     */
    shareId?: pulumi.Input<string | undefined>;
}
/**
 * The set of arguments for constructing a ShareRecipient resource.
 */
export interface ShareRecipientArgs {
    /**
     * Account identifier.
     */
    accountId: pulumi.Input<string>;
    /**
     * Organization identifier.
     */
    organizationId?: pulumi.Input<string | undefined>;
    /**
     * The account that will receive the share.
     */
    recipientAccountId?: pulumi.Input<string | undefined>;
    /**
     * Share identifier tag.
     */
    shareId: pulumi.Input<string>;
}
//# sourceMappingURL=shareRecipient.d.ts.map