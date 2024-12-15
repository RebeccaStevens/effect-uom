import type * as uom from "uom-types";

import { brandUom } from "../brand.ts";

export { MagneticMomentUnitClass, MagneticMomentUnit, MagneticMomentUnitFrom } from "uom-types";

/**
 * @group Abstract Units
 * @category Electromagnetic
 */
export type MagneticMoment = uom.MagneticMoment;

/**
 * @group Abstract Units
 * @category Electromagnetic
 */
export const MagneticMoment: <V extends MagneticMoment = MagneticMoment>(value: number) => V = brandUom;

/**
 * A unit of {@link MagneticMoment}.
 *
 * @group Units
 * @category Electromagnetic
 * @symbol `Wb⋅m`
 */
export type WeberMeter = uom.WeberMeter;

/**
 * A unit of {@link MagneticMoment}.
 *
 * @group Units
 * @category Electromagnetic
 * @symbol `Wb⋅m`
 */
export const WeberMeter: (value: number) => WeberMeter = brandUom;
