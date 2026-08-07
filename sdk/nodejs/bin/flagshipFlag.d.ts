import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
/**
 * Accepted Permissions
 *
 * - `Flagship Read`
 * - `Flagship Write`
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as cloudflare from "@pulumi/cloudflare";
 *
 * const exampleFlagshipFlag = new cloudflare.FlagshipFlag("example_flagship_flag", {
 *     accountId: "account_id",
 *     appId: "app_id",
 *     defaultVariation: "x",
 *     enabled: true,
 *     key: "x",
 *     rules: [{
 *         conditions: [{
 *             attribute: "x",
 *             operator: "equals",
 *             value: {},
 *         }],
 *         priority: 1,
 *         serveVariation: "x",
 *         rollout: {
 *             percentage: 0,
 *             attribute: "x",
 *         },
 *     }],
 *     variations: {
 *         foo: "string",
 *     },
 *     description: "description",
 *     type: "boolean",
 * });
 * ```
 *
 * ## Import
 *
 * > This resource does not currently support `pulumi import`.
 */
export declare class FlagshipFlag extends pulumi.CustomResource {
    /**
     * Get an existing FlagshipFlag resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: FlagshipFlagState, opts?: pulumi.CustomResourceOptions): FlagshipFlag;
    /**
     * Returns true if the given object is an instance of FlagshipFlag.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is FlagshipFlag;
    /**
     * Cloudflare account ID.
     */
    readonly accountId: pulumi.Output<string>;
    /**
     * App identifier.
     */
    readonly appId: pulumi.Output<string>;
    /**
     * Variation served when no rule matches or the flag is disabled. Must be a key in `variations`.
     */
    readonly defaultVariation: pulumi.Output<string>;
    readonly description: pulumi.Output<string | undefined>;
    /**
     * When false, the flag bypasses all rules and always serves `defaultVariation`.
     */
    readonly enabled: pulumi.Output<boolean>;
    /**
     * Flag key (slug).
     */
    readonly flagKey: pulumi.Output<string | undefined>;
    /**
     * Unique identifier for the flag within an app. Used in all evaluation and SDK calls.
     */
    readonly key: pulumi.Output<string>;
    /**
     * Targeting rules evaluated in ascending `priority`; the first matching rule wins. An empty array means the flag always serves `defaultVariation`.
     */
    readonly rules: pulumi.Output<outputs.FlagshipFlagRule[]>;
    /**
     * Value type of the flag's variations. Inferred from the variation values on write, so it may be omitted in requests.
     * Available values: "boolean", "string", "number", "json".
     */
    readonly type: pulumi.Output<string | undefined>;
    readonly updatedAt: pulumi.Output<string>;
    readonly updatedBy: pulumi.Output<string>;
    /**
     * Map of variation name to value. All values must be the same type (boolean, string, number, or JSON object/array). Each serialized value must be 10KB or smaller.
     */
    readonly variations: pulumi.Output<{
        [key: string]: string;
    }>;
    /**
     * Create a FlagshipFlag resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: FlagshipFlagArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering FlagshipFlag resources.
 */
export interface FlagshipFlagState {
    /**
     * Cloudflare account ID.
     */
    accountId?: pulumi.Input<string | undefined>;
    /**
     * App identifier.
     */
    appId?: pulumi.Input<string | undefined>;
    /**
     * Variation served when no rule matches or the flag is disabled. Must be a key in `variations`.
     */
    defaultVariation?: pulumi.Input<string | undefined>;
    description?: pulumi.Input<string | undefined>;
    /**
     * When false, the flag bypasses all rules and always serves `defaultVariation`.
     */
    enabled?: pulumi.Input<boolean | undefined>;
    /**
     * Flag key (slug).
     */
    flagKey?: pulumi.Input<string | undefined>;
    /**
     * Unique identifier for the flag within an app. Used in all evaluation and SDK calls.
     */
    key?: pulumi.Input<string | undefined>;
    /**
     * Targeting rules evaluated in ascending `priority`; the first matching rule wins. An empty array means the flag always serves `defaultVariation`.
     */
    rules?: pulumi.Input<pulumi.Input<inputs.FlagshipFlagRule>[] | undefined>;
    /**
     * Value type of the flag's variations. Inferred from the variation values on write, so it may be omitted in requests.
     * Available values: "boolean", "string", "number", "json".
     */
    type?: pulumi.Input<string | undefined>;
    updatedAt?: pulumi.Input<string | undefined>;
    updatedBy?: pulumi.Input<string | undefined>;
    /**
     * Map of variation name to value. All values must be the same type (boolean, string, number, or JSON object/array). Each serialized value must be 10KB or smaller.
     */
    variations?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    } | undefined>;
}
/**
 * The set of arguments for constructing a FlagshipFlag resource.
 */
export interface FlagshipFlagArgs {
    /**
     * Cloudflare account ID.
     */
    accountId: pulumi.Input<string>;
    /**
     * App identifier.
     */
    appId: pulumi.Input<string>;
    /**
     * Variation served when no rule matches or the flag is disabled. Must be a key in `variations`.
     */
    defaultVariation: pulumi.Input<string>;
    description?: pulumi.Input<string | undefined>;
    /**
     * When false, the flag bypasses all rules and always serves `defaultVariation`.
     */
    enabled: pulumi.Input<boolean>;
    /**
     * Flag key (slug).
     */
    flagKey?: pulumi.Input<string | undefined>;
    /**
     * Unique identifier for the flag within an app. Used in all evaluation and SDK calls.
     */
    key: pulumi.Input<string>;
    /**
     * Targeting rules evaluated in ascending `priority`; the first matching rule wins. An empty array means the flag always serves `defaultVariation`.
     */
    rules: pulumi.Input<pulumi.Input<inputs.FlagshipFlagRule>[]>;
    /**
     * Value type of the flag's variations. Inferred from the variation values on write, so it may be omitted in requests.
     * Available values: "boolean", "string", "number", "json".
     */
    type?: pulumi.Input<string | undefined>;
    /**
     * Map of variation name to value. All values must be the same type (boolean, string, number, or JSON object/array). Each serialized value must be 10KB or smaller.
     */
    variations: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
//# sourceMappingURL=flagshipFlag.d.ts.map