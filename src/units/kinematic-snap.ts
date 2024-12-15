import type * as uom from "uom-types";

import { brandUom } from "../brand.ts";

export { SnapUnitClass, SnapUnit, SnapUnitFrom } from "uom-types";

/**
 * @group Abstract Units
 * @category Kinematic
 */
export type Snap = uom.Snap;

/**
 * @group Abstract Units
 * @category Kinematic
 */
export const Snap: <V extends Snap = Snap>(value: number) => V = brandUom;

/**
 * A unit of {@link Snap}.
 *
 * @group Units
 * @category Kinematic
 * @symbol `m/s⁴`
 */
export type MeterPerSecondToTheFourth = uom.MeterPerSecondToTheFourth;

/**
 * A unit of {@link Snap}.
 *
 * @group Units
 * @category Kinematic
 * @symbol `m/s⁴`
 */
export const MeterPerSecondToTheFourth: (value: number) => MeterPerSecondToTheFourth = brandUom;
