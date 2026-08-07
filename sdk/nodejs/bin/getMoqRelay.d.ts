import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
export declare function getMoqRelay(args: GetMoqRelayArgs, opts?: pulumi.InvokeOptions): Promise<GetMoqRelayResult>;
/**
 * A collection of arguments for invoking getMoqRelay.
 */
export interface GetMoqRelayArgs {
    /**
     * Cloudflare account identifier.
     */
    accountId: string;
    filter?: inputs.GetMoqRelayFilter;
    relayId?: string;
}
/**
 * A collection of values returned by getMoqRelay.
 */
export interface GetMoqRelayResult {
    /**
     * Cloudflare account identifier.
     */
    readonly accountId: string;
    /**
     * upstreams and lingeringSubscribe are mutually exclusive.
     */
    readonly config: outputs.GetMoqRelayConfig;
    readonly created: string;
    readonly filter?: outputs.GetMoqRelayFilter;
    /**
     * The ID of this resource.
     */
    readonly id: string;
    readonly modified: string;
    readonly name: string;
    readonly relayId?: string;
    /**
     * "connected" when active, omitted otherwise.
     * Available values: "connected".
     */
    readonly status: string;
    readonly uid: string;
}
export declare function getMoqRelayOutput(args: GetMoqRelayOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetMoqRelayResult>;
/**
 * A collection of arguments for invoking getMoqRelay.
 */
export interface GetMoqRelayOutputArgs {
    /**
     * Cloudflare account identifier.
     */
    accountId: pulumi.Input<string>;
    filter?: pulumi.Input<inputs.GetMoqRelayFilterArgs | undefined>;
    relayId?: pulumi.Input<string | undefined>;
}
//# sourceMappingURL=getMoqRelay.d.ts.map