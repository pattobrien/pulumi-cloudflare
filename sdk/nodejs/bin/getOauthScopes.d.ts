import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
/**
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as cloudflare from "@pulumi/cloudflare";
 *
 * const exampleOauthScopes = cloudflare.getOauthScopes({});
 * ```
 */
export declare function getOauthScopes(args?: GetOauthScopesArgs, opts?: pulumi.InvokeOptions): Promise<GetOauthScopesResult>;
/**
 * A collection of arguments for invoking getOauthScopes.
 */
export interface GetOauthScopesArgs {
    /**
     * Max items to fetch, default: 1000
     */
    maxItems?: number;
}
/**
 * A collection of values returned by getOauthScopes.
 */
export interface GetOauthScopesResult {
    /**
     * Max items to fetch, default: 1000
     */
    readonly maxItems?: number;
    /**
     * The items returned by the data source
     */
    readonly results: outputs.GetOauthScopesResult[];
}
/**
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as cloudflare from "@pulumi/cloudflare";
 *
 * const exampleOauthScopes = cloudflare.getOauthScopes({});
 * ```
 */
export declare function getOauthScopesOutput(args?: GetOauthScopesOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetOauthScopesResult>;
/**
 * A collection of arguments for invoking getOauthScopes.
 */
export interface GetOauthScopesOutputArgs {
    /**
     * Max items to fetch, default: 1000
     */
    maxItems?: pulumi.Input<number | undefined>;
}
//# sourceMappingURL=getOauthScopes.d.ts.map