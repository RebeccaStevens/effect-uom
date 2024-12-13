import type * as uom from "uom-types";

import { brandUom } from "../brand.ts";

export { PopUnitClass, PopUnit, PopUnitFrom } from "uom-types";

/**
 * @group Abstract Units
 * @category Kinematic
 */
export type Pop = uom.Pop;

/**
 * @group Abstract Units
 * @category Kinematic
 */
export const Pop: (value: number) => Pop = brandUom<Pop>;

/**
 * A unit of {@link Pop}.
 *
 * @group Units
 * @category Kinematic
 * @symbol `m/s⁶`
 */
export type MeterPerSecondToTheSixth = uom.MeterPerSecondToTheSixth;

/**
 * A unit of {@link Pop}.
 *
 * @group Units
 * @category Kinematic
 * @symbol `m/s⁶`
 */
export const MeterPerSecondToTheSixth: (value: number) => MeterPerSecondToTheSixth = brandUom<MeterPerSecondToTheSixth>;
