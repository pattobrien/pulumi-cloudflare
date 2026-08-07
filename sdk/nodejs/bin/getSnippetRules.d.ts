import * as pulumi from "@pulumi/pulumi";
/**
 * Accepted Permissions
 *
 * - `Snippets Read`
 * - `Snippets Write`
 */
export declare function getSnippetRules(args: GetSnippetRulesArgs, opts?: pulumi.InvokeOptions): Promise<GetSnippetRulesResult>;
/**
 * A collection of arguments for invoking getSnippetRules.
 */
export interface GetSnippetRulesArgs {
    /**
     * Use this field to specify the unique ID of the zone.
     */
    zoneId: string;
}
/**
 * A collection of values returned by getSnippetRules.
 */
export interface GetSnippetRulesResult {
    /**
     * Use this field to specify the unique ID of the zone.
     */
    readonly id: string;
    /**
     * Use this field to specify the unique ID of the zone.
     */
    readonly zoneId: string;
}
/**
 * Accepted Permissions
 *
 * - `Snippets Read`
 * - `Snippets Write`
 */
export declare function getSnippetRulesOutput(args: GetSnippetRulesOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSnippetRulesResult>;
/**
 * A collection of arguments for invoking getSnippetRules.
 */
export interface GetSnippetRulesOutputArgs {
    /**
     * Use this field to specify the unique ID of the zone.
     */
    zoneId: pulumi.Input<string>;
}
//# sourceMappingURL=getSnippetRules.d.ts.map