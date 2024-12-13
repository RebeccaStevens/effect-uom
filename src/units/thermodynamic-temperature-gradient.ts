import type * as uom from "uom-types";

import { brandUom } from "../brand.ts";

export { TemperatureGradientUnitClass, TemperatureGradientUnit, TemperatureGradientUnitFrom } from "uom-types";

/**
 * @group Abstract Units
 * @category Thermodynamic
 */
export type TemperatureGradient = uom.TemperatureGradient;

/**
 * @group Abstract Units
 * @category Thermodynamic
 */
export const TemperatureGradient: (value: number) => TemperatureGradient = brandUom<TemperatureGradient>;

/**
 * A unit of {@link TemperatureGradient}.
 *
 * @group Units
 * @category Thermodynamic
 * @symbol `K/m`
 */
export type KelvinPerMeter = uom.KelvinPerMeter;

/**
 * A unit of {@link TemperatureGradient}.
 *
 * @group Units
 * @category Thermodynamic
 * @symbol `K/m`
 */
export const KelvinPerMeter: (value: number) => KelvinPerMeter = brandUom<KelvinPerMeter>;
