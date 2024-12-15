import type * as uom from "uom-types";

import { brandUom } from "../brand.ts";

export { SpecificVolumeUnitClass, SpecificVolumeUnit, SpecificVolumeUnitFrom } from "uom-types";

/**
 * @group Abstract Units
 * @category Thermodynamic
 */
export type SpecificVolume = uom.SpecificVolume;

/**
 * @group Abstract Units
 * @category Thermodynamic
 */
export const SpecificVolume: <V extends SpecificVolume = SpecificVolume>(value: number) => V = brandUom;

/**
 * A unit of {@link SpecificVolume}.
 *
 * @group Units
 * @category Mechanical
 * @symbol `m³/kg`
 */
export type CubicMeterPerKilogram = uom.CubicMeterPerKilogram;

/**
 * A unit of {@link SpecificVolume}.
 *
 * @group Units
 * @category Mechanical
 * @symbol `m³/kg`
 */
export const CubicMeterPerKilogram: (value: number) => CubicMeterPerKilogram = brandUom;
