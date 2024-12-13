import type * as uom from "uom-types";

import { brandUom } from "../brand.ts";

export {
  ThermalExpansionCoefficientUnitClass,
  ThermalExpansionCoefficientUnit,
  ThermalExpansionCoefficientUnitFrom,
} from "uom-types";

/**
 * @group Abstract Units
 * @category Thermodynamic
 */
export type ThermalExpansionCoefficient = uom.ThermalExpansionCoefficient;

/**
 * @group Abstract Units
 * @category Thermodynamic
 */
export const ThermalExpansionCoefficient: (value: number) => ThermalExpansionCoefficient =
  brandUom<ThermalExpansionCoefficient>;
