import type * as uom from "uom-types";

import { brandUom } from "../brand.ts";

export { MagneticRigidityUnitClass, MagneticRigidityUnit, MagneticRigidityUnitFrom } from "uom-types";

/**
 * @group Abstract Units
 * @category Electromagnetic
 */
export type MagneticRigidity = uom.MagneticRigidity;

/**
 * @group Abstract Units
 * @category Electromagnetic
 */
export const MagneticRigidity: (value: number) => MagneticRigidity = brandUom<MagneticRigidity>;

/**
 * A unit of {@link MagneticRigidity}.
 *
 * @group Units
 * @category Electromagnetic
 * @symbol `T⋅m`
 */
export type TeslaMeter = uom.TeslaMeter;

/**
 * A unit of {@link MagneticRigidity}.
 *
 * @group Units
 * @category Electromagnetic
 * @symbol `T⋅m`
 */
export const TeslaMeter: (value: number) => TeslaMeter = brandUom<TeslaMeter>;
