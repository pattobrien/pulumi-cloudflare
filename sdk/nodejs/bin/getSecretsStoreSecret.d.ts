import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
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
 * const exampleSecretsStoreSecret = cloudflare.getSecretsStoreSecret({
 *     accountId: "985e105f4ecef8ad9ca31a8372d0c353",
 *     storeId: "023e105f4ecef8ad9ca31a8372d0c353",
 *     secretId: "3fd85f74b32742f1bff64a85009dda07",
 * });
 * ```
 */
export declare function getSecretsStoreSecret(args: GetSecretsStoreSecretArgs, opts?: pulumi.InvokeOptions): Promise<GetSecretsStoreSecretResult>;
/**
 * A collection of arguments for invoking getSecretsStoreSecret.
 */
export interface GetSecretsStoreSecretArgs {
    accountId: string;
    filter?: inputs.GetSecretsStoreSecretFilter;
    secretId?: string;
    storeId: string;
}
/**
 * A collection of values returned by getSecretsStoreSecret.
 */
export interface GetSecretsStoreSecretResult {
    readonly accountId: string;
    /**
     * Freeform text describing the secret.
     */
    readonly comment: string;
    /**
     * When the secret was created.
     */
    readonly created: string;
    readonly filter?: outputs.GetSecretsStoreSecretFilter;
    /**
     * The ID of this resource.
     */
    readonly id: string;
    /**
     * When the secret was modified.
     */
    readonly modified: string;
    /**
     * The name of the secret.
     */
    readonly name: string;
    /**
     * The list of services that can use this secret.
     */
    readonly scopes: string[];
    readonly secretId?: string;
    /**
     * Available values: "pending", "active", "deleted".
     */
    readonly status: string;
    readonly storeId: string;
}
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
 * const exampleSecretsStoreSecret = cloudflare.getSecretsStoreSecret({
 *     accountId: "985e105f4ecef8ad9ca31a8372d0c353",
 *     storeId: "023e105f4ecef8ad9ca31a8372d0c353",
 *     secretId: "3fd85f74b32742f1bff64a85009dda07",
 * });
 * ```
 */
export declare function getSecretsStoreSecretOutput(args: GetSecretsStoreSecretOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSecretsStoreSecretResult>;
/**
 * A collection of arguments for invoking getSecretsStoreSecret.
 */
export interface GetSecretsStoreSecretOutputArgs {
    accountId: pulumi.Input<string>;
    filter?: pulumi.Input<inputs.GetSecretsStoreSecretFilterArgs | undefined>;
    secretId?: pulumi.Input<string | undefined>;
    storeId: pulumi.Input<string>;
}
//# sourceMappingURL=getSecretsStoreSecret.d.ts.map