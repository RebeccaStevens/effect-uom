import type * as uom from "uom-types";

import { brandUom } from "../brand.ts";

export { LuminanceUnitClass, LuminanceUnit, LuminanceUnitFrom } from "uom-types";

/**
 * @group Abstract Units
 * @category Photometric
 */
export type Luminance = uom.Luminance;

/**
 * @group Abstract Units
 * @category Photometric
 */
export const Luminance: <V extends Luminance = Luminance>(value: number) => V = brandUom;

/**
 * A unit of {@link Luminance}.
 *
 * @group Units
 * @category Derived
 * @category Photometric
 * @symbol `lx`
 */
export type Lux = uom.Lux;

/**
 * A unit of {@link Luminance}.
 *
 * @group Units
 * @category Derived
 * @category Photometric
 * @symbol `lx`
 */
export const Lux: (value: number) => Lux = brandUom;

/**
 * A unit of {@link Luminance}.
 *
 * @group Units
 * @category Photometric
 * @symbol `cd/m²`
 */
export type CandelaPerSquareMeter = uom.CandelaPerSquareMeter;

/**
 * A unit of {@link Luminance}.
 *
 * @group Units
 * @category Photometric
 * @symbol `cd/m²`
 */
export const CandelaPerSquareMeter: (value: number) => CandelaPerSquareMeter = brandUom;
