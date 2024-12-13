import type * as uom from "uom-types";

import { brandUom } from "../brand.ts";

export { ExposureUnitClass, ExposureUnit, ExposureUnitFrom } from "uom-types";

/**
 * @group Abstract Units
 * @category Electromagnetic
 */
export type Exposure = uom.Exposure;

/**
 * @group Abstract Units
 * @category Electromagnetic
 */
export const Exposure: (value: number) => Exposure = brandUom<Exposure>;

/**
 * A unit of {@link Exposure}.
 *
 * @group Units
 * @category Electromagnetic
 * @symbol `C/kg`
 */
export type CoulombPerKilogram = uom.CoulombPerKilogram;

/**
 * A unit of {@link Exposure}.
 *
 * @group Units
 * @category Electromagnetic
 * @symbol `C/kg`
 */
export const CoulombPerKilogram: (value: number) => CoulombPerKilogram = brandUom<CoulombPerKilogram>;
