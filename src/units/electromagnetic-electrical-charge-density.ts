import type * as uom from "uom-types";

import { brandUom } from "../brand.ts";

export { ElectricChargeDensityUnitClass, ElectricChargeDensityUnit, ElectricChargeDensityUnitFrom } from "uom-types";

/**
 * @group Abstract Units
 * @category Electromagnetic
 */
export type ElectricChargeDensity = uom.ElectricChargeDensity;

/**
 * @group Abstract Units
 * @category Electromagnetic
 */
export const ElectricChargeDensity: <V extends ElectricChargeDensity = ElectricChargeDensity>(value: number) => V =
  brandUom;

/**
 * A unit of {@link ElectricChargeDensity}.
 *
 * @group Units
 * @category Electromagnetic
 * @symbol `C/m³`
 */
export type CoulombPerCubicMeter = uom.CoulombPerCubicMeter;

/**
 * A unit of {@link ElectricChargeDensity}.
 *
 * @group Units
 * @category Electromagnetic
 * @symbol `C/m³`
 */
export const CoulombPerCubicMeter: (value: number) => CoulombPerCubicMeter = brandUom;
