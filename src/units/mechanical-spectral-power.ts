import type * as uom from "uom-types";

import { brandUom } from "../brand.ts";

export { SpectralPowerUnitClass, SpectralPowerUnit, SpectralPowerUnitFrom } from "uom-types";

/**
 * @group Abstract Units
 * @category Mechanical
 */
export type SpectralPower = uom.SpectralPower;

/**
 * @group Abstract Units
 * @category Mechanical
 */
export const SpectralPower: <V extends SpectralPower = SpectralPower>(value: number) => V = brandUom;

/**
 * A unit of {@link SpectralPower}.
 *
 * @group Units
 * @category Mechanical
 * @symbol `W/m`
 */
export type WattPerMeter = uom.WattPerMeter;

/**
 * A unit of {@link SpectralPower}.
 *
 * @group Units
 * @category Mechanical
 * @symbol `W/m`
 */
export const WattPerMeter: (value: number) => WattPerMeter = brandUom;
