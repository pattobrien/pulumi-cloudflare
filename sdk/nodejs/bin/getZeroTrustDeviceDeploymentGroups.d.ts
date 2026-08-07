import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
/**
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as cloudflare from "@pulumi/cloudflare";
 *
 * const exampleZeroTrustDeviceDeploymentGroups = cloudflare.getZeroTrustDeviceDeploymentGroups({
 *     accountId: "account_id",
 *     groupId: "group_id",
 * });
 * ```
 */
export declare function getZeroTrustDeviceDeploymentGroups(args: GetZeroTrustDeviceDeploymentGroupsArgs, opts?: pulumi.InvokeOptions): Promise<GetZeroTrustDeviceDeploymentGroupsResult>;
/**
 * A collection of arguments for invoking getZeroTrustDeviceDeploymentGroups.
 */
export interface GetZeroTrustDeviceDeploymentGroupsArgs {
    accountId: string;
    groupId: string;
}
/**
 * A collection of values returned by getZeroTrustDeviceDeploymentGroups.
 */
export interface GetZeroTrustDeviceDeploymentGroupsResult {
    readonly accountId: string;
    /**
     * The RFC3339Nano timestamp when the deployment group was created.
     */
    readonly createdAt: string;
    readonly groupId: string;
    /**
     * The ID of this resource.
     */
    readonly id: string;
    /**
     * A user-friendly name for the deployment group.
     */
    readonly name: string;
    /**
     * Contains a list of policy IDs assigned to this deployment group.
     */
    readonly policyIds: string[];
    /**
     * The RFC3339Nano timestamp when the deployment group was last updated.
     */
    readonly updatedAt: string;
    /**
     * Contains version configurations for different target environments.
     */
    readonly versionConfigs: outputs.GetZeroTrustDeviceDeploymentGroupsVersionConfig[];
}
/**
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as cloudflare from "@pulumi/cloudflare";
 *
 * const exampleZeroTrustDeviceDeploymentGroups = cloudflare.getZeroTrustDeviceDeploymentGroups({
 *     accountId: "account_id",
 *     groupId: "group_id",
 * });
 * ```
 */
export declare function getZeroTrustDeviceDeploymentGroupsOutput(args: GetZeroTrustDeviceDeploymentGroupsOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetZeroTrustDeviceDeploymentGroupsResult>;
/**
 * A collection of arguments for invoking getZeroTrustDeviceDeploymentGroups.
 */
export interface GetZeroTrustDeviceDeploymentGroupsOutputArgs {
    accountId: pulumi.Input<string>;
    groupId: pulumi.Input<string>;
}
//# sourceMappingURL=getZeroTrustDeviceDeploymentGroups.d.ts.map