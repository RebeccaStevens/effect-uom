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
export const Pop: <V extends Pop = Pop>(value: number) => V = brandUom;

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
export const MeterPerSecondToTheSixth: (value: number) => MeterPerSecondToTheSixth = brandUom;
