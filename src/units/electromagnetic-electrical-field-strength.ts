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
export const ElectricFieldStrength: (value: number) => ElectricFieldStrength = brandUom<ElectricFieldStrength>;

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
export const VoltPerMeter: (value: number) => VoltPerMeter = brandUom<VoltPerMeter>;
