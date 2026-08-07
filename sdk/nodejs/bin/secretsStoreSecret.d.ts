import * as pulumi from "@pulumi/pulumi";
/**
 * Accepted Permissions
 *
 * - `Secrets Store Read`
 * - `Secrets Store Write`
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as cloudflare from "@pulumi/cloudflare";
 *
 * const exampleSecretsStoreSecret = new cloudflare.SecretsStoreSecret("example_secrets_store_secret", {
 *     accountId: "985e105f4ecef8ad9ca31a8372d0c353",
 *     storeId: "023e105f4ecef8ad9ca31a8372d0c353",
 * });
 * ```
 *
 * ## Import
 *
 * ```sh
 * $ pulumi import cloudflare:index/secretsStoreSecret:SecretsStoreSecret example '<account_id>/<store_id>/<secret_id>'
 * ```
 */
export declare class SecretsStoreSecret extends pulumi.CustomResource {
    /**
     * Get an existing SecretsStoreSecret resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SecretsStoreSecretState, opts?: pulumi.CustomResourceOptions): SecretsStoreSecret;
    /**
     * Returns true if the given object is an instance of SecretsStoreSecret.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is SecretsStoreSecret;
    /**
     * Account Identifier
     */
    readonly accountId: pulumi.Output<string>;
    /**
     * Freeform text describing the secret.
     */
    readonly comment: pulumi.Output<string | undefined>;
    /**
     * When the secret was created.
     */
    readonly created: pulumi.Output<string>;
    /**
     * When the secret was modified.
     */
    readonly modified: pulumi.Output<string>;
    /**
     * The name of the secret
     */
    readonly name: pulumi.Output<string>;
    /**
     * The list of services that can use this secret.
     */
    readonly scopes: pulumi.Output<string[]>;
    /**
     * Available values: "pending", "active", "deleted".
     */
    readonly status: pulumi.Output<string>;
    /**
     * Store Identifier
     */
    readonly storeId: pulumi.Output<string>;
    /**
     * The value of the secret. Maximum 64 KiB (65,536 bytes). Note that this is 'write only' - no API response will provide this value, it is only used to create/modify secrets.
     */
    readonly value: pulumi.Output<string>;
    /**
     * Create a SecretsStoreSecret resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SecretsStoreSecretArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering SecretsStoreSecret resources.
 */
export interface SecretsStoreSecretState {
    /**
     * Account Identifier
     */
    accountId?: pulumi.Input<string | undefined>;
    /**
     * Freeform text describing the secret.
     */
    comment?: pulumi.Input<string | undefined>;
    /**
     * When the secret was created.
     */
    created?: pulumi.Input<string | undefined>;
    /**
     * When the secret was modified.
     */
    modified?: pulumi.Input<string | undefined>;
    /**
     * The name of the secret
     */
    name?: pulumi.Input<string | undefined>;
    /**
     * The list of services that can use this secret.
     */
    scopes?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * Available values: "pending", "active", "deleted".
     */
    status?: pulumi.Input<string | undefined>;
    /**
     * Store Identifier
     */
    storeId?: pulumi.Input<string | undefined>;
    /**
     * The value of the secret. Maximum 64 KiB (65,536 bytes). Note that this is 'write only' - no API response will provide this value, it is only used to create/modify secrets.
     */
    value?: pulumi.Input<string | undefined>;
}
/**
 * The set of arguments for constructing a SecretsStoreSecret resource.
 */
export interface SecretsStoreSecretArgs {
    /**
     * Account Identifier
     */
    accountId: pulumi.Input<string>;
    /**
     * Freeform text describing the secret.
     */
    comment?: pulumi.Input<string | undefined>;
    /**
     * The name of the secret
     */
    name: pulumi.Input<string>;
    /**
     * The list of services that can use this secret.
     */
    scopes: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Store Identifier
     */
    storeId: pulumi.Input<string>;
    /**
     * The value of the secret. Maximum 64 KiB (65,536 bytes). Note that this is 'write only' - no API response will provide this value, it is only used to create/modify secrets.
     */
    value: pulumi.Input<string>;
}
//# sourceMappingURL=secretsStoreSecret.d.ts.map