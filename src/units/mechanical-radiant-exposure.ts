import type * as uom from "uom-types";

import { brandUom } from "../brand.ts";

export { RadiantExposureUnitClass, RadiantExposureUnit, RadiantExposureUnitFrom } from "uom-types";

/**
 * @group Abstract Units
 * @category Mechanical
 */
export type RadiantExposure = uom.RadiantExposure;

/**
 * @group Abstract Units
 * @category Mechanical
 */
export const RadiantExposure: (value: number) => RadiantExposure = brandUom<RadiantExposure>;

/**
 * A unit of {@link RadiantExposure}.
 *
 * @group Units
 * @category Mechanical
 * @symbol `J/m²`
 */
export type JoulePerSquareMeter = uom.JoulePerSquareMeter;

/**
 * A unit of {@link RadiantExposure}.
 *
 * @group Units
 * @category Mechanical
 * @symbol `J/m²`
 */
export const JoulePerSquareMeter: (value: number) => JoulePerSquareMeter = brandUom<JoulePerSquareMeter>;
