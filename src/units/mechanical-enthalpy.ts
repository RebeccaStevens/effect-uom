import type * as uom from "uom-types";

import { brandUom } from "../brand.ts";

export { EnthalpyUnitClass, EnthalpyUnit, EnthalpyUnitFrom } from "uom-types";

/**
 * @group Abstract Units
 * @category Mechanical
 */
export type Enthalpy = uom.Enthalpy;

/**
 * @group Abstract Units
 * @category Mechanical
 */
export const Enthalpy: (value: number) => Enthalpy = brandUom<Enthalpy>;

/**
 * A unit of {@link Enthalpy}.
 *
 * One gray is equal to the dose of one joule of energy absorbed per one kilogram of matter.
 *
 * @group Units
 * @category Derived
 * @category Mechanical
 * @symbol `Gy`
 */
export type Gray = uom.Gray;

/**
 * A unit of {@link Enthalpy}.
 *
 * One gray is equal to the dose of one joule of energy absorbed per one kilogram of matter.
 *
 * @group Units
 * @category Derived
 * @category Mechanical
 * @symbol `Gy`
 */
export const Gray: (value: number) => Gray = brandUom<Gray>;
