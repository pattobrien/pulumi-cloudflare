import * as pulumi from "@pulumi/pulumi";
/**
 * ## Import
 *
 * > This resource does not currently support `pulumi import`.
 */
export declare class AiSearchNamespace extends pulumi.CustomResource {
    /**
     * Get an existing AiSearchNamespace resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AiSearchNamespaceState, opts?: pulumi.CustomResourceOptions): AiSearchNamespace;
    /**
     * Returns true if the given object is an instance of AiSearchNamespace.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is AiSearchNamespace;
    readonly accountId: pulumi.Output<string>;
    readonly createdAt: pulumi.Output<string>;
    /**
     * Optional description for the namespace. Max 256 characters.
     */
    readonly description: pulumi.Output<string | undefined>;
    readonly name: pulumi.Output<string>;
    /**
     * Create a AiSearchNamespace resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AiSearchNamespaceArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering AiSearchNamespace resources.
 */
export interface AiSearchNamespaceState {
    accountId?: pulumi.Input<string | undefined>;
    createdAt?: pulumi.Input<string | undefined>;
    /**
     * Optional description for the namespace. Max 256 characters.
     */
    description?: pulumi.Input<string | undefined>;
    name?: pulumi.Input<string | undefined>;
}
/**
 * The set of arguments for constructing a AiSearchNamespace resource.
 */
export interface AiSearchNamespaceArgs {
    accountId: pulumi.Input<string>;
    /**
     * Optional description for the namespace. Max 256 characters.
     */
    description?: pulumi.Input<string | undefined>;
    name: pulumi.Input<string>;
}
//# sourceMappingURL=aiSearchNamespace.d.ts.map