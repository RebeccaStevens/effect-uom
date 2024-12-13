import type * as uom from "uom-types";

import { brandUom } from "../brand.ts";

export { ForceUnitClass, ForceUnit, ForceUnitFrom } from "uom-types";

/**
 * @group Abstract Units
 * @category Mechanical
 */
export type Force = uom.Force;

/**
 * @group Abstract Units
 * @category Mechanical
 */
export const Force: (value: number) => Force = brandUom<Force>;

/**
 * A unit of {@link Force}.
 *
 * One newton is the force required to accelerate a mass of 1 kilogram at 1 meter per second per second.
 *
 * @group Units
 * @category Derived
 * @category Mechanical
 * @symbol `N`
 */
export type Newton = uom.Newton;

/**
 * A unit of {@link Force}.
 *
 * One newton is the force required to accelerate a mass of 1 kilogram at 1 meter per second per second.
 *
 * @group Units
 * @category Derived
 * @category Mechanical
 * @symbol `N`
 */
export const Newton: (value: number) => Newton = brandUom<Newton>;
