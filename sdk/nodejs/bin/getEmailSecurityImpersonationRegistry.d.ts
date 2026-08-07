import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
/**
 * Accepted Permissions
 *
 * - `Cloud Email Security: Read`
 * - `Cloud Email Security: Write`
 *
 * ## Example Usage
 */
export declare function getEmailSecurityImpersonationRegistry(args?: GetEmailSecurityImpersonationRegistryArgs, opts?: pulumi.InvokeOptions): Promise<GetEmailSecurityImpersonationRegistryResult>;
/**
 * A collection of arguments for invoking getEmailSecurityImpersonationRegistry.
 */
export interface GetEmailSecurityImpersonationRegistryArgs {
    /**
     * Identifier.
     */
    accountId?: string;
    filter?: inputs.GetEmailSecurityImpersonationRegistryFilter;
    /**
     * Impersonation registry entry identifier
     */
    impersonationRegistryId?: string;
}
/**
 * A collection of values returned by getEmailSecurityImpersonationRegistry.
 */
export interface GetEmailSecurityImpersonationRegistryResult {
    /**
     * Identifier.
     */
    readonly accountId?: string;
    readonly comments: string;
    readonly createdAt: string;
    readonly directoryId: number;
    readonly directoryNodeId: number;
    readonly email: string;
    /**
     * @deprecated This field is deprecated.
     */
    readonly externalDirectoryNodeId: string;
    readonly filter?: outputs.GetEmailSecurityImpersonationRegistryFilter;
    /**
     * Impersonation registry entry identifier
     */
    readonly id: string;
    /**
     * Impersonation registry entry identifier
     */
    readonly impersonationRegistryId?: string;
    readonly isEmailRegex: boolean;
    /**
     * Deprecated, use `modifiedAt` instead. End of life: November 1, 2026.
     *
     * @deprecated Use `modifiedAt` instead.
     */
    readonly lastModified: string;
    readonly modifiedAt: string;
    readonly name: string;
    /**
     * Available values: "A1S*INTERNAL", "SNOOPY-CASB*OFFICE*365", "SNOOPY-OFFICE*365", "SNOOPY-GOOGLE_DIRECTORY".
     */
    readonly provenance: string;
}
/**
 * Accepted Permissions
 *
 * - `Cloud Email Security: Read`
 * - `Cloud Email Security: Write`
 *
 * ## Example Usage
 */
export declare function getEmailSecurityImpersonationRegistryOutput(args?: GetEmailSecurityImpersonationRegistryOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetEmailSecurityImpersonationRegistryResult>;
/**
 * A collection of arguments for invoking getEmailSecurityImpersonationRegistry.
 */
export interface GetEmailSecurityImpersonationRegistryOutputArgs {
    /**
     * Identifier.
     */
    accountId?: pulumi.Input<string | undefined>;
    filter?: pulumi.Input<inputs.GetEmailSecurityImpersonationRegistryFilterArgs | undefined>;
    /**
     * Impersonation registry entry identifier
     */
    impersonationRegistryId?: pulumi.Input<string | undefined>;
}
//# sourceMappingURL=getEmailSecurityImpersonationRegistry.d.ts.map