import type * as uom from "uom-types";

import { brandUom } from "../brand.ts";

export { FrequencyDriftUnitClass, FrequencyDriftUnit, FrequencyDriftUnitFrom } from "uom-types";

/**
 * @group Abstract Units
 * @category Kinematic
 */
export type FrequencyDrift = uom.FrequencyDrift;

/**
 * @group Abstract Units
 * @category Kinematic
 */
export const FrequencyDrift: (value: number) => FrequencyDrift = brandUom<FrequencyDrift>;

/**
 * A unit of {@link FrequencyDrift} equal to one hertz per second.
 *
 * @group Units
 * @category Kinematic
 * @symbol `Hz/s`
 */
export type HertzPerSecond = uom.HertzPerSecond;

/**
 * A unit of {@link FrequencyDrift} equal to one hertz per second.
 *
 * @group Units
 * @category Kinematic
 * @symbol `Hz/s`
 */
export const HertzPerSecond: (value: number) => HertzPerSecond = brandUom<HertzPerSecond>;
