import type * as uom from "uom-types";

import { brandUom } from "../brand.ts";

export { PressureUnitClass, PressureUnit, PressureUnitFrom } from "uom-types";

/**
 * @group Abstract Units
 * @category Mechanical
 */
export type Pressure = uom.Pressure;

/**
 * @group Abstract Units
 * @category Mechanical
 */
export const Pressure: <V extends Pressure = Pressure>(value: number) => V = brandUom;

/**
 * A unit of {@link Pressure}.
 *
 * One pascal is equal to one newton per square meter.
 *
 * @group Units
 * @category Derived
 * @category Mechanical
 * @symbol `Pa`
 */
export type Pascal = uom.Pascal;

/**
 * A unit of {@link Pressure}.
 *
 * One pascal is equal to one newton per square meter.
 *
 * @group Units
 * @category Derived
 * @category Mechanical
 * @symbol `Pa`
 */
export const Pascal: (value: number) => Pascal = brandUom;
