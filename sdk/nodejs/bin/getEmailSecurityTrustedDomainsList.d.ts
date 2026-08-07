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
 * const exampleEmailSecurityTrustedDomainsList = cloudflare.getEmailSecurityTrustedDomainsList({
 *     accountId: "023e105f4ecef8ad9ca31a8372d0c353",
 *     direction: "asc",
 *     isRecent: true,
 *     isSimilarity: true,
 *     order: "pattern",
 *     pattern: "pattern",
 *     search: "search",
 * });
 * ```
 */
export declare function getEmailSecurityTrustedDomainsList(args?: GetEmailSecurityTrustedDomainsListArgs, opts?: pulumi.InvokeOptions): Promise<GetEmailSecurityTrustedDomainsListResult>;
/**
 * A collection of arguments for invoking getEmailSecurityTrustedDomainsList.
 */
export interface GetEmailSecurityTrustedDomainsListArgs {
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
     * Filter to show only recently registered domains that are trusted to prevent triggering Suspicious or Malicious dispositions.
     */
    isRecent?: boolean;
    /**
     * Filter to show only proximity domains (partner or approved domains with similar spelling to connected domains) that prevent Spoof dispositions.
     */
    isSimilarity?: boolean;
    /**
     * Max items to fetch, default: 1000
     */
    maxItems?: number;
    /**
     * Field to sort by.
     * Available values: "pattern", "createdAt".
     */
    order?: string;
    pattern?: string;
    /**
     * Search term for filtering records. Behavior may change.
     */
    search?: string;
}
/**
 * A collection of values returned by getEmailSecurityTrustedDomainsList.
 */
export interface GetEmailSecurityTrustedDomainsListResult {
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
     * Filter to show only recently registered domains that are trusted to prevent triggering Suspicious or Malicious dispositions.
     */
    readonly isRecent?: boolean;
    /**
     * Filter to show only proximity domains (partner or approved domains with similar spelling to connected domains) that prevent Spoof dispositions.
     */
    readonly isSimilarity?: boolean;
    /**
     * Max items to fetch, default: 1000
     */
    readonly maxItems?: number;
    /**
     * Field to sort by.
     * Available values: "pattern", "createdAt".
     */
    readonly order?: string;
    readonly pattern?: string;
    /**
     * The items returned by the data source
     */
    readonly results: outputs.GetEmailSecurityTrustedDomainsListResult[];
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
 * const exampleEmailSecurityTrustedDomainsList = cloudflare.getEmailSecurityTrustedDomainsList({
 *     accountId: "023e105f4ecef8ad9ca31a8372d0c353",
 *     direction: "asc",
 *     isRecent: true,
 *     isSimilarity: true,
 *     order: "pattern",
 *     pattern: "pattern",
 *     search: "search",
 * });
 * ```
 */
export declare function getEmailSecurityTrustedDomainsListOutput(args?: GetEmailSecurityTrustedDomainsListOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetEmailSecurityTrustedDomainsListResult>;
/**
 * A collection of arguments for invoking getEmailSecurityTrustedDomainsList.
 */
export interface GetEmailSecurityTrustedDomainsListOutputArgs {
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
     * Filter to show only recently registered domains that are trusted to prevent triggering Suspicious or Malicious dispositions.
     */
    isRecent?: pulumi.Input<boolean | undefined>;
    /**
     * Filter to show only proximity domains (partner or approved domains with similar spelling to connected domains) that prevent Spoof dispositions.
     */
    isSimilarity?: pulumi.Input<boolean | undefined>;
    /**
     * Max items to fetch, default: 1000
     */
    maxItems?: pulumi.Input<number | undefined>;
    /**
     * Field to sort by.
     * Available values: "pattern", "createdAt".
     */
    order?: pulumi.Input<string | undefined>;
    pattern?: pulumi.Input<string | undefined>;
    /**
     * Search term for filtering records. Behavior may change.
     */
    search?: pulumi.Input<string | undefined>;
}
//# sourceMappingURL=getEmailSecurityTrustedDomainsList.d.ts.map