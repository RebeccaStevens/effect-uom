import type * as uom from "uom-types";

import { brandUom } from "../brand.ts";

export { ElectricConductanceUnitClass, ElectricConductanceUnit, ElectricConductanceUnitFrom } from "uom-types";

/**
 * @group Abstract Units
 * @category Electromagnetic
 */
export type ElectricConductance = uom.ElectricConductance;

/**
 * @group Abstract Units
 * @category Electromagnetic
 */
export const ElectricConductance: <V extends ElectricConductance = ElectricConductance>(value: number) => V = brandUom;

/**
 * A unit of {@link ElectricConductance}.
 *
 * One Siemens is equal to one ampere per volt.
 *
 * @group Units
 * @category Electromagnetic
 * @symbol `S`
 */
export type Siemens = uom.Siemens;

/**
 * A unit of {@link ElectricConductance}.
 *
 * One Siemens is equal to one ampere per volt.
 *
 * @group Units
 * @category Electromagnetic
 * @symbol `S`
 */
export const Siemens: (value: number) => Siemens = brandUom;
