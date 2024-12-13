import type * as uom from "uom-types";

import { brandUom } from "../brand.ts";

export { EnergyDensityUnitClass, EnergyDensityUnit, EnergyDensityUnitFrom } from "uom-types";

/**
 * @group Abstract Units
 * @category Mechanical
 */
export type EnergyDensity = uom.EnergyDensity;

/**
 * @group Abstract Units
 * @category Mechanical
 */
export const EnergyDensity: (value: number) => EnergyDensity = brandUom<EnergyDensity>;

/**
 * A unit of {@link EnergyDensity}.
 *
 * @group Units
 * @category Mechanical
 * @symbol `J/m³`
 */
export type JoulePerCubicMeter = uom.JoulePerCubicMeter;

/**
 * A unit of {@link EnergyDensity}.
 *
 * @group Units
 * @category Mechanical
 * @symbol `J/m³`
 */
export const JoulePerCubicMeter: (value: number) => JoulePerCubicMeter = brandUom<JoulePerCubicMeter>;
