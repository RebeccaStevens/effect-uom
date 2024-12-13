import type * as uom from "uom-types";

import { brandUom } from "../brand.ts";

export { MagneticSusceptibilityUnitClass, MagneticSusceptibilityUnit, MagneticSusceptibilityUnitFrom } from "uom-types";

/**
 * @group Abstract Units
 * @category Electromagnetic
 */
export type MagneticSusceptibility = uom.MagneticSusceptibility;

/**
 * @group Abstract Units
 * @category Electromagnetic
 */
export const MagneticSusceptibility: (value: number) => MagneticSusceptibility = brandUom<MagneticSusceptibility>;

/**
 * A unit of {@link MagneticSusceptibility}.
 *
 * @group Units
 * @category Electromagnetic
 * @symbol `m/H`
 */
export type MeterPerHenry = uom.MeterPerHenry;

/**
 * A unit of {@link MagneticSusceptibility}.
 *
 * @group Units
 * @category Electromagnetic
 * @symbol `m/H`
 */
export const MeterPerHenry: (value: number) => MeterPerHenry = brandUom<MeterPerHenry>;
