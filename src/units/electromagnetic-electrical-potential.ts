import type * as uom from "uom-types";

import { brandUom } from "../brand.ts";

export { ElectricPotentialUnitClass, ElectricPotentialUnit, ElectricPotentialUnitFrom } from "uom-types";

/**
 * @group Abstract Units
 * @category Electromagnetic
 */
export type ElectricPotential = uom.ElectricPotential;

/**
 * @group Abstract Units
 * @category Electromagnetic
 */
export const ElectricPotential: <V extends ElectricPotential = ElectricPotential>(value: number) => V = brandUom;

/**
 * A unit of {@link ElectricPotential}.
 *
 * One Volt is equal to the difference of electric potential between two points on a conducting
 * wire carrying a export constant current of one Ampere when the power dissipated between the points is one watt.
 *
 * @group Units
 * @category Derived
 * @symbol `V`
 */
export type Volt = uom.Volt;

/**
 * A unit of {@link ElectricPotential}.
 *
 * One Volt is equal to the difference of electric potential between two points on a conducting
 * wire carrying a export constant current of one Ampere when the power dissipated between the points is one watt.
 *
 * @group Units
 * @category Derived
 * @symbol `V`
 */
export const Volt: (value: number) => Volt = brandUom;
