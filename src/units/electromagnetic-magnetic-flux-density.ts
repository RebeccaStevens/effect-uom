import type * as uom from "uom-types";

import { brandUom } from "../brand.ts";

export { MagneticFluxDensityUnitClass, MagneticFluxDensityUnit, MagneticFluxDensityUnitFrom } from "uom-types";

/**
 * @group Abstract Units
 * @category Electromagnetic
 */
export type MagneticFluxDensity = uom.MagneticFluxDensity;

/**
 * @group Abstract Units
 * @category Electromagnetic
 */
export const MagneticFluxDensity: <V extends MagneticFluxDensity = MagneticFluxDensity>(value: number) => V = brandUom;

/**
 * A unit of {@link MagneticFluxDensity}.
 *
 * One Tesla is equal equal to one weber per square meter.
 *
 * @group Units
 * @category Derived
 * @symbol `T`
 */
export type Tesla = uom.Tesla;

/**
 * A unit of {@link MagneticFluxDensity}.
 *
 * One Tesla is equal equal to one weber per square meter.
 *
 * @group Units
 * @category Derived
 * @symbol `T`
 */
export const Tesla: (value: number) => Tesla = brandUom;
