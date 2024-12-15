import type * as uom from "uom-types";

import { brandUom } from "../brand.ts";

export { JerkUnitClass, JerkUnit, JerkUnitFrom } from "uom-types";

/**
 * @group Abstract Units
 * @category Kinematic
 */
export type Jerk = uom.Jerk;

/**
 * @group Abstract Units
 * @category Kinematic
 */
export const Jerk: <V extends Jerk = Jerk>(value: number) => V = brandUom;

/**
 * A unit of {@link Jerk}.
 *
 * @group Units
 * @category Kinematic
 * @symbol `m/s³`
 */
export type MeterPerSecondCubed = uom.MeterPerSecondCubed;

/**
 * A unit of {@link Jerk}.
 *
 * @group Units
 * @category Kinematic
 * @symbol `m/s³`
 */
export const MeterPerSecondCubed: (value: number) => MeterPerSecondCubed = brandUom;
