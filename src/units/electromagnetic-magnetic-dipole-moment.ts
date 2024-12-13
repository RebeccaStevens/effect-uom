import type * as uom from "uom-types";

import { brandUom } from "../brand.ts";

export { MagneticDipoleMomentUnitClass, MagneticDipoleMomentUnit, MagneticDipoleMomentUnitFrom } from "uom-types";

/**
 * @group Abstract Units
 * @category Electromagnetic
 */
export type MagneticDipoleMoment = uom.MagneticDipoleMoment;

/**
 * @group Abstract Units
 * @category Electromagnetic
 */
export const MagneticDipoleMoment: (value: number) => MagneticDipoleMoment = brandUom<MagneticDipoleMoment>;

/**
 * A unit of {@link MagneticDipoleMoment}.
 *
 * @group Units
 * @category Electromagnetic
 * @symbol `J/T`
 */
export type JoulePerTesla = uom.JoulePerTesla;

/**
 * A unit of {@link MagneticDipoleMoment}.
 *
 * @group Units
 * @category Electromagnetic
 * @symbol `J/T`
 */
export const JoulePerTesla: (value: number) => JoulePerTesla = brandUom<JoulePerTesla>;
