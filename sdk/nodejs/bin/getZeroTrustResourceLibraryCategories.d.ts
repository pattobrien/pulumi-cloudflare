import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getZeroTrustResourceLibraryCategories(args: GetZeroTrustResourceLibraryCategoriesArgs, opts?: pulumi.InvokeOptions): Promise<GetZeroTrustResourceLibraryCategoriesResult>;
/**
 * A collection of arguments for invoking getZeroTrustResourceLibraryCategories.
 */
export interface GetZeroTrustResourceLibraryCategoriesArgs {
    accountId: string;
    /**
     * Limit of number of results to return.
     */
    limit?: number;
    /**
     * Max items to fetch, default: 1000
     */
    maxItems?: number;
    /**
     * Offset of results to return.
     */
    offset?: number;
}
/**
 * A collection of values returned by getZeroTrustResourceLibraryCategories.
 */
export interface GetZeroTrustResourceLibraryCategoriesResult {
    readonly accountId: string;
    /**
     * Limit of number of results to return.
     */
    readonly limit: number;
    /**
     * Max items to fetch, default: 1000
     */
    readonly maxItems?: number;
    /**
     * Offset of results to return.
     */
    readonly offset: number;
    /**
     * The items returned by the data source
     */
    readonly results: outputs.GetZeroTrustResourceLibraryCategoriesResult[];
}
export declare function getZeroTrustResourceLibraryCategoriesOutput(args: GetZeroTrustResourceLibraryCategoriesOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetZeroTrustResourceLibraryCategoriesResult>;
/**
 * A collection of arguments for invoking getZeroTrustResourceLibraryCategories.
 */
export interface GetZeroTrustResourceLibraryCategoriesOutputArgs {
    accountId: pulumi.Input<string>;
    /**
     * Limit of number of results to return.
     */
    limit?: pulumi.Input<number | undefined>;
    /**
     * Max items to fetch, default: 1000
     */
    maxItems?: pulumi.Input<number | undefined>;
    /**
     * Offset of results to return.
     */
    offset?: pulumi.Input<number | undefined>;
}
//# sourceMappingURL=getZeroTrustResourceLibraryCategories.d.ts.map