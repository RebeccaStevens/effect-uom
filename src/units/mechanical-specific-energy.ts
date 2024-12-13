import type * as uom from "uom-types";

import { brandUom } from "../brand.ts";

export { SpecificEnergyUnitClass, SpecificEnergyUnit, SpecificEnergyUnitFrom } from "uom-types";

/**
 * @group Abstract Units
 * @category Mechanical
 */
export type SpecificEnergy = uom.SpecificEnergy;

/**
 * @group Abstract Units
 * @category Mechanical
 */
export const SpecificEnergy: (value: number) => SpecificEnergy = brandUom<SpecificEnergy>;

/**
 * A unit of {@link SpecificEnergy}.
 *
 * @group Units
 * @category Mechanical
 * @symbol `J/kg`
 */
export type JoulePerKilogram = uom.JoulePerKilogram;

/**
 * A unit of {@link SpecificEnergy}.
 *
 * @group Units
 * @category Mechanical
 * @symbol `J/kg`
 */
export const JoulePerKilogram: (value: number) => JoulePerKilogram = brandUom<JoulePerKilogram>;
