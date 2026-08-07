import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getZeroTrustDeviceDeploymentGroupsList(args: GetZeroTrustDeviceDeploymentGroupsListArgs, opts?: pulumi.InvokeOptions): Promise<GetZeroTrustDeviceDeploymentGroupsListResult>;
/**
 * A collection of arguments for invoking getZeroTrustDeviceDeploymentGroupsList.
 */
export interface GetZeroTrustDeviceDeploymentGroupsListArgs {
    accountId: string;
    /**
     * Max items to fetch, default: 1000
     */
    maxItems?: number;
}
/**
 * A collection of values returned by getZeroTrustDeviceDeploymentGroupsList.
 */
export interface GetZeroTrustDeviceDeploymentGroupsListResult {
    readonly accountId: string;
    /**
     * Max items to fetch, default: 1000
     */
    readonly maxItems?: number;
    /**
     * The items returned by the data source
     */
    readonly results: outputs.GetZeroTrustDeviceDeploymentGroupsListResult[];
}
export declare function getZeroTrustDeviceDeploymentGroupsListOutput(args: GetZeroTrustDeviceDeploymentGroupsListOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetZeroTrustDeviceDeploymentGroupsListResult>;
/**
 * A collection of arguments for invoking getZeroTrustDeviceDeploymentGroupsList.
 */
export interface GetZeroTrustDeviceDeploymentGroupsListOutputArgs {
    accountId: pulumi.Input<string>;
    /**
     * Max items to fetch, default: 1000
     */
    maxItems?: pulumi.Input<number | undefined>;
}
//# sourceMappingURL=getZeroTrustDeviceDeploymentGroupsList.d.ts.map