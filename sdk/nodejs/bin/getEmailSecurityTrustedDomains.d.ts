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
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as cloudflare from "@pulumi/cloudflare";
 *
 * const exampleEmailSecurityTrustedDomains = cloudflare.getEmailSecurityTrustedDomains({
 *     accountId: "023e105f4ecef8ad9ca31a8372d0c353",
 *     trustedDomainId: "2401",
 * });
 * ```
 */
export declare function getEmailSecurityTrustedDomains(args?: GetEmailSecurityTrustedDomainsArgs, opts?: pulumi.InvokeOptions): Promise<GetEmailSecurityTrustedDomainsResult>;
/**
 * A collection of arguments for invoking getEmailSecurityTrustedDomains.
 */
export interface GetEmailSecurityTrustedDomainsArgs {
    /**
     * Identifier.
     */
    accountId?: string;
    filter?: inputs.GetEmailSecurityTrustedDomainsFilter;
    /**
     * Trusted domain identifier
     */
    trustedDomainId?: string;
}
/**
 * A collection of values returned by getEmailSecurityTrustedDomains.
 */
export interface GetEmailSecurityTrustedDomainsResult {
    /**
     * Identifier.
     */
    readonly accountId?: string;
    readonly comments: string;
    readonly createdAt: string;
    readonly filter?: outputs.GetEmailSecurityTrustedDomainsFilter;
    /**
     * Trusted domain identifier
     */
    readonly id: string;
    /**
     * Select to prevent recently registered domains from triggering a Suspicious or Malicious disposition.
     */
    readonly isRecent: boolean;
    readonly isRegex: boolean;
    /**
     * Select for partner or other approved domains that have similar spelling to your connected domains. Prevents listed domains from triggering a Spoof disposition.
     */
    readonly isSimilarity: boolean;
    /**
     * Deprecated, use `modifiedAt` instead. End of life: November 1, 2026.
     *
     * @deprecated Use `modifiedAt` instead.
     */
    readonly lastModified: string;
    readonly modifiedAt: string;
    readonly pattern: string;
    /**
     * Trusted domain identifier
     */
    readonly trustedDomainId?: string;
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
 * const exampleEmailSecurityTrustedDomains = cloudflare.getEmailSecurityTrustedDomains({
 *     accountId: "023e105f4ecef8ad9ca31a8372d0c353",
 *     trustedDomainId: "2401",
 * });
 * ```
 */
export declare function getEmailSecurityTrustedDomainsOutput(args?: GetEmailSecurityTrustedDomainsOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetEmailSecurityTrustedDomainsResult>;
/**
 * A collection of arguments for invoking getEmailSecurityTrustedDomains.
 */
export interface GetEmailSecurityTrustedDomainsOutputArgs {
    /**
     * Identifier.
     */
    accountId?: pulumi.Input<string | undefined>;
    filter?: pulumi.Input<inputs.GetEmailSecurityTrustedDomainsFilterArgs | undefined>;
    /**
     * Trusted domain identifier
     */
    trustedDomainId?: pulumi.Input<string | undefined>;
}
//# sourceMappingURL=getEmailSecurityTrustedDomains.d.ts.map