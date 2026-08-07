import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getAiSearchNamespaces(args: GetAiSearchNamespacesArgs, opts?: pulumi.InvokeOptions): Promise<GetAiSearchNamespacesResult>;
/**
 * A collection of arguments for invoking getAiSearchNamespaces.
 */
export interface GetAiSearchNamespacesArgs {
    accountId: string;
    /**
     * Max items to fetch, default: 1000
     */
    maxItems?: number;
    /**
     * Filter namespaces whose name or description contains this string (case-insensitive).
     */
    search?: string;
}
/**
 * A collection of values returned by getAiSearchNamespaces.
 */
export interface GetAiSearchNamespacesResult {
    readonly accountId: string;
    /**
     * Max items to fetch, default: 1000
     */
    readonly maxItems?: number;
    /**
     * The items returned by the data source
     */
    readonly results: outputs.GetAiSearchNamespacesResult[];
    /**
     * Filter namespaces whose name or description contains this string (case-insensitive).
     */
    readonly search?: string;
}
export declare function getAiSearchNamespacesOutput(args: GetAiSearchNamespacesOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetAiSearchNamespacesResult>;
/**
 * A collection of arguments for invoking getAiSearchNamespaces.
 */
export interface GetAiSearchNamespacesOutputArgs {
    accountId: pulumi.Input<string>;
    /**
     * Max items to fetch, default: 1000
     */
    maxItems?: pulumi.Input<number | undefined>;
    /**
     * Filter namespaces whose name or description contains this string (case-insensitive).
     */
    search?: pulumi.Input<string | undefined>;
}
//# sourceMappingURL=getAiSearchNamespaces.d.ts.map