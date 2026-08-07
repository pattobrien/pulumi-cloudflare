import * as pulumi from "@pulumi/pulumi";
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
 * const exampleEmailSecurityBlockSender = new cloudflare.EmailSecurityBlockSender("example_email_security_block_sender", {
 *     accountId: "023e105f4ecef8ad9ca31a8372d0c353",
 *     isRegex: false,
 *     pattern: "test@example.com",
 *     patternType: "EMAIL",
 *     comments: "block sender with email test@example.com",
 * });
 * ```
 *
 * ## Import
 *
 * ```sh
 * $ pulumi import cloudflare:index/emailSecurityBlockSender:EmailSecurityBlockSender example '<account_id>/<pattern_id>'
 * ```
 */
export declare class EmailSecurityBlockSender extends pulumi.CustomResource {
    /**
     * Get an existing EmailSecurityBlockSender resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: EmailSecurityBlockSenderState, opts?: pulumi.CustomResourceOptions): EmailSecurityBlockSender;
    /**
     * Returns true if the given object is an instance of EmailSecurityBlockSender.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is EmailSecurityBlockSender;
    /**
     * Identifier.
     */
    readonly accountId: pulumi.Output<string>;
    readonly comments: pulumi.Output<string | undefined>;
    readonly createdAt: pulumi.Output<string>;
    readonly isRegex: pulumi.Output<boolean>;
    /**
     * Deprecated, use `modifiedAt` instead. End of life: November 1, 2026.
     *
     * @deprecated Use `modifiedAt` instead.
     */
    readonly lastModified: pulumi.Output<string>;
    readonly modifiedAt: pulumi.Output<string>;
    /**
     * The pattern value to match against. Format depends on `patternType`:
     * - EMAIL: a valid email address, e.g. `user@example.com`
     * - DOMAIN: a valid domain name, e.g. `example.com`
     * - IP: a plain IPv4 address (e.g. `1.2.3.4`) or an IPv4 CIDR block (e.g. `1.2.3.0/24`). Only globally reachable addresses are accepted; private, loopback, link-local, and unspecified addresses are rejected.
     */
    readonly pattern: pulumi.Output<string>;
    /**
     * Type of pattern matching.
     * - EMAIL: matches a full email address (e.g. `user@example.com`)
     * - DOMAIN: matches a domain name (e.g. `example.com`)
     * - IP: matches a plain IPv4 address (e.g. `1.2.3.4`) or an IPv4 CIDR block (e.g. `1.2.3.0/24`). Only globally reachable addresses are accepted.
     * - UNKNOWN: deprecated, cannot be used when creating or updating policies, but may be returned for existing entries.
     *   Available values: "EMAIL", "DOMAIN", "IP", "UNKNOWN".
     */
    readonly patternType: pulumi.Output<string>;
    /**
     * Create a EmailSecurityBlockSender resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: EmailSecurityBlockSenderArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering EmailSecurityBlockSender resources.
 */
export interface EmailSecurityBlockSenderState {
    /**
     * Identifier.
     */
    accountId?: pulumi.Input<string | undefined>;
    comments?: pulumi.Input<string | undefined>;
    createdAt?: pulumi.Input<string | undefined>;
    isRegex?: pulumi.Input<boolean | undefined>;
    /**
     * Deprecated, use `modifiedAt` instead. End of life: November 1, 2026.
     *
     * @deprecated Use `modifiedAt` instead.
     */
    lastModified?: pulumi.Input<string | undefined>;
    modifiedAt?: pulumi.Input<string | undefined>;
    /**
     * The pattern value to match against. Format depends on `patternType`:
     * - EMAIL: a valid email address, e.g. `user@example.com`
     * - DOMAIN: a valid domain name, e.g. `example.com`
     * - IP: a plain IPv4 address (e.g. `1.2.3.4`) or an IPv4 CIDR block (e.g. `1.2.3.0/24`). Only globally reachable addresses are accepted; private, loopback, link-local, and unspecified addresses are rejected.
     */
    pattern?: pulumi.Input<string | undefined>;
    /**
     * Type of pattern matching.
     * - EMAIL: matches a full email address (e.g. `user@example.com`)
     * - DOMAIN: matches a domain name (e.g. `example.com`)
     * - IP: matches a plain IPv4 address (e.g. `1.2.3.4`) or an IPv4 CIDR block (e.g. `1.2.3.0/24`). Only globally reachable addresses are accepted.
     * - UNKNOWN: deprecated, cannot be used when creating or updating policies, but may be returned for existing entries.
     *   Available values: "EMAIL", "DOMAIN", "IP", "UNKNOWN".
     */
    patternType?: pulumi.Input<string | undefined>;
}
/**
 * The set of arguments for constructing a EmailSecurityBlockSender resource.
 */
export interface EmailSecurityBlockSenderArgs {
    /**
     * Identifier.
     */
    accountId: pulumi.Input<string>;
    comments?: pulumi.Input<string | undefined>;
    isRegex: pulumi.Input<boolean>;
    /**
     * The pattern value to match against. Format depends on `patternType`:
     * - EMAIL: a valid email address, e.g. `user@example.com`
     * - DOMAIN: a valid domain name, e.g. `example.com`
     * - IP: a plain IPv4 address (e.g. `1.2.3.4`) or an IPv4 CIDR block (e.g. `1.2.3.0/24`). Only globally reachable addresses are accepted; private, loopback, link-local, and unspecified addresses are rejected.
     */
    pattern: pulumi.Input<string>;
    /**
     * Type of pattern matching.
     * - EMAIL: matches a full email address (e.g. `user@example.com`)
     * - DOMAIN: matches a domain name (e.g. `example.com`)
     * - IP: matches a plain IPv4 address (e.g. `1.2.3.4`) or an IPv4 CIDR block (e.g. `1.2.3.0/24`). Only globally reachable addresses are accepted.
     * - UNKNOWN: deprecated, cannot be used when creating or updating policies, but may be returned for existing entries.
     *   Available values: "EMAIL", "DOMAIN", "IP", "UNKNOWN".
     */
    patternType: pulumi.Input<string>;
}
//# sourceMappingURL=emailSecurityBlockSender.d.ts.map