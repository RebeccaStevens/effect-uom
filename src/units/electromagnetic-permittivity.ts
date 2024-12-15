import type * as uom from "uom-types";

import { brandUom } from "../brand.ts";

export { PermittivityUnitClass, PermittivityUnit, PermittivityUnitFrom } from "uom-types";

/**
 * @group Abstract Units
 * @category Electromagnetic
 */
export type Permittivity = uom.Permittivity;

/**
 * @group Abstract Units
 * @category Electromagnetic
 */
export const Permittivity: <V extends Permittivity = Permittivity>(value: number) => V = brandUom;

/**
 * A unit of {@link Permittivity}.
 *
 * @group Units
 * @category Electromagnetic
 * @symbol `F/m`
 */
export type FaradPerMeter = uom.FaradPerMeter;

/**
 * A unit of {@link Permittivity}.
 *
 * @group Units
 * @category Electromagnetic
 * @symbol `F/m`
 */
export const FaradPerMeter: (value: number) => FaradPerMeter = brandUom;
