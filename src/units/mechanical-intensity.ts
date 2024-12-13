import type * as uom from "uom-types";

import { brandUom } from "../brand.ts";

export { IntensityUnitClass, IntensityUnit, IntensityUnitFrom } from "uom-types";

/**
 * @group Abstract Units
 * @category Mechanical
 */
export type Intensity = uom.Intensity;

/**
 * @group Abstract Units
 * @category Mechanical
 */
export const Intensity: (value: number) => Intensity = brandUom<Intensity>;

/**
 * A unit of {@link Intensity}.
 *
 * @group Units
 * @category Mechanical
 * @symbol `W/m²`
 */
export type WattPerSquareMeter = uom.WattPerSquareMeter;

/**
 * A unit of {@link Intensity}.
 *
 * @group Units
 * @category Mechanical
 * @symbol `W/m²`
 */
export const WattPerSquareMeter: (value: number) => WattPerSquareMeter = brandUom<WattPerSquareMeter>;
