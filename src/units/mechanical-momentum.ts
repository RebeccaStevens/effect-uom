import type * as uom from "uom-types";

import { brandUom } from "../brand.ts";

export { MomentumUnitClass, MomentumUnit, MomentumUnitFrom } from "uom-types";

/**
 * @group Abstract Units
 * @category Mechanical
 */
export type Momentum = uom.Momentum;

/**
 * @group Abstract Units
 * @category Mechanical
 */
export const Momentum: (value: number) => Momentum = brandUom<Momentum>;

/**
 * One newton second corresponds to a one newton of force applied for one second.
 *
 * @group Units
 * @category Mechanical
 * @symbol `N⋅s`
 */
export type NewtonSecond = uom.NewtonSecond;

/**
 * One newton second corresponds to a one newton of force applied for one second.
 *
 * @group Units
 * @category Mechanical
 * @symbol `N⋅s`
 */
export const NewtonSecond: (value: number) => NewtonSecond = brandUom<NewtonSecond>;
