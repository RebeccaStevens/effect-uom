import type * as uom from "uom-types";

import { brandUom } from "../brand.ts";

export { ElectricChargeUnitClass, ElectricChargeUnit, ElectricChargeUnitFrom } from "uom-types";

/**
 * @group Abstract Units
 * @category Electromagnetic
 */
export type ElectricCharge = uom.ElectricCharge;

/**
 * @group Abstract Units
 * @category Electromagnetic
 */
export const ElectricCharge: <V extends ElectricCharge = ElectricCharge>(value: number) => V = brandUom;

/**
 * A unit of {@link ElectricCharge}.
 *
 * One Coulomb is equal to the quantity of charge transferred in one second by a steady current of one Ampere.
 *
 * @group Units
 * @category Derived
 * @symbol `C`
 */
export type Coulomb = uom.Coulomb;

/**
 * A unit of {@link ElectricCharge}.
 *
 * One Coulomb is equal to the quantity of charge transferred in one second by a steady current of one Ampere.
 *
 * @group Units
 * @category Derived
 * @symbol `C`
 */
export const Coulomb: (value: number) => Coulomb = brandUom;
