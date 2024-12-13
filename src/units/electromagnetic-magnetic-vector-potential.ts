import type * as uom from "uom-types";

import { brandUom } from "../brand.ts";

export {
  MagneticVectorPotentialUnitClass,
  MagneticVectorPotentialUnit,
  MagneticVectorPotentialUnitFrom,
} from "uom-types";

/**
 * @group Abstract Units
 * @category Electromagnetic
 */
export type MagneticVectorPotential = uom.MagneticVectorPotential;

/**
 * @group Abstract Units
 * @category Electromagnetic
 */
export const MagneticVectorPotential: (value: number) => MagneticVectorPotential = brandUom<MagneticVectorPotential>;

/**
 * A unit of {@link MagneticVectorPotential}.
 *
 * @group Units
 * @category Electromagnetic
 * @symbol `Wb/m`
 */
export type WeberPerMeter = uom.WeberPerMeter;

/**
 * A unit of {@link MagneticVectorPotential}.
 *
 * @group Units
 * @category Electromagnetic
 * @symbol `Wb/m`
 */
export const WeberPerMeter: (value: number) => WeberPerMeter = brandUom<WeberPerMeter>;
