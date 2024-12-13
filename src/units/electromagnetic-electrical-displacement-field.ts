import type * as uom from "uom-types";

import { brandUom } from "../brand.ts";

export {
  ElectricDisplacementFieldUnitClass,
  ElectricDisplacementFieldUnit,
  ElectricDisplacementFieldUnitFrom,
} from "uom-types";

/**
 * @group Abstract Units
 * @category Electromagnetic
 */
export type ElectricDisplacementField = uom.ElectricDisplacementField;

/**
 * @group Abstract Units
 * @category Electromagnetic
 */
export const ElectricDisplacementField: (value: number) => ElectricDisplacementField =
  brandUom<ElectricDisplacementField>;

/**
 * A unit of {@link ElectricDisplacementField}.
 *
 * @group Units
 * @category Electromagnetic
 * @symbol `C/m²`
 */
export type CoulombPerSquareMeter = uom.CoulombPerSquareMeter;

/**
 * A unit of {@link ElectricDisplacementField}.
 *
 * @group Units
 * @category Electromagnetic
 * @symbol `C/m²`
 */
export const CoulombPerSquareMeter: (value: number) => CoulombPerSquareMeter = brandUom<CoulombPerSquareMeter>;
