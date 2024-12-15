import type * as uom from "uom-types";

import { brandUom } from "../brand.ts";

export { MolarConcentrationUnitClass, MolarConcentrationUnit, MolarConcentrationUnitFrom } from "uom-types";

/**
 * @group Abstract Units
 * @category Chemical
 */
export type MolarConcentration = uom.MolarConcentration;

/**
 * @group Abstract Units
 * @category Chemical
 */
export const MolarConcentration: <V extends MolarConcentration = MolarConcentration>(value: number) => V = brandUom;

/**
 * A unit of {@link MolarConcentration}.
 *
 * Equivalent to {@link MolePerCubicMeter}.
 *
 * @group Units
 * @category Chemical
 * @symbol `c`
 */
export type Concentration = uom.Concentration;

/**
 * A unit of {@link MolarConcentration}.
 *
 * Equivalent to {@link MolePerCubicMeter}.
 *
 * @group Units
 * @category Chemical
 * @symbol `c`
 */
export const Concentration: (value: number) => Concentration = brandUom;

/**
 * A unit of {@link MolarConcentration}.
 *
 * Equivalent to {@link Concentration}.
 *
 * @group Units
 * @category Chemical
 * @symbol `mol/m³`
 */
export type MolePerCubicMeter = uom.Concentration;

/**
 * A unit of {@link MolarConcentration}.
 *
 * Equivalent to {@link Concentration}.
 *
 * @group Units
 * @category Chemical
 * @symbol `mol/m³`
 */
export const MolePerCubicMeter: (value: number) => MolePerCubicMeter = brandUom;

/**
 * A unit of {@link MolarConcentration}.
 *
 * @group Units
 * @category Chemical
 * @symbol `mol/l`
 */
export type MolePerLiter = uom.MolePerLiter;

/**
 * A unit of {@link MolarConcentration}.
 *
 * @group Units
 * @category Chemical
 * @symbol `mol/l`
 */
export const MolePerLiter: (value: number) => MolePerLiter = brandUom;
