import type * as uom from "uom-types";

import { brandUom } from "../brand.ts";

export { PowerUnitClass, PowerUnit, PowerUnitFrom } from "uom-types";

/**
 * @group Abstract Units
 * @category Electromagnetic
 * @category Mechanical
 */
export type Power = uom.Power;

/**
 * @group Abstract Units
 * @category Electromagnetic
 * @category Mechanical
 */
export const Power: (value: number) => Power = brandUom<Power>;

/**
 * A unit of {@link Power}.
 *
 * @group Units
 * @category Derived
 * @category Electromagnetic
 * @category Mechanical
 * @symbol `W`
 */
export type Watt = uom.Watt;

/**
 * A unit of {@link Power}.
 *
 * @group Units
 * @category Derived
 * @category Electromagnetic
 * @category Mechanical
 * @symbol `W`
 */
export const Watt: (value: number) => Watt = brandUom<Watt>;
