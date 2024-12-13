import type * as uom from "uom-types";

import { brandUom } from "../brand.ts";

export { MagneticPermeabilityUnitClass, MagneticPermeabilityUnit, MagneticPermeabilityUnitFrom } from "uom-types";

/**
 * @group Abstract Units
 * @category Electromagnetic
 */
export type MagneticPermeability = uom.MagneticPermeability;

/**
 * @group Abstract Units
 * @category Electromagnetic
 */
export const MagneticPermeability: (value: number) => MagneticPermeability = brandUom<MagneticPermeability>;

/**
 * A unit of {@link MagneticPermeability}.
 *
 * @group Units
 * @category Electromagnetic
 * @symbol `H/m`
 */
export type HenryPerMeter = uom.HenryPerMeter;

/**
 * A unit of {@link MagneticPermeability}.
 *
 * @group Units
 * @category Electromagnetic
 * @symbol `H/m`
 */
export const HenryPerMeter: (value: number) => HenryPerMeter = brandUom<HenryPerMeter>;
