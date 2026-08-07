import * as pulumi from "@pulumi/pulumi";
/**
 * Accepted Permissions
 *
 * - `Flagship Read`
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as cloudflare from "@pulumi/cloudflare";
 *
 * const exampleFlagshipApp = cloudflare.getFlagshipApp({
 *     accountId: "account_id",
 *     appId: "app_id",
 * });
 * ```
 */
export declare function getFlagshipApp(args: GetFlagshipAppArgs, opts?: pulumi.InvokeOptions): Promise<GetFlagshipAppResult>;
/**
 * A collection of arguments for invoking getFlagshipApp.
 */
export interface GetFlagshipAppArgs {
    /**
     * Cloudflare account ID.
     */
    accountId: string;
    /**
     * App identifier.
     */
    appId: string;
}
/**
 * A collection of values returned by getFlagshipApp.
 */
export interface GetFlagshipAppResult {
    /**
     * Cloudflare account ID.
     */
    readonly accountId: string;
    /**
     * App identifier.
     */
    readonly appId: string;
    readonly createdAt: string;
    /**
     * App identifier.
     */
    readonly id: string;
    readonly name: string;
    readonly updatedAt: string;
    /**
     * Email of the actor who last modified the app, or `edge-gateway` for gateway-authenticated changes.
     */
    readonly updatedBy: string;
}
/**
 * Accepted Permissions
 *
 * - `Flagship Read`
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as cloudflare from "@pulumi/cloudflare";
 *
 * const exampleFlagshipApp = cloudflare.getFlagshipApp({
 *     accountId: "account_id",
 *     appId: "app_id",
 * });
 * ```
 */
export declare function getFlagshipAppOutput(args: GetFlagshipAppOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetFlagshipAppResult>;
/**
 * A collection of arguments for invoking getFlagshipApp.
 */
export interface GetFlagshipAppOutputArgs {
    /**
     * Cloudflare account ID.
     */
    accountId: pulumi.Input<string>;
    /**
     * App identifier.
     */
    appId: pulumi.Input<string>;
}
//# sourceMappingURL=getFlagshipApp.d.ts.map