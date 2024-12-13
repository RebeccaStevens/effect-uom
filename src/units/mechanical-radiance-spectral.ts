import type * as uom from "uom-types";

import { brandUom } from "../brand.ts";

export { SpectralRadianceUnitClass, SpectralRadianceUnit, SpectralRadianceUnitFrom } from "uom-types";

/**
 * @group Abstract Units
 * @category Mechanical
 */
export type SpectralRadiance = uom.SpectralRadiance;

/**
 * @group Abstract Units
 * @category Mechanical
 */
export const SpectralRadiance: (value: number) => SpectralRadiance = brandUom<SpectralRadiance>;

/**
 * A unit of {@link SpectralRadiance}.
 *
 * @group Units
 * @category Mechanical
 * @symbol `W/(sr⋅m³)`
 */
export type WattPerSteradianCubicMeter = uom.WattPerSteradianCubicMeter;

/**
 * A unit of {@link SpectralRadiance}.
 *
 * @group Units
 * @category Mechanical
 * @symbol `W/(sr⋅m³)`
 */
export const WattPerSteradianCubicMeter: (value: number) => WattPerSteradianCubicMeter =
  brandUom<WattPerSteradianCubicMeter>;
