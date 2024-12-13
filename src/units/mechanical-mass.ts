import type * as uom from "uom-types";

import { brandUom } from "../brand.ts";

export { MassUnitClass, MassUnit, MassUnitFrom } from "uom-types";

/**
 * @group Abstract Units
 * @category Mechanical
 */
export type Mass = uom.Mass;

/**
 * @group Abstract Units
 * @category Mechanical
 */
export const Mass: (value: number) => Mass = brandUom<Mass>;

/**
 * A unit of {@link Mass}.
 *
 * @group Units
 * @category Base
 * @category Mechanical
 * @symbol `g`
 */
export type Gram = uom.Gram;

/**
 * A unit of {@link Mass}.
 *
 * @group Units
 * @category Base
 * @category Mechanical
 * @symbol `g`
 */
export const Gram: (value: number) => Gram = brandUom<Gram>;

/**
 * A unit of {@link Mass}.
 *
 * @group Units
 * @category Mechanical
 * @symbol `t`
 */
export type Tonne = uom.Tonne;

/**
 * A unit of {@link Mass}.
 *
 * @group Units
 * @category Mechanical
 * @symbol `t`
 */
export const Tonne: (value: number) => Tonne = brandUom<Tonne>;
