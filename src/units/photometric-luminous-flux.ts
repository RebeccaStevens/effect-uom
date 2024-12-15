import type * as uom from "uom-types";

import { brandUom } from "../brand.ts";

export { LuminousFluxUnitClass, LuminousFluxUnit, LuminousFluxUnitFrom } from "uom-types";

/**
 * @group Abstract Units
 * @category Photometric
 */
export type LuminousFlux = uom.LuminousFlux;

/**
 * @group Abstract Units
 * @category Photometric
 */
export const LuminousFlux: <V extends LuminousFlux = LuminousFlux>(value: number) => V = brandUom;

/**
 * One Lumen is equal to the amount of light given out through a solid angle by a source of one
 * candela intensity radiating equally in all directions.
 *
 * @group Units
 * @category Derived
 * @symbol `lm`
 */
export type Lumen = uom.Lumen;

/**
 * One Lumen is equal to the amount of light given out through a solid angle by a source of one
 * candela intensity radiating equally in all directions.
 *
 * @group Units
 * @category Derived
 * @symbol `lm`
 */
export const Lumen: (value: number) => Lumen = brandUom;
