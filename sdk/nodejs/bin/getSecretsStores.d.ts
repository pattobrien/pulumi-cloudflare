import * as pulumi from "@pulumi/pulumi";
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
 * const exampleSecretsStores = cloudflare.getSecretsStores({
 *     accountId: "985e105f4ecef8ad9ca31a8372d0c353",
 * });
 * ```
 */
export declare function getSecretsStores(args: GetSecretsStoresArgs, opts?: pulumi.InvokeOptions): Promise<GetSecretsStoresResult>;
/**
 * A collection of arguments for invoking getSecretsStores.
 */
export interface GetSecretsStoresArgs {
    accountId: string;
    /**
     * Direction to sort objects.
     * Available values: "asc", "desc".
     */
    direction?: string;
    /**
     * Max items to fetch, default: 1000
     */
    maxItems?: number;
    /**
     * Order stores by values in the given field.
     * Available values: "name", "created", "modified".
     */
    order?: string;
}
/**
 * A collection of values returned by getSecretsStores.
 */
export interface GetSecretsStoresResult {
    readonly accountId: string;
    /**
     * Direction to sort objects.
     * Available values: "asc", "desc".
     */
    readonly direction: string;
    /**
     * Max items to fetch, default: 1000
     */
    readonly maxItems?: number;
    /**
     * Order stores by values in the given field.
     * Available values: "name", "created", "modified".
     */
    readonly order: string;
    /**
     * The items returned by the data source
     */
    readonly results: outputs.GetSecretsStoresResult[];
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
 * const exampleSecretsStores = cloudflare.getSecretsStores({
 *     accountId: "985e105f4ecef8ad9ca31a8372d0c353",
 * });
 * ```
 */
export declare function getSecretsStoresOutput(args: GetSecretsStoresOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSecretsStoresResult>;
/**
 * A collection of arguments for invoking getSecretsStores.
 */
export interface GetSecretsStoresOutputArgs {
    accountId: pulumi.Input<string>;
    /**
     * Direction to sort objects.
     * Available values: "asc", "desc".
     */
    direction?: pulumi.Input<string | undefined>;
    /**
     * Max items to fetch, default: 1000
     */
    maxItems?: pulumi.Input<number | undefined>;
    /**
     * Order stores by values in the given field.
     * Available values: "name", "created", "modified".
     */
    order?: pulumi.Input<string | undefined>;
}
//# sourceMappingURL=getSecretsStores.d.ts.map