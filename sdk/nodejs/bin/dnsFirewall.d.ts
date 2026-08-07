import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
/**
 * Accepted Permissions
 *
 * - `DNS Firewall Read`
 * - `DNS Firewall Write`
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as cloudflare from "@pulumi/cloudflare";
 *
 * const exampleDnsFirewall = new cloudflare.DnsFirewall("example_dns_firewall", {
 *     accountId: "023e105f4ecef8ad9ca31a8372d0c353",
 *     name: "My Awesome DNS Firewall cluster",
 *     upstreamIps: [
 *         "192.0.2.1",
 *         "198.51.100.1",
 *         "2001:DB8:100::CF",
 *     ],
 *     attackMitigation: {
 *         enabled: true,
 *         onlyWhenUpstreamUnhealthy: false,
 *     },
 *     deprecateAnyRequests: true,
 *     dnsFirewallIpCount: 2,
 *     ecsFallback: false,
 *     maximumCacheTtl: 900,
 *     minimumCacheTtl: 60,
 *     negativeCacheTtl: 900,
 *     ratelimit: 600,
 *     retries: 2,
 * });
 * ```
 *
 * ## Import
 *
 * ```sh
 * $ pulumi import cloudflare:index/dnsFirewall:DnsFirewall example '<account_id>/<dns_firewall_id>'
 * ```
 */
export declare class DnsFirewall extends pulumi.CustomResource {
    /**
     * Get an existing DnsFirewall resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DnsFirewallState, opts?: pulumi.CustomResourceOptions): DnsFirewall;
    /**
     * Returns true if the given object is an instance of DnsFirewall.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is DnsFirewall;
    /**
     * Identifier.
     */
    readonly accountId: pulumi.Output<string>;
    /**
     * Attack mitigation settings
     */
    readonly attackMitigation: pulumi.Output<outputs.DnsFirewallAttackMitigation>;
    /**
     * Whether to refuse to answer queries for the ANY type
     */
    readonly deprecateAnyRequests: pulumi.Output<boolean | undefined>;
    /**
     * Number of IPv4 addresses to assign to the DNS Firewall cluster. Only used during cluster creation and cannot be changed later.
     */
    readonly dnsFirewallIpCount: pulumi.Output<number>;
    readonly dnsFirewallIps: pulumi.Output<string[]>;
    /**
     * Whether to forward client IP (resolver) subnet if no EDNS Client Subnet is sent
     */
    readonly ecsFallback: pulumi.Output<boolean | undefined>;
    /**
     * By default, Cloudflare attempts to cache responses for as long as
     * indicated by the TTL received from upstream nameservers. This setting
     * sets an upper bound on this duration. For caching purposes, higher TTLs
     * will be decreased to the maximum value defined by this setting.
     */
    readonly maximumCacheTtl: pulumi.Output<number>;
    /**
     * By default, Cloudflare attempts to cache responses for as long as
     * indicated by the TTL received from upstream nameservers. This setting
     * sets a lower bound on this duration. For caching purposes, lower TTLs
     * will be increased to the minimum value defined by this setting.
     *
     * This setting does not affect the TTL value in the DNS response
     * Cloudflare returns to clients. Cloudflare will always forward the TTL
     * value received from upstream nameservers.
     *
     * Note that, even with this setting, there is no guarantee that a
     * response will be cached for at least the specified duration. Cached
     * responses may be removed earlier for capacity or other operational
     * reasons.
     */
    readonly minimumCacheTtl: pulumi.Output<number>;
    /**
     * Last modification of DNS Firewall cluster
     */
    readonly modifiedOn: pulumi.Output<string>;
    /**
     * DNS Firewall cluster name
     */
    readonly name: pulumi.Output<string>;
    /**
     * This setting controls how long DNS Firewall should cache negative
     * responses (e.g., NXDOMAIN) from the upstream servers.
     *
     * This setting does not affect the TTL value in the DNS response
     * Cloudflare returns to clients. Cloudflare will always forward the TTL
     * value received from upstream nameservers.
     */
    readonly negativeCacheTtl: pulumi.Output<number | undefined>;
    /**
     * Maximum number of DNS queries per second that will be forwarded to your upstream nameservers. The limit is enforced per server, where each server receives a fraction of the configured value. The actual aggregate rate for a data center may vary depending on how many servers are present. Responses served from cache do not count toward this limit. Set to null to disable rate limiting.
     */
    readonly ratelimit: pulumi.Output<number | undefined>;
    /**
     * Number of retries for fetching DNS responses from upstream nameservers (not counting the initial attempt)
     */
    readonly retries: pulumi.Output<number>;
    readonly upstreamIps: pulumi.Output<string[]>;
    /**
     * Create a DnsFirewall resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DnsFirewallArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering DnsFirewall resources.
 */
export interface DnsFirewallState {
    /**
     * Identifier.
     */
    accountId?: pulumi.Input<string | undefined>;
    /**
     * Attack mitigation settings
     */
    attackMitigation?: pulumi.Input<inputs.DnsFirewallAttackMitigation | undefined>;
    /**
     * Whether to refuse to answer queries for the ANY type
     */
    deprecateAnyRequests?: pulumi.Input<boolean | undefined>;
    /**
     * Number of IPv4 addresses to assign to the DNS Firewall cluster. Only used during cluster creation and cannot be changed later.
     */
    dnsFirewallIpCount?: pulumi.Input<number | undefined>;
    dnsFirewallIps?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * Whether to forward client IP (resolver) subnet if no EDNS Client Subnet is sent
     */
    ecsFallback?: pulumi.Input<boolean | undefined>;
    /**
     * By default, Cloudflare attempts to cache responses for as long as
     * indicated by the TTL received from upstream nameservers. This setting
     * sets an upper bound on this duration. For caching purposes, higher TTLs
     * will be decreased to the maximum value defined by this setting.
     */
    maximumCacheTtl?: pulumi.Input<number | undefined>;
    /**
     * By default, Cloudflare attempts to cache responses for as long as
     * indicated by the TTL received from upstream nameservers. This setting
     * sets a lower bound on this duration. For caching purposes, lower TTLs
     * will be increased to the minimum value defined by this setting.
     *
     * This setting does not affect the TTL value in the DNS response
     * Cloudflare returns to clients. Cloudflare will always forward the TTL
     * value received from upstream nameservers.
     *
     * Note that, even with this setting, there is no guarantee that a
     * response will be cached for at least the specified duration. Cached
     * responses may be removed earlier for capacity or other operational
     * reasons.
     */
    minimumCacheTtl?: pulumi.Input<number | undefined>;
    /**
     * Last modification of DNS Firewall cluster
     */
    modifiedOn?: pulumi.Input<string | undefined>;
    /**
     * DNS Firewall cluster name
     */
    name?: pulumi.Input<string | undefined>;
    /**
     * This setting controls how long DNS Firewall should cache negative
     * responses (e.g., NXDOMAIN) from the upstream servers.
     *
     * This setting does not affect the TTL value in the DNS response
     * Cloudflare returns to clients. Cloudflare will always forward the TTL
     * value received from upstream nameservers.
     */
    negativeCacheTtl?: pulumi.Input<number | undefined>;
    /**
     * Maximum number of DNS queries per second that will be forwarded to your upstream nameservers. The limit is enforced per server, where each server receives a fraction of the configured value. The actual aggregate rate for a data center may vary depending on how many servers are present. Responses served from cache do not count toward this limit. Set to null to disable rate limiting.
     */
    ratelimit?: pulumi.Input<number | undefined>;
    /**
     * Number of retries for fetching DNS responses from upstream nameservers (not counting the initial attempt)
     */
    retries?: pulumi.Input<number | undefined>;
    upstreamIps?: pulumi.Input<pulumi.Input<string>[] | undefined>;
}
/**
 * The set of arguments for constructing a DnsFirewall resource.
 */
export interface DnsFirewallArgs {
    /**
     * Identifier.
     */
    accountId: pulumi.Input<string>;
    /**
     * Attack mitigation settings
     */
    attackMitigation?: pulumi.Input<inputs.DnsFirewallAttackMitigation | undefined>;
    /**
     * Whether to refuse to answer queries for the ANY type
     */
    deprecateAnyRequests?: pulumi.Input<boolean | undefined>;
    /**
     * Number of IPv4 addresses to assign to the DNS Firewall cluster. Only used during cluster creation and cannot be changed later.
     */
    dnsFirewallIpCount?: pulumi.Input<number | undefined>;
    /**
     * Whether to forward client IP (resolver) subnet if no EDNS Client Subnet is sent
     */
    ecsFallback?: pulumi.Input<boolean | undefined>;
    /**
     * By default, Cloudflare attempts to cache responses for as long as
     * indicated by the TTL received from upstream nameservers. This setting
     * sets an upper bound on this duration. For caching purposes, higher TTLs
     * will be decreased to the maximum value defined by this setting.
     */
    maximumCacheTtl?: pulumi.Input<number | undefined>;
    /**
     * By default, Cloudflare attempts to cache responses for as long as
     * indicated by the TTL received from upstream nameservers. This setting
     * sets a lower bound on this duration. For caching purposes, lower TTLs
     * will be increased to the minimum value defined by this setting.
     *
     * This setting does not affect the TTL value in the DNS response
     * Cloudflare returns to clients. Cloudflare will always forward the TTL
     * value received from upstream nameservers.
     *
     * Note that, even with this setting, there is no guarantee that a
     * response will be cached for at least the specified duration. Cached
     * responses may be removed earlier for capacity or other operational
     * reasons.
     */
    minimumCacheTtl?: pulumi.Input<number | undefined>;
    /**
     * DNS Firewall cluster name
     */
    name: pulumi.Input<string>;
    /**
     * This setting controls how long DNS Firewall should cache negative
     * responses (e.g., NXDOMAIN) from the upstream servers.
     *
     * This setting does not affect the TTL value in the DNS response
     * Cloudflare returns to clients. Cloudflare will always forward the TTL
     * value received from upstream nameservers.
     */
    negativeCacheTtl?: pulumi.Input<number | undefined>;
    /**
     * Maximum number of DNS queries per second that will be forwarded to your upstream nameservers. The limit is enforced per server, where each server receives a fraction of the configured value. The actual aggregate rate for a data center may vary depending on how many servers are present. Responses served from cache do not count toward this limit. Set to null to disable rate limiting.
     */
    ratelimit?: pulumi.Input<number | undefined>;
    /**
     * Number of retries for fetching DNS responses from upstream nameservers (not counting the initial attempt)
     */
    retries?: pulumi.Input<number | undefined>;
    upstreamIps: pulumi.Input<pulumi.Input<string>[]>;
}
//# sourceMappingURL=dnsFirewall.d.ts.map