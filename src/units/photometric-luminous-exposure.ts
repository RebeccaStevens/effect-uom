import type * as uom from "uom-types";

import { brandUom } from "../brand.ts";

export { LuminousExposureUnitClass, LuminousExposureUnit, LuminousExposureUnitFrom } from "uom-types";

/**
 * @group Abstract Units
 * @category Photometric
 */
export type LuminousExposure = uom.LuminousExposure;

/**
 * @group Abstract Units
 * @category Photometric
 */
export const LuminousExposure: (value: number) => LuminousExposure = brandUom<LuminousExposure>;

/**
 * A unit of {@link LuminousExposure}.
 *
 * @group Units
 * @category Photometric
 * @symbol `lx⋅s`
 */
export type LuxSecond = uom.LuxSecond;

/**
 * A unit of {@link LuminousExposure}.
 *
 * @group Units
 * @category Photometric
 * @symbol `lx⋅s`
 */
export const LuxSecond: (value: number) => LuxSecond = brandUom<LuxSecond>;
