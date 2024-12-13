import type * as uom from "uom-types";

import { brandUom } from "../brand.ts";

export {
  ElectricLinearChargeDensityUnitClass,
  ElectricLinearChargeDensityUnit,
  ElectricLinearChargeDensityUnitFrom,
} from "uom-types";

/**
 * @group Abstract Units
 * @category Electromagnetic
 */
export type ElectricLinearChargeDensity = uom.ElectricLinearChargeDensity;

/**
 * @group Abstract Units
 * @category Electromagnetic
 */
export const ElectricLinearChargeDensity: (value: number) => ElectricLinearChargeDensity =
  brandUom<ElectricLinearChargeDensity>;

/**
 * A unit of {@link ElectricLinearChargeDensity}.
 *
 * @group Units
 * @category Electromagnetic
 * @symbol `C/m`
 */
export type CoulombPerMeter = uom.CoulombPerMeter;

/**
 * A unit of {@link ElectricLinearChargeDensity}.
 *
 * @group Units
 * @category Electromagnetic
 * @symbol `C/m`
 */
export const CoulombPerMeter: (value: number) => CoulombPerMeter = brandUom<CoulombPerMeter>;
