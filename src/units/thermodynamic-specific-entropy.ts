import type * as uom from "uom-types";

import { brandUom } from "../brand.ts";

export { SpecificEntropyUnitClass, SpecificEntropyUnit, SpecificEntropyUnitFrom } from "uom-types";

/**
 * @group Abstract Units
 * @category Thermodynamic
 */
export type SpecificEntropy = uom.SpecificEntropy;

/**
 * @group Abstract Units
 * @category Thermodynamic
 */
export const SpecificEntropy: (value: number) => SpecificEntropy = brandUom<SpecificEntropy>;

/**
 * A unit of {@link SpecificEntropy}.
 *
 * @group Units
 * @category Thermodynamic
 * @symbol `J/(K⋅kg)`
 */
export type JoulePerKilogramKelvin = uom.JoulePerKilogramKelvin;

/**
 * A unit of {@link SpecificEntropy}.
 *
 * @group Units
 * @category Thermodynamic
 * @symbol `J/(K⋅kg)`
 */
export const JoulePerKilogramKelvin: (value: number) => JoulePerKilogramKelvin = brandUom<JoulePerKilogramKelvin>;
