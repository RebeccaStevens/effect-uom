import type * as uom from "uom-types";

import { brandUom } from "../brand.ts";

export { AmountOfSubstanceUnitClass, AmountOfSubstanceUnit, AmountOfSubstanceUnitFrom } from "uom-types";

/**
 * @group Abstract Units
 * @category Chemical
 */
export type AmountOfSubstance = uom.AmountOfSubstance;

/**
 * @group Abstract Units
 * @category Chemical
 */
export const AmountOfSubstance: (value: number) => AmountOfSubstance = brandUom<AmountOfSubstance>;

/**
 * A unit of {@link AmountOfSubstance}.
 *
 * @group Units
 * @category Base
 * @category Chemical
 * @symbol `mol`
 */
export type Mole = uom.Mole;

/**
 * A unit of {@link AmountOfSubstance}.
 *
 * @group Units
 * @category Base
 * @category Chemical
 * @symbol `mol`
 */
export const Mole: (value: number) => Mole = brandUom<Mole>;
