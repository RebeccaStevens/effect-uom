import type * as uom from "uom-types";

import { brandUom } from "../brand.ts";

export { ElectricInductanceUnitClass, ElectricInductanceUnit, ElectricInductanceUnitFrom } from "uom-types";

/**
 * @group Abstract Units
 * @category Electromagnetic
 */
export type ElectricInductance = uom.ElectricInductance;

/**
 * @group Abstract Units
 * @category Electromagnetic
 */
export const ElectricInductance: <V extends ElectricInductance = ElectricInductance>(value: number) => V = brandUom;

/**
 * A unit of {@link ElectricInductance}.
 *
 * @group Units
 * @category Derived
 * @symbol `H`
 */
export type Henry = uom.Henry;

/**
 * A unit of {@link ElectricInductance}.
 *
 * @group Units
 * @category Derived
 * @symbol `H`
 */
export const Henry: (value: number) => Henry = brandUom;
