import type * as uom from "uom-types";

import { brandUom } from "../brand.ts";

export { SpectralIrradianceUnitClass, SpectralIrradianceUnit, SpectralIrradianceUnitFrom } from "uom-types";

/**
 * @group Abstract Units
 * @category Mechanical
 */
export type SpectralIrradiance = uom.SpectralIrradiance;

/**
 * @group Abstract Units
 * @category Mechanical
 */
export const SpectralIrradiance: (value: number) => SpectralIrradiance = brandUom<SpectralIrradiance>;

/**
 * A unit of {@link SpectralIrradiance}.
 *
 * @group Units
 * @category Mechanical
 * @symbol `W/m³`
 */
export type WattPerCubicMeter = uom.WattPerCubicMeter;

/**
 * A unit of {@link SpectralIrradiance}.
 *
 * @group Units
 * @category Mechanical
 * @symbol `W/m³`
 */
export const WattPerCubicMeter: (value: number) => WattPerCubicMeter = brandUom<WattPerCubicMeter>;
