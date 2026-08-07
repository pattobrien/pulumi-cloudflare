import * as pulumi from "@pulumi/pulumi";
/**
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as cloudflare from "@pulumi/cloudflare";
 *
 * const exampleZeroTrustResourceLibraryCategory = cloudflare.getZeroTrustResourceLibraryCategory({
 *     accountId: "023e105f4ecef8ad9ca31a8372d0c353",
 *     id: "0b63249c-95bf-4cc0-a7cc-d7faaaf1dac0",
 * });
 * ```
 */
export declare function getZeroTrustResourceLibraryCategory(args: GetZeroTrustResourceLibraryCategoryArgs, opts?: pulumi.InvokeOptions): Promise<GetZeroTrustResourceLibraryCategoryResult>;
/**
 * A collection of arguments for invoking getZeroTrustResourceLibraryCategory.
 */
export interface GetZeroTrustResourceLibraryCategoryArgs {
    accountId: string;
    /**
     * The ID of this resource.
     */
    id: string;
}
/**
 * A collection of values returned by getZeroTrustResourceLibraryCategory.
 */
export interface GetZeroTrustResourceLibraryCategoryResult {
    readonly accountId: string;
    /**
     * Returns the category creation time.
     */
    readonly createdAt: string;
    /**
     * Returns the category description.
     */
    readonly description: string;
    /**
     * The ID of this resource.
     */
    readonly id: string;
    /**
     * Returns the category name.
     */
    readonly name: string;
}
/**
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as cloudflare from "@pulumi/cloudflare";
 *
 * const exampleZeroTrustResourceLibraryCategory = cloudflare.getZeroTrustResourceLibraryCategory({
 *     accountId: "023e105f4ecef8ad9ca31a8372d0c353",
 *     id: "0b63249c-95bf-4cc0-a7cc-d7faaaf1dac0",
 * });
 * ```
 */
export declare function getZeroTrustResourceLibraryCategoryOutput(args: GetZeroTrustResourceLibraryCategoryOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetZeroTrustResourceLibraryCategoryResult>;
/**
 * A collection of arguments for invoking getZeroTrustResourceLibraryCategory.
 */
export interface GetZeroTrustResourceLibraryCategoryOutputArgs {
    accountId: pulumi.Input<string>;
    /**
     * The ID of this resource.
     */
    id: pulumi.Input<string>;
}
//# sourceMappingURL=getZeroTrustResourceLibraryCategory.d.ts.map