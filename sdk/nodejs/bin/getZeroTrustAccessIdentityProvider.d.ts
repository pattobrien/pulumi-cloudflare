import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
/**
 * Accepted Permissions
 *
 * - `Access: Organizations, Identity Providers, and Groups Read`
 * - `Access: Organizations, Identity Providers, and Groups Write`
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as cloudflare from "@pulumi/cloudflare";
 *
 * const exampleZeroTrustAccessIdentityProvider = cloudflare.getZeroTrustAccessIdentityProvider({
 *     identityProviderId: "f174e90a-fafe-4643-bbbc-4a0ed4fc8415",
 *     accountId: "account_id",
 *     zoneId: "zone_id",
 * });
 * ```
 */
export declare function getZeroTrustAccessIdentityProvider(args?: GetZeroTrustAccessIdentityProviderArgs, opts?: pulumi.InvokeOptions): Promise<GetZeroTrustAccessIdentityProviderResult>;
/**
 * A collection of arguments for invoking getZeroTrustAccessIdentityProvider.
 */
export interface GetZeroTrustAccessIdentityProviderArgs {
    /**
     * The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.
     */
    accountId?: string;
    filter?: inputs.GetZeroTrustAccessIdentityProviderFilter;
    /**
     * UUID.
     */
    identityProviderId?: string;
    /**
     * The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.
     */
    zoneId?: string;
}
/**
 * A collection of values returned by getZeroTrustAccessIdentityProvider.
 */
export interface GetZeroTrustAccessIdentityProviderResult {
    /**
     * The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.
     */
    readonly accountId?: string;
    /**
     * The configuration parameters for the identity provider. To view the required parameters for a specific provider, refer to our [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    readonly config: outputs.GetZeroTrustAccessIdentityProviderConfig;
    readonly filter?: outputs.GetZeroTrustAccessIdentityProviderFilter;
    /**
     * UUID.
     */
    readonly id: string;
    /**
     * UUID.
     */
    readonly identityProviderId?: string;
    /**
     * The name of the identity provider, shown to users on the login page.
     */
    readonly name: string;
    /**
     * Indicates that the identity provider is immutable and cannot be updated or deleted via the API.
     */
    readonly readOnly: boolean;
    /**
     * The SAML encryption certificate set details, including current and previous certificates.
     * Only present for SAML identity providers with a certificate set assigned.
     */
    readonly samlCertificateSet: outputs.GetZeroTrustAccessIdentityProviderSamlCertificateSet;
    /**
     * The UID of the SAML encryption certificate set assigned to this Identity Provider.
     * Only present for SAML identity providers with encryption configured.
     * Create a certificate set via POST to `/identity_providers/{id}/saml_certificate`.
     */
    readonly samlCertificateSetId: string;
    /**
     * The configuration settings for enabling a System for Cross-Domain Identity Management (SCIM) with the identity provider.
     */
    readonly scimConfig: outputs.GetZeroTrustAccessIdentityProviderScimConfig;
    /**
     * The type of identity provider. To determine the value for a specific provider, refer to our [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     * Available values: "onetimepin", "azureAD", "saml", "centrify", "facebook", "github", "google-apps", "google", "linkedin", "oidc", "okta", "onelogin", "pingone", "yandex", "cloudflare".
     */
    readonly type: string;
    /**
     * The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.
     */
    readonly zoneId?: string;
}
/**
 * Accepted Permissions
 *
 * - `Access: Organizations, Identity Providers, and Groups Read`
 * - `Access: Organizations, Identity Providers, and Groups Write`
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as cloudflare from "@pulumi/cloudflare";
 *
 * const exampleZeroTrustAccessIdentityProvider = cloudflare.getZeroTrustAccessIdentityProvider({
 *     identityProviderId: "f174e90a-fafe-4643-bbbc-4a0ed4fc8415",
 *     accountId: "account_id",
 *     zoneId: "zone_id",
 * });
 * ```
 */
export declare function getZeroTrustAccessIdentityProviderOutput(args?: GetZeroTrustAccessIdentityProviderOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetZeroTrustAccessIdentityProviderResult>;
/**
 * A collection of arguments for invoking getZeroTrustAccessIdentityProvider.
 */
export interface GetZeroTrustAccessIdentityProviderOutputArgs {
    /**
     * The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.
     */
    accountId?: pulumi.Input<string | undefined>;
    filter?: pulumi.Input<inputs.GetZeroTrustAccessIdentityProviderFilterArgs | undefined>;
    /**
     * UUID.
     */
    identityProviderId?: pulumi.Input<string | undefined>;
    /**
     * The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.
     */
    zoneId?: pulumi.Input<string | undefined>;
}
//# sourceMappingURL=getZeroTrustAccessIdentityProvider.d.ts.map