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
 * const exampleSecretsStore = cloudflare.getSecretsStore({
 *     accountId: "985e105f4ecef8ad9ca31a8372d0c353",
 *     storeId: "023e105f4ecef8ad9ca31a8372d0c353",
 * });
 * ```
 */
export declare function getSecretsStore(args: GetSecretsStoreArgs, opts?: pulumi.InvokeOptions): Promise<GetSecretsStoreResult>;
/**
 * A collection of arguments for invoking getSecretsStore.
 */
export interface GetSecretsStoreArgs {
    accountId: string;
    filter?: inputs.GetSecretsStoreFilter;
    storeId?: string;
}
/**
 * A collection of values returned by getSecretsStore.
 */
export interface GetSecretsStoreResult {
    readonly accountId: string;
    /**
     * When the secret was created.
     */
    readonly created: string;
    readonly filter?: outputs.GetSecretsStoreFilter;
    /**
     * The ID of this resource.
     */
    readonly id: string;
    /**
     * When the secret was modified.
     */
    readonly modified: string;
    /**
     * The name of the store.
     */
    readonly name: string;
    readonly storeId?: string;
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
 * const exampleSecretsStore = cloudflare.getSecretsStore({
 *     accountId: "985e105f4ecef8ad9ca31a8372d0c353",
 *     storeId: "023e105f4ecef8ad9ca31a8372d0c353",
 * });
 * ```
 */
export declare function getSecretsStoreOutput(args: GetSecretsStoreOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSecretsStoreResult>;
/**
 * A collection of arguments for invoking getSecretsStore.
 */
export interface GetSecretsStoreOutputArgs {
    accountId: pulumi.Input<string>;
    filter?: pulumi.Input<inputs.GetSecretsStoreFilterArgs | undefined>;
    storeId?: pulumi.Input<string | undefined>;
}
//# sourceMappingURL=getSecretsStore.d.ts.map