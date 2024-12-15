import type * as uom from "uom-types";

import { brandUom } from "../brand.ts";

export { RadianceUnitClass, RadianceUnit, RadianceUnitFrom } from "uom-types";

/**
 * @group Abstract Units
 * @category Mechanical
 */
export type Radiance = uom.Radiance;

/**
 * @group Abstract Units
 * @category Mechanical
 */
export const Radiance: <V extends Radiance = Radiance>(value: number) => V = brandUom;

/**
 * A unit of {@link Radiance}.
 *
 * @group Units
 * @category Mechanical
 * @symbol `W/(sr⋅m²)`
 */
export type WattPerSteradianSquareMeter = uom.WattPerSteradianSquareMeter;

/**
 * A unit of {@link Radiance}.
 *
 * @group Units
 * @category Mechanical
 * @symbol `W/(sr⋅m²)`
 */
export const WattPerSteradianSquareMeter: (value: number) => WattPerSteradianSquareMeter = brandUom;
