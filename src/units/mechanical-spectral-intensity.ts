import type * as uom from "uom-types";

import { brandUom } from "../brand.ts";

export { SpectralIntensityUnitClass, SpectralIntensityUnit, SpectralIntensityUnitFrom } from "uom-types";

/**
 * @group Abstract Units
 * @category Mechanical
 */
export type SpectralIntensity = uom.SpectralIntensity;

/**
 * @group Abstract Units
 * @category Mechanical
 */
export const SpectralIntensity: (value: number) => SpectralIntensity = brandUom<SpectralIntensity>;

/**
 * A unit of {@link SpectralIntensity}.
 *
 * @group Units
 * @category Mechanical
 * @symbol `W/(sr⋅m)`
 */
export type WattPerSteradianMeter = uom.WattPerSteradianMeter;

/**
 * A unit of {@link SpectralIntensity}.
 *
 * @group Units
 * @category Mechanical
 * @symbol `W/(sr⋅m)`
 */
export const WattPerSteradianMeter: (value: number) => WattPerSteradianMeter = brandUom<WattPerSteradianMeter>;
