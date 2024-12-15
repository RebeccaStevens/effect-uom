import type * as uom from "uom-types";

import { brandUom } from "../brand.ts";

export { ThermalTransmittanceUnitClass, ThermalTransmittanceUnit, ThermalTransmittanceUnitFrom } from "uom-types";

/**
 * @group Abstract Units
 * @category Thermodynamic
 */
export type ThermalTransmittance = uom.ThermalTransmittance;

/**
 * @group Abstract Units
 * @category Thermodynamic
 */
export const ThermalTransmittance: <V extends ThermalTransmittance = ThermalTransmittance>(value: number) => V =
  brandUom;

/**
 * A unit of {@link ThermalTransmittance}.
 *
 * @group Units
 * @category Thermodynamic
 */
export type WattPerSquareMeterPerKelvin = uom.WattPerSquareMeterPerKelvin;

/**
 * A unit of {@link ThermalTransmittance}.
 *
 * @group Units
 * @category Thermodynamic
 */
export const WattPerSquareMeterPerKelvin: (value: number) => WattPerSquareMeterPerKelvin = brandUom;
