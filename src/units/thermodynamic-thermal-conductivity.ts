import type * as uom from "uom-types";

import { brandUom } from "../brand.ts";

export { ThermalConductivityUnitClass, ThermalConductivityUnit, ThermalConductivityUnitFrom } from "uom-types";

/**
 * @group Abstract Units
 * @category Thermodynamic
 */
export type ThermalConductivity = uom.ThermalConductivity;

/**
 * @group Abstract Units
 * @category Thermodynamic
 */
export const ThermalConductivity: (value: number) => ThermalConductivity = brandUom<ThermalConductivity>;

/**
 * A unit of {@link ThermalConductivity}.
 *
 * @group Units
 * @category Thermodynamic
 * @symbol `W/(m⋅K)`
 */
export type WattPerMeterKelvin = uom.WattPerMeterKelvin;

/**
 * A unit of {@link ThermalConductivity}.
 *
 * @group Units
 * @category Thermodynamic
 * @symbol `W/(m⋅K)`
 */
export const WattPerMeterKelvin: (value: number) => WattPerMeterKelvin = brandUom<WattPerMeterKelvin>;
