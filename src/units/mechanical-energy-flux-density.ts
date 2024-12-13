import type * as uom from "uom-types";

import { brandUom } from "../brand.ts";

export { EnergyFluxDensityUnitClass, EnergyFluxDensityUnit, EnergyFluxDensityUnitFrom } from "uom-types";

/**
 * @group Abstract Units
 * @category Mechanical
 */
export type EnergyFluxDensity = uom.EnergyFluxDensity;

/**
 * @group Abstract Units
 * @category Mechanical
 */
export const EnergyFluxDensity: (value: number) => EnergyFluxDensity = brandUom<EnergyFluxDensity>;

/**
 * A unit of {@link EnergyFluxDensity}.
 *
 * @group Units
 * @category Mechanical
 * @symbol `J/(m²⋅s)`
 */
export type JoulePerSquareMeterSecond = uom.JoulePerSquareMeterSecond;

/**
 * A unit of {@link EnergyFluxDensity}.
 *
 * @group Units
 * @category Mechanical
 * @symbol `J/(m²⋅s)`
 */
export const JoulePerSquareMeterSecond: (value: number) => JoulePerSquareMeterSecond =
  brandUom<JoulePerSquareMeterSecond>;
