import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
/**
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as cloudflare from "@pulumi/cloudflare";
 *
 * const exampleZeroTrustResourceLibraryApplications = cloudflare.getZeroTrustResourceLibraryApplications({
 *     accountId: "023e105f4ecef8ad9ca31a8372d0c353",
 *     filter: "filter",
 *     orderBy: "order_by",
 *     search: "xx",
 * });
 * ```
 */
export declare function getZeroTrustResourceLibraryApplications(args: GetZeroTrustResourceLibraryApplicationsArgs, opts?: pulumi.InvokeOptions): Promise<GetZeroTrustResourceLibraryApplicationsResult>;
/**
 * A collection of arguments for invoking getZeroTrustResourceLibraryApplications.
 */
export interface GetZeroTrustResourceLibraryApplicationsArgs {
    accountId: string;
    filter?: string;
    limit?: number;
    maxItems?: number;
    offset?: number;
    orderBy?: string;
    search?: string;
}
/**
 * A collection of values returned by getZeroTrustResourceLibraryApplications.
 */
export interface GetZeroTrustResourceLibraryApplicationsResult {
    readonly accountId: string;
    readonly filter?: string;
    readonly limit: number;
    readonly maxItems?: number;
    readonly offset: number;
    readonly orderBy?: string;
    readonly results: outputs.GetZeroTrustResourceLibraryApplicationsResult[];
    readonly search?: string;
}
/**
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as cloudflare from "@pulumi/cloudflare";
 *
 * const exampleZeroTrustResourceLibraryApplications = cloudflare.getZeroTrustResourceLibraryApplications({
 *     accountId: "023e105f4ecef8ad9ca31a8372d0c353",
 *     filter: "filter",
 *     orderBy: "order_by",
 *     search: "xx",
 * });
 * ```
 */
export declare function getZeroTrustResourceLibraryApplicationsOutput(args: GetZeroTrustResourceLibraryApplicationsOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetZeroTrustResourceLibraryApplicationsResult>;
/**
 * A collection of arguments for invoking getZeroTrustResourceLibraryApplications.
 */
export interface GetZeroTrustResourceLibraryApplicationsOutputArgs {
    accountId: pulumi.Input<string>;
    filter?: pulumi.Input<string | undefined>;
    limit?: pulumi.Input<number | undefined>;
    maxItems?: pulumi.Input<number | undefined>;
    offset?: pulumi.Input<number | undefined>;
    orderBy?: pulumi.Input<string | undefined>;
    search?: pulumi.Input<string | undefined>;
}
//# sourceMappingURL=getZeroTrustResourceLibraryApplications.d.ts.map