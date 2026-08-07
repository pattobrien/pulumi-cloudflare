import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getAiSearchInstances(args?: GetAiSearchInstancesArgs, opts?: pulumi.InvokeOptions): Promise<GetAiSearchInstancesResult>;
/**
 * A collection of arguments for invoking getAiSearchInstances.
 */
export interface GetAiSearchInstancesArgs {
    accountId?: string;
    /**
     * Max items to fetch, default: 1000
     */
    maxItems?: number;
    /**
     * Filter by namespace.
     */
    namespace?: string;
    /**
     * Field to order results by.
     * Available values: "createdAt".
     */
    orderBy?: string;
    /**
     * Order direction.
     * Available values: "asc", "desc".
     */
    orderByDirection?: string;
    /**
     * Filter instances whose id contains this string (case-insensitive).
     */
    search?: string;
}
/**
 * A collection of values returned by getAiSearchInstances.
 */
export interface GetAiSearchInstancesResult {
    readonly accountId?: string;
    /**
     * Max items to fetch, default: 1000
     */
    readonly maxItems?: number;
    /**
     * Filter by namespace.
     */
    readonly namespace?: string;
    /**
     * Field to order results by.
     * Available values: "createdAt".
     */
    readonly orderBy: string;
    /**
     * Order direction.
     * Available values: "asc", "desc".
     */
    readonly orderByDirection: string;
    /**
     * The items returned by the data source
     */
    readonly results: outputs.GetAiSearchInstancesResult[];
    /**
     * Filter instances whose id contains this string (case-insensitive).
     */
    readonly search?: string;
}
export declare function getAiSearchInstancesOutput(args?: GetAiSearchInstancesOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetAiSearchInstancesResult>;
/**
 * A collection of arguments for invoking getAiSearchInstances.
 */
export interface GetAiSearchInstancesOutputArgs {
    accountId?: pulumi.Input<string | undefined>;
    /**
     * Max items to fetch, default: 1000
     */
    maxItems?: pulumi.Input<number | undefined>;
    /**
     * Filter by namespace.
     */
    namespace?: pulumi.Input<string | undefined>;
    /**
     * Field to order results by.
     * Available values: "createdAt".
     */
    orderBy?: pulumi.Input<string | undefined>;
    /**
     * Order direction.
     * Available values: "asc", "desc".
     */
    orderByDirection?: pulumi.Input<string | undefined>;
    /**
     * Filter instances whose id contains this string (case-insensitive).
     */
    search?: pulumi.Input<string | undefined>;
}
//# sourceMappingURL=getAiSearchInstances.d.ts.map