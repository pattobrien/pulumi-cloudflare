import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
/**
 * Accepted Permissions
 *
 * - `Cloud Email Security: Read`
 * - `Cloud Email Security: Write`
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as cloudflare from "@pulumi/cloudflare";
 *
 * const exampleEmailSecurityImpersonationRegistries = cloudflare.getEmailSecurityImpersonationRegistries({
 *     accountId: "023e105f4ecef8ad9ca31a8372d0c353",
 *     direction: "asc",
 *     order: "name",
 *     provenance: "A1S_INTERNAL",
 *     search: "search",
 * });
 * ```
 */
export declare function getEmailSecurityImpersonationRegistries(args?: GetEmailSecurityImpersonationRegistriesArgs, opts?: pulumi.InvokeOptions): Promise<GetEmailSecurityImpersonationRegistriesResult>;
/**
 * A collection of arguments for invoking getEmailSecurityImpersonationRegistries.
 */
export interface GetEmailSecurityImpersonationRegistriesArgs {
    /**
     * Identifier.
     */
    accountId?: string;
    /**
     * The sorting direction.
     * Available values: "asc", "desc".
     */
    direction?: string;
    /**
     * Max items to fetch, default: 1000
     */
    maxItems?: number;
    /**
     * Field to sort by.
     * Available values: "name", "email", "createdAt".
     */
    order?: string;
    /**
     * Available values: "A1S*INTERNAL", "SNOOPY-CASB*OFFICE*365", "SNOOPY-OFFICE*365", "SNOOPY-GOOGLE_DIRECTORY".
     */
    provenance?: string;
    /**
     * Search term for filtering records. Behavior may change.
     */
    search?: string;
}
/**
 * A collection of values returned by getEmailSecurityImpersonationRegistries.
 */
export interface GetEmailSecurityImpersonationRegistriesResult {
    /**
     * Identifier.
     */
    readonly accountId?: string;
    /**
     * The sorting direction.
     * Available values: "asc", "desc".
     */
    readonly direction?: string;
    /**
     * Max items to fetch, default: 1000
     */
    readonly maxItems?: number;
    /**
     * Field to sort by.
     * Available values: "name", "email", "createdAt".
     */
    readonly order?: string;
    /**
     * Available values: "A1S*INTERNAL", "SNOOPY-CASB*OFFICE*365", "SNOOPY-OFFICE*365", "SNOOPY-GOOGLE_DIRECTORY".
     */
    readonly provenance?: string;
    /**
     * The items returned by the data source
     */
    readonly results: outputs.GetEmailSecurityImpersonationRegistriesResult[];
    /**
     * Search term for filtering records. Behavior may change.
     */
    readonly search?: string;
}
/**
 * Accepted Permissions
 *
 * - `Cloud Email Security: Read`
 * - `Cloud Email Security: Write`
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as cloudflare from "@pulumi/cloudflare";
 *
 * const exampleEmailSecurityImpersonationRegistries = cloudflare.getEmailSecurityImpersonationRegistries({
 *     accountId: "023e105f4ecef8ad9ca31a8372d0c353",
 *     direction: "asc",
 *     order: "name",
 *     provenance: "A1S_INTERNAL",
 *     search: "search",
 * });
 * ```
 */
export declare function getEmailSecurityImpersonationRegistriesOutput(args?: GetEmailSecurityImpersonationRegistriesOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetEmailSecurityImpersonationRegistriesResult>;
/**
 * A collection of arguments for invoking getEmailSecurityImpersonationRegistries.
 */
export interface GetEmailSecurityImpersonationRegistriesOutputArgs {
    /**
     * Identifier.
     */
    accountId?: pulumi.Input<string | undefined>;
    /**
     * The sorting direction.
     * Available values: "asc", "desc".
     */
    direction?: pulumi.Input<string | undefined>;
    /**
     * Max items to fetch, default: 1000
     */
    maxItems?: pulumi.Input<number | undefined>;
    /**
     * Field to sort by.
     * Available values: "name", "email", "createdAt".
     */
    order?: pulumi.Input<string | undefined>;
    /**
     * Available values: "A1S*INTERNAL", "SNOOPY-CASB*OFFICE*365", "SNOOPY-OFFICE*365", "SNOOPY-GOOGLE_DIRECTORY".
     */
    provenance?: pulumi.Input<string | undefined>;
    /**
     * Search term for filtering records. Behavior may change.
     */
    search?: pulumi.Input<string | undefined>;
}
//# sourceMappingURL=getEmailSecurityImpersonationRegistries.d.ts.map