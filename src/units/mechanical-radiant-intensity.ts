import type * as uom from "uom-types";

import { brandUom } from "../brand.ts";

export { RadiantIntensityUnitClass, RadiantIntensityUnit, RadiantIntensityUnitFrom } from "uom-types";

/**
 * @group Abstract Units
 * @category Mechanical
 */
export type RadiantIntensity = uom.RadiantIntensity;

/**
 * @group Abstract Units
 * @category Mechanical
 */
export const RadiantIntensity: (value: number) => RadiantIntensity = brandUom<RadiantIntensity>;

/**
 * A unit of {@link RadiantIntensity}.
 *
 * @group Units
 * @category Mechanical
 * @symbol `W/sr`
 */
export type WattPerSteradian = uom.WattPerSteradian;

/**
 * A unit of {@link RadiantIntensity}.
 *
 * @group Units
 * @category Mechanical
 * @symbol `W/sr`
 */
export const WattPerSteradian: (value: number) => WattPerSteradian = brandUom<WattPerSteradian>;
