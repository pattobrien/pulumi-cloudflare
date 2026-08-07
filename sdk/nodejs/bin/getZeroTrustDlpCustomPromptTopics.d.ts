import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
/**
 * Accepted Permissions
 *
 * - `Zero Trust Read`
 * - `Zero Trust Write`
 */
export declare function getZeroTrustDlpCustomPromptTopics(args: GetZeroTrustDlpCustomPromptTopicsArgs, opts?: pulumi.InvokeOptions): Promise<GetZeroTrustDlpCustomPromptTopicsResult>;
/**
 * A collection of arguments for invoking getZeroTrustDlpCustomPromptTopics.
 */
export interface GetZeroTrustDlpCustomPromptTopicsArgs {
    accountId: string;
    /**
     * Max items to fetch, default: 1000
     */
    maxItems?: number;
}
/**
 * A collection of values returned by getZeroTrustDlpCustomPromptTopics.
 */
export interface GetZeroTrustDlpCustomPromptTopicsResult {
    readonly accountId: string;
    /**
     * Max items to fetch, default: 1000
     */
    readonly maxItems?: number;
    /**
     * The items returned by the data source
     */
    readonly results: outputs.GetZeroTrustDlpCustomPromptTopicsResult[];
}
/**
 * Accepted Permissions
 *
 * - `Zero Trust Read`
 * - `Zero Trust Write`
 */
export declare function getZeroTrustDlpCustomPromptTopicsOutput(args: GetZeroTrustDlpCustomPromptTopicsOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetZeroTrustDlpCustomPromptTopicsResult>;
/**
 * A collection of arguments for invoking getZeroTrustDlpCustomPromptTopics.
 */
export interface GetZeroTrustDlpCustomPromptTopicsOutputArgs {
    accountId: pulumi.Input<string>;
    /**
     * Max items to fetch, default: 1000
     */
    maxItems?: pulumi.Input<number | undefined>;
}
//# sourceMappingURL=getZeroTrustDlpCustomPromptTopics.d.ts.map