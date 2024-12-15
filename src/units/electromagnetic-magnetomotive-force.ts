import type * as uom from "uom-types";

import { brandUom } from "../brand.ts";

export { MagnetomotiveForceUnitClass, MagnetomotiveForceUnit, MagnetomotiveForceUnitFrom } from "uom-types";

/**
 * @group Abstract Units
 * @category Electromagnetic
 */
export type MagnetomotiveForce = uom.MagnetomotiveForce;

/**
 * @group Abstract Units
 * @category Electromagnetic
 */
export const MagnetomotiveForce: <V extends MagnetomotiveForce = MagnetomotiveForce>(value: number) => V = brandUom;

/**
 * A unit of {@link MagnetomotiveForce}.
 *
 * @group Units
 * @category Electromagnetic
 * @symbol `A⋅rad`
 */
export type AmpereRadian = uom.AmpereRadian;

/**
 * A unit of {@link MagnetomotiveForce}.
 *
 * @group Units
 * @category Electromagnetic
 * @symbol `A⋅rad`
 */
export const AmpereRadian: (value: number) => AmpereRadian = brandUom;
