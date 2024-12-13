import type * as uom from "uom-types";

import { brandUom } from "../brand.ts";

export { ThermalResistanceUnitClass, ThermalResistanceUnit, ThermalResistanceUnitFrom } from "uom-types";

/**
 * @group Abstract Units
 * @category Thermodynamic
 */
export type ThermalResistance = uom.ThermalResistance;

/**
 * @group Abstract Units
 * @category Thermodynamic
 */
export const ThermalResistance: (value: number) => ThermalResistance = brandUom<ThermalResistance>;

/**
 * A unit of {@link ThermalResistance}.
 *
 * @group Units
 * @category Thermodynamic
 * @symbol `K/W`
 */
export type KelvinPerWatt = uom.KelvinPerWatt;

/**
 * A unit of {@link ThermalResistance}.
 *
 * @group Units
 * @category Thermodynamic
 * @symbol `K/W`
 */
export const KelvinPerWatt: (value: number) => KelvinPerWatt = brandUom<KelvinPerWatt>;
