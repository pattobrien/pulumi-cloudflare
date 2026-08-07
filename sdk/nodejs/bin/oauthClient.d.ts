import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
/**
 * Accepted Permissions
 *
 * - `OAuth Client Read`
 * - `OAuth Client Write`
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as cloudflare from "@pulumi/cloudflare";
 *
 * const exampleOauthClient = new cloudflare.OauthClient("example_oauth_client", {
 *     accountId: "023e105f4ecef8ad9ca31a8372d0c353",
 *     clientName: "My OAuth App",
 *     grantTypes: [
 *         "authorization_code",
 *         "refresh_token",
 *     ],
 *     redirectUris: ["https://example.com/callback"],
 *     responseTypes: ["code"],
 *     scopes: ["account.read"],
 *     tokenEndpointAuthMethod: "client_secret_post",
 *     allowedCorsOrigins: ["https://example.com"],
 *     clientUri: "https://example.com",
 *     logoUri: "https://example.com/logo.png",
 *     policyUri: "https://example.com/privacy",
 *     postLogoutRedirectUris: ["https://example.com/logout"],
 *     tosUri: "https://example.com/tos",
 * });
 * ```
 *
 * ## Import
 *
 * > This resource does not currently support `pulumi import`.
 */
export declare class OauthClient extends pulumi.CustomResource {
    /**
     * Get an existing OauthClient resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: OauthClientState, opts?: pulumi.CustomResourceOptions): OauthClient;
    /**
     * Returns true if the given object is an instance of OauthClient.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is OauthClient;
    /**
     * Account identifier tag.
     */
    readonly accountId: pulumi.Output<string>;
    /**
     * Array of allowed CORS origins.
     */
    readonly allowedCorsOrigins: pulumi.Output<string[] | undefined>;
    /**
     * The unique identifier for an OAuth client.
     */
    readonly clientId: pulumi.Output<string>;
    /**
     * Human-readable name of the OAuth client.
     */
    readonly clientName: pulumi.Output<string>;
    /**
     * The client secret. This is the only time the secret is returned in a response.
     */
    readonly clientSecret: pulumi.Output<string>;
    /**
     * URL of the home page of the client.
     */
    readonly clientUri: pulumi.Output<string | undefined>;
    /**
     * Client URI domain control verification state.
     */
    readonly clientUriVerification: pulumi.Output<outputs.OauthClientClientUriVerification>;
    /**
     * Timestamp when the OAuth client was created.
     */
    readonly createdAt: pulumi.Output<string>;
    /**
     * Array of OAuth grant types the client is allowed to use. `authorizationCode` is required; `refreshToken` may be included optionally.
     */
    readonly grantTypes: pulumi.Output<string[]>;
    /**
     * Indicates whether the client has a rotated secret that has not yet been deleted.
     */
    readonly hasRotatedSecret: pulumi.Output<boolean>;
    /**
     * URL of the client's logo.
     */
    readonly logoUri: pulumi.Output<string | undefined>;
    /**
     * The unique identifier for an OAuth client.
     */
    readonly oauthClientId: pulumi.Output<string | undefined>;
    /**
     * URL that points to a privacy policy document.
     */
    readonly policyUri: pulumi.Output<string | undefined>;
    /**
     * Array of allowed post-logout redirect URIs.
     */
    readonly postLogoutRedirectUris: pulumi.Output<string[] | undefined>;
    /**
     * Timestamp when the OAuth client was promoted to public visibility.
     */
    readonly promotedAt: pulumi.Output<string>;
    /**
     * Array of allowed redirect URIs for the client.
     */
    readonly redirectUris: pulumi.Output<string[]>;
    /**
     * Array of OAuth response types the client is allowed to use.
     */
    readonly responseTypes: pulumi.Output<string[]>;
    /**
     * Array of OAuth scopes the client is allowed to request. Colon-delimited scopes are not accepted. Dot-delimited scopes are validated against available OAuth API scopes; simple identity scopes are allowed. Protocol scopes `offlineAccess` and `openid` are added or removed automatically based on `grantTypes` and `responseTypes`.
     */
    readonly scopes: pulumi.Output<string[]>;
    /**
     * The authentication method the client uses at the token endpoint.
     * Available values: "none", "client*secret*basic", "client*secret*post".
     */
    readonly tokenEndpointAuthMethod: pulumi.Output<string>;
    /**
     * URL that points to a terms of service document.
     */
    readonly tosUri: pulumi.Output<string | undefined>;
    /**
     * Timestamp when the OAuth client was last updated.
     */
    readonly updatedAt: pulumi.Output<string>;
    /**
     * Promote the OAuth client from private to public visibility. Only `public` is accepted; demotion to `private` is not supported. Promotion requires a non-empty client name, logo URI, verified client URI host, and at least one non-identity scope.
     * Available values: "public".
     */
    readonly visibility: pulumi.Output<string | undefined>;
    /**
     * Create a OauthClient resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: OauthClientArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering OauthClient resources.
 */
export interface OauthClientState {
    /**
     * Account identifier tag.
     */
    accountId?: pulumi.Input<string | undefined>;
    /**
     * Array of allowed CORS origins.
     */
    allowedCorsOrigins?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * The unique identifier for an OAuth client.
     */
    clientId?: pulumi.Input<string | undefined>;
    /**
     * Human-readable name of the OAuth client.
     */
    clientName?: pulumi.Input<string | undefined>;
    /**
     * The client secret. This is the only time the secret is returned in a response.
     */
    clientSecret?: pulumi.Input<string | undefined>;
    /**
     * URL of the home page of the client.
     */
    clientUri?: pulumi.Input<string | undefined>;
    /**
     * Client URI domain control verification state.
     */
    clientUriVerification?: pulumi.Input<inputs.OauthClientClientUriVerification | undefined>;
    /**
     * Timestamp when the OAuth client was created.
     */
    createdAt?: pulumi.Input<string | undefined>;
    /**
     * Array of OAuth grant types the client is allowed to use. `authorizationCode` is required; `refreshToken` may be included optionally.
     */
    grantTypes?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * Indicates whether the client has a rotated secret that has not yet been deleted.
     */
    hasRotatedSecret?: pulumi.Input<boolean | undefined>;
    /**
     * URL of the client's logo.
     */
    logoUri?: pulumi.Input<string | undefined>;
    /**
     * The unique identifier for an OAuth client.
     */
    oauthClientId?: pulumi.Input<string | undefined>;
    /**
     * URL that points to a privacy policy document.
     */
    policyUri?: pulumi.Input<string | undefined>;
    /**
     * Array of allowed post-logout redirect URIs.
     */
    postLogoutRedirectUris?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * Timestamp when the OAuth client was promoted to public visibility.
     */
    promotedAt?: pulumi.Input<string | undefined>;
    /**
     * Array of allowed redirect URIs for the client.
     */
    redirectUris?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * Array of OAuth response types the client is allowed to use.
     */
    responseTypes?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * Array of OAuth scopes the client is allowed to request. Colon-delimited scopes are not accepted. Dot-delimited scopes are validated against available OAuth API scopes; simple identity scopes are allowed. Protocol scopes `offlineAccess` and `openid` are added or removed automatically based on `grantTypes` and `responseTypes`.
     */
    scopes?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * The authentication method the client uses at the token endpoint.
     * Available values: "none", "client*secret*basic", "client*secret*post".
     */
    tokenEndpointAuthMethod?: pulumi.Input<string | undefined>;
    /**
     * URL that points to a terms of service document.
     */
    tosUri?: pulumi.Input<string | undefined>;
    /**
     * Timestamp when the OAuth client was last updated.
     */
    updatedAt?: pulumi.Input<string | undefined>;
    /**
     * Promote the OAuth client from private to public visibility. Only `public` is accepted; demotion to `private` is not supported. Promotion requires a non-empty client name, logo URI, verified client URI host, and at least one non-identity scope.
     * Available values: "public".
     */
    visibility?: pulumi.Input<string | undefined>;
}
/**
 * The set of arguments for constructing a OauthClient resource.
 */
export interface OauthClientArgs {
    /**
     * Account identifier tag.
     */
    accountId: pulumi.Input<string>;
    /**
     * Array of allowed CORS origins.
     */
    allowedCorsOrigins?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * Human-readable name of the OAuth client.
     */
    clientName: pulumi.Input<string>;
    /**
     * URL of the home page of the client.
     */
    clientUri?: pulumi.Input<string | undefined>;
    /**
     * Array of OAuth grant types the client is allowed to use. `authorizationCode` is required; `refreshToken` may be included optionally.
     */
    grantTypes: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * URL of the client's logo.
     */
    logoUri?: pulumi.Input<string | undefined>;
    /**
     * The unique identifier for an OAuth client.
     */
    oauthClientId?: pulumi.Input<string | undefined>;
    /**
     * URL that points to a privacy policy document.
     */
    policyUri?: pulumi.Input<string | undefined>;
    /**
     * Array of allowed post-logout redirect URIs.
     */
    postLogoutRedirectUris?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * Array of allowed redirect URIs for the client.
     */
    redirectUris: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Array of OAuth response types the client is allowed to use.
     */
    responseTypes: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Array of OAuth scopes the client is allowed to request. Colon-delimited scopes are not accepted. Dot-delimited scopes are validated against available OAuth API scopes; simple identity scopes are allowed. Protocol scopes `offlineAccess` and `openid` are added or removed automatically based on `grantTypes` and `responseTypes`.
     */
    scopes: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The authentication method the client uses at the token endpoint.
     * Available values: "none", "client*secret*basic", "client*secret*post".
     */
    tokenEndpointAuthMethod: pulumi.Input<string>;
    /**
     * URL that points to a terms of service document.
     */
    tosUri?: pulumi.Input<string | undefined>;
    /**
     * Promote the OAuth client from private to public visibility. Only `public` is accepted; demotion to `private` is not supported. Promotion requires a non-empty client name, logo URI, verified client URI host, and at least one non-identity scope.
     * Available values: "public".
     */
    visibility?: pulumi.Input<string | undefined>;
}
//# sourceMappingURL=oauthClient.d.ts.map