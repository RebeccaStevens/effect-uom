import type * as uom from "uom-types";

import { brandUom } from "../brand.ts";

export { DensityUnitClass, DensityUnit, DensityUnitFrom } from "uom-types";

/**
 * @group Abstract Units
 * @category Mechanical
 */
export type Density = uom.Density;

/**
 * @group Abstract Units
 * @category Mechanical
 */
export const Density: (value: number) => Density = brandUom<Density>;

/**
 * A unit of {@link Density}.
 *
 * @group Units
 * @category Mechanical
 * @symbol `kg/m³`
 */
export type KilogramPerCubicMeter = uom.KilogramPerCubicMeter;

/**
 * A unit of {@link Density}.
 *
 * @group Units
 * @category Mechanical
 * @symbol `kg/m³`
 */
export const KilogramPerCubicMeter: (value: number) => KilogramPerCubicMeter = brandUom<KilogramPerCubicMeter>;
