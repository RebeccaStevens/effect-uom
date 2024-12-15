import type * as uom from "uom-types";

import { brandUom } from "../brand.ts";

export { CrackleUnitClass, CrackleUnit, CrackleUnitFrom } from "uom-types";

/**
 * @group Abstract Units
 * @category Kinematic
 */
export type Crackle = uom.Crackle;

/**
 * @group Abstract Units
 * @category Kinematic
 */
export const Crackle: <V extends Crackle = Crackle>(value: number) => V = brandUom;

/**
 * A unit of {@link Crackle}.
 *
 * @group Units
 * @category Kinematic
 * @symbol `m/s⁵`
 */
export type MeterPerSecondToTheFifth = uom.MeterPerSecondToTheFifth;

/**
 * A unit of {@link Crackle}.
 *
 * @group Units
 * @category Kinematic
 * @symbol `m/s⁵`
 */
export const MeterPerSecondToTheFifth: (value: number) => MeterPerSecondToTheFifth = brandUom;
