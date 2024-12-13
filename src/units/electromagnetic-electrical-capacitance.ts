import type * as uom from "uom-types";

import { brandUom } from "../brand.ts";

export { ElectricCapacitanceUnitClass, ElectricCapacitanceUnit, ElectricCapacitanceUnitFrom } from "uom-types";

/**
 * @group Abstract Units
 * @category Electromagnetic
 */
export type ElectricCapacitance = uom.ElectricCapacitance;

/**
 * @group Abstract Units
 * @category Electromagnetic
 */
export const ElectricCapacitance: (value: number) => ElectricCapacitance = brandUom<ElectricCapacitance>;

/**
 * A unit of {@link ElectricCapacitance}.
 *
 * One Farad is equal to the capacitance of a capacitor having an equal and opposite charge of 1 coulomb on
 * each plate and a potential difference of 1 volt between the plates.
 *
 * @group Units
 * @category Derived
 * @category Electromagnetic
 * @symbol `F`
 */
export type Farad = uom.Farad;

/**
 * A unit of {@link ElectricCapacitance}.
 *
 * One Farad is equal to the capacitance of a capacitor having an equal and opposite charge of 1 coulomb on
 * each plate and a potential difference of 1 volt between the plates.
 *
 * @group Units
 * @category Derived
 * @category Electromagnetic
 * @symbol `F`
 */
export const Farad: (value: number) => Farad = brandUom<Farad>;
