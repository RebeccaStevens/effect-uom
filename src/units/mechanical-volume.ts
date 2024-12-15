import type * as uom from "uom-types";

import { brandUom } from "../brand.ts";

export { VolumeUnitClass, VolumeUnit, VolumeUnitFrom } from "uom-types";

/**
 * @group Unit Classes
 * @category Mechanical
 */
export type Volume = uom.Volume;

/**
 * @group Unit Classes
 * @category Mechanical
 */
export const Volume: (value: number) => Volume = brandUom;

/**
 * A unit of volume.
 *
 * @group Units
 * @category Mechanical
 * @symbol `l`
 */
export type Liter = uom.Liter;

/**
 * A unit of volume.
 *
 * @group Units
 * @category Mechanical
 * @symbol `l`
 */
export const Liter: (value: number) => Liter = brandUom;
