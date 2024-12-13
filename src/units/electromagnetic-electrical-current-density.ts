import type * as uom from "uom-types";

import { brandUom } from "../brand.ts";

export { ElectricCurrentDensityUnitClass, ElectricCurrentDensityUnit, ElectricCurrentDensityUnitFrom } from "uom-types";

/**
 * @group Abstract Units
 * @category Electromagnetic
 */
export type ElectricCurrentDensity = uom.ElectricCurrentDensity;

/**
 * @group Abstract Units
 * @category Electromagnetic
 */
export const ElectricCurrentDensity: (value: number) => ElectricCurrentDensity = brandUom<ElectricCurrentDensity>;

/**
 * A unit of {@link ElectricCurrentDensity}.
 *
 * @group Units
 * @category Electromagnetic
 * @symbol `A/m²`
 */
export type AmperePerSquareMeter = uom.AmperePerSquareMeter;

/**
 * A unit of {@link ElectricCurrentDensity}.
 *
 * @group Units
 * @category Electromagnetic
 * @symbol `A/m²`
 */
export const AmperePerSquareMeter: (value: number) => AmperePerSquareMeter = brandUom<AmperePerSquareMeter>;
