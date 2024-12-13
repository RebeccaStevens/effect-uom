import type * as uom from "uom-types";

import { brandUom } from "../brand.ts";

export { EntropyUnitClass, EntropyUnit, EntropyUnitFrom } from "uom-types";

/**
 * @group Abstract Units
 * @category Thermodynamic
 */
export type Entropy = uom.Entropy;

/**
 * @group Abstract Units
 * @category Thermodynamic
 */
export const Entropy: (value: number) => Entropy = brandUom<Entropy>;

/**
 * A unit of {@link Entropy}.
 *
 * @group Units
 * @category Thermodynamic
 * @symbol `J/K`
 */
export type JoulePerKelvin = uom.JoulePerKelvin;

/**
 * A unit of {@link Entropy}.
 *
 * @group Units
 * @category Thermodynamic
 * @symbol `J/K`
 */
export const JoulePerKelvin: (value: number) => JoulePerKelvin = brandUom<JoulePerKelvin>;
