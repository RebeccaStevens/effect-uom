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
export const Entropy: <V extends Entropy = Entropy>(value: number) => V = brandUom;

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
export const JoulePerKelvin: (value: number) => JoulePerKelvin = brandUom;
