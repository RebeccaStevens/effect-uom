import type * as uom from "uom-types";

import { brandUom } from "../brand.ts";

export { LuminousIntensityUnitClass, LuminousIntensityUnit, LuminousIntensityUnitFrom } from "uom-types";

/**
 * @group Abstract Units
 * @category Photometric
 */
export type LuminousIntensity = uom.LuminousIntensity;

/**
 * @group Abstract Units
 * @category Photometric
 */
export const LuminousIntensity: <V extends LuminousIntensity = LuminousIntensity>(value: number) => V = brandUom;

/**
 * A unit of luminous intensity.
 *
 * @group Units
 * @category Base
 * @symbol `cd`
 */
export type Candela = uom.Candela;

/**
 * A unit of luminous intensity.
 *
 * @group Units
 * @category Base
 * @symbol `cd`
 */
export const Candela: (value: number) => Candela = brandUom;
