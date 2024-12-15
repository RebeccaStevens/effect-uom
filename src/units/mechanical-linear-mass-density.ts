import type * as uom from "uom-types";

import { brandUom } from "../brand.ts";

export { LinearMassDensityUnitClass, LinearMassDensityUnit, LinearMassDensityUnitFrom } from "uom-types";

/**
 * @group Abstract Units
 * @category Mechanical
 */
export type LinearMassDensity = uom.LinearMassDensity;

/**
 * @group Abstract Units
 * @category Mechanical
 */
export const LinearMassDensity: <V extends LinearMassDensity = LinearMassDensity>(value: number) => V = brandUom;

/**
 * A unit of {@link LinearMassDensity}.
 *
 * @group Units
 * @category Mechanical
 * @symbol `kg/m`
 */
export type KilogramPerMeter = uom.KilogramPerMeter;

/**
 * A unit of {@link LinearMassDensity}.
 *
 * @group Units
 * @category Mechanical
 * @symbol `kg/m`
 */
export const KilogramPerMeter: (value: number) => KilogramPerMeter = brandUom;
