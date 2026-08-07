import * as pulumi from "@pulumi/pulumi";
export declare function getAiSearchNamespace(args: GetAiSearchNamespaceArgs, opts?: pulumi.InvokeOptions): Promise<GetAiSearchNamespaceResult>;
/**
 * A collection of arguments for invoking getAiSearchNamespace.
 */
export interface GetAiSearchNamespaceArgs {
    accountId: string;
    name: string;
}
/**
 * A collection of values returned by getAiSearchNamespace.
 */
export interface GetAiSearchNamespaceResult {
    readonly accountId: string;
    readonly createdAt: string;
    /**
     * Optional description for the namespace. Max 256 characters.
     */
    readonly description: string;
    readonly name: string;
}
export declare function getAiSearchNamespaceOutput(args: GetAiSearchNamespaceOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetAiSearchNamespaceResult>;
/**
 * A collection of arguments for invoking getAiSearchNamespace.
 */
export interface GetAiSearchNamespaceOutputArgs {
    accountId: pulumi.Input<string>;
    name: pulumi.Input<string>;
}
//# sourceMappingURL=getAiSearchNamespace.d.ts.map