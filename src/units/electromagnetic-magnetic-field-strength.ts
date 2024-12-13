import type * as uom from "uom-types";

import { brandUom } from "../brand.ts";

export { MagneticFieldStrengthUnitClass, MagneticFieldStrengthUnit, MagneticFieldStrengthUnitFrom } from "uom-types";

/**
 * @group Abstract Units
 * @category Electromagnetic
 */
export type MagneticFieldStrength = uom.MagneticFieldStrength;

/**
 * @group Abstract Units
 * @category Electromagnetic
 */
export const MagneticFieldStrength: (value: number) => MagneticFieldStrength = brandUom<MagneticFieldStrength>;

/**
 * A unit of {@link MagneticFieldStrength}.
 *
 * @group Units
 * @category Electromagnetic
 * @symbol `A/m`
 */
export type AmperePerMeter = uom.AmperePerMeter;

/**
 * A unit of {@link MagneticFieldStrength}.
 *
 * @group Units
 * @category Electromagnetic
 * @symbol `A/m`
 */
export const AmperePerMeter: (value: number) => AmperePerMeter = brandUom<AmperePerMeter>;
