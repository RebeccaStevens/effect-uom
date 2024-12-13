import type * as uom from "uom-types";

import { brandUom } from "../brand.ts";

export { SurfaceDensityUnitClass, SurfaceDensityUnit, SurfaceDensityUnitFrom } from "uom-types";

/**
 * @group Abstract Units
 * @category Mechanical
 */
export type SurfaceDensity = uom.SurfaceDensity;

/**
 * @group Abstract Units
 * @category Mechanical
 */
export const SurfaceDensity: (value: number) => SurfaceDensity = brandUom<SurfaceDensity>;

/**
 * A unit of {@link SurfaceDensity}.
 *
 * @group Units
 * @category Mechanical
 * @symbol `kg/m²`
 */
export type KilogramPerSquareMeter = uom.KilogramPerSquareMeter;

/**
 * A unit of {@link SurfaceDensity}.
 *
 * @group Units
 * @category Mechanical
 * @symbol `kg/m²`
 */
export const KilogramPerSquareMeter: (value: number) => KilogramPerSquareMeter = brandUom<KilogramPerSquareMeter>;
