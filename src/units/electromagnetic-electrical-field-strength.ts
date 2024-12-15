import type * as uom from "uom-types";

import { brandUom } from "../brand.ts";

export { ElectricFieldStrengthUnitClass, ElectricFieldStrengthUnit, ElectricFieldStrengthUnitFrom } from "uom-types";

/**
 * @group Abstract Units
 * @category Electromagnetic
 */
export type ElectricFieldStrength = uom.ElectricFieldStrength;

/**
 * @group Abstract Units
 * @category Electromagnetic
 */
export const ElectricFieldStrength: <V extends ElectricFieldStrength = ElectricFieldStrength>(value: number) => V =
  brandUom;

/**
 * A unit of {@link ElectricFieldStrength}.
 *
 * @group Units
 * @category Electromagnetic
 * @symbol `V/m`
 */
export type VoltPerMeter = uom.VoltPerMeter;

/**
 * A unit of {@link ElectricFieldStrength}.
 *
 * @group Units
 * @category Electromagnetic
 * @symbol `V/m`
 */
export const VoltPerMeter: (value: number) => VoltPerMeter = brandUom;
