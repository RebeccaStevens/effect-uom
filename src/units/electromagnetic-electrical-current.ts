import type * as uom from "uom-types";

import { brandUom } from "../brand.ts";

export { ElectricCurrentUnitClass, ElectricCurrentUnit, ElectricCurrentUnitFrom } from "uom-types";

/**
 * @group Abstract Units
 * @category Electromagnetic
 */
export type ElectricCurrent = uom.ElectricCurrent;

/**
 * @group Abstract Units
 * @category Electromagnetic
 */
export const ElectricCurrent: (value: number) => ElectricCurrent = brandUom<ElectricCurrent>;

/**
 * A unit of {@link ElectricCurrent}.
 *
 * @group Units
 * @category Base
 * @symbol `A`
 */
export type Ampere = uom.Ampere;

/**
 * A unit of {@link ElectricCurrent}.
 *
 * @group Units
 * @category Base
 * @symbol `A`
 */
export const Ampere: (value: number) => Ampere = brandUom<Ampere>;
