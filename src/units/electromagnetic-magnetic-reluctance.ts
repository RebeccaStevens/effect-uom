import type * as uom from "uom-types";

import { brandUom } from "../brand.ts";

export { MagneticReluctanceUnitClass, MagneticReluctanceUnit, MagneticReluctanceUnitFrom } from "uom-types";

/**
 * @group Abstract Units
 * @category Electromagnetic
 */
export type MagneticReluctance = uom.MagneticReluctance;

/**
 * @group Abstract Units
 * @category Electromagnetic
 */
export const MagneticReluctance: (value: number) => MagneticReluctance = brandUom<MagneticReluctance>;
