import * as pulumi from "@pulumi/pulumi";
/**
 * Accepted Permissions
 *
 * - `Zero Trust Read`
 * - `Zero Trust Write`
 */
export declare function getZeroTrustDlpCustomPromptTopic(args: GetZeroTrustDlpCustomPromptTopicArgs, opts?: pulumi.InvokeOptions): Promise<GetZeroTrustDlpCustomPromptTopicResult>;
/**
 * A collection of arguments for invoking getZeroTrustDlpCustomPromptTopic.
 */
export interface GetZeroTrustDlpCustomPromptTopicArgs {
    accountId: string;
    entryId: string;
}
/**
 * A collection of values returned by getZeroTrustDlpCustomPromptTopic.
 */
export interface GetZeroTrustDlpCustomPromptTopicResult {
    readonly accountId: string;
    readonly createdAt: string;
    readonly description: string;
    /**
     * @deprecated This attribute is deprecated.
     */
    readonly enabled: boolean;
    readonly entryId: string;
    /**
     * The ID of this resource.
     */
    readonly id: string;
    readonly name: string;
    /**
     * @deprecated This attribute is deprecated.
     */
    readonly profileId: string;
    readonly topic: string;
    readonly updatedAt: string;
}
/**
 * Accepted Permissions
 *
 * - `Zero Trust Read`
 * - `Zero Trust Write`
 */
export declare function getZeroTrustDlpCustomPromptTopicOutput(args: GetZeroTrustDlpCustomPromptTopicOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetZeroTrustDlpCustomPromptTopicResult>;
/**
 * A collection of arguments for invoking getZeroTrustDlpCustomPromptTopic.
 */
export interface GetZeroTrustDlpCustomPromptTopicOutputArgs {
    accountId: pulumi.Input<string>;
    entryId: pulumi.Input<string>;
}
//# sourceMappingURL=getZeroTrustDlpCustomPromptTopic.d.ts.map