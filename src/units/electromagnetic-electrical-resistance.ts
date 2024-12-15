import type * as uom from "uom-types";

import { brandUom } from "../brand.ts";

export { ElectricResistanceUnitClass, ElectricResistanceUnit, ElectricResistanceUnitFrom } from "uom-types";

/**
 * @group Abstract Units
 * @category Electromagnetic
 */
export type ElectricResistance = uom.ElectricResistance;

/**
 * @group Abstract Units
 * @category Electromagnetic
 */
export const ElectricResistance: <V extends ElectricResistance = ElectricResistance>(value: number) => V = brandUom;

/**
 * A unit of {@link ElectricResistance}.
 *
 * One Ohm is equal to the resistance of a conductor in which a current of one Ampere is produced
 * by a potential of one volt across its terminals.
 *
 * @group Units
 * @category Electromagnetic
 * @symbol `Ω`
 */
export type Ohm = uom.Ohm;

/**
 * A unit of {@link ElectricResistance}.
 *
 * One Ohm is equal to the resistance of a conductor in which a current of one Ampere is produced
 * by a potential of one volt across its terminals.
 *
 * @group Units
 * @category Electromagnetic
 * @symbol `Ω`
 */
export const Ohm: (value: number) => Ohm = brandUom;
