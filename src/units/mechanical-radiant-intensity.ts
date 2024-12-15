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
export const RadiantIntensity: <V extends RadiantIntensity = RadiantIntensity>(value: number) => V = brandUom;

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
export const WattPerSteradian: (value: number) => WattPerSteradian = brandUom;
