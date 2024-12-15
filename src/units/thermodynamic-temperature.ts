import type * as uom from "uom-types";

import { brandUom } from "../brand.ts";

export { TemperatureUnitClass, TemperatureUnit, TemperatureUnitFrom } from "uom-types";

/**
 * @group Abstract Units
 * @category Thermodynamic
 */
export type Temperature = uom.Temperature;

/**
 * @group Abstract Units
 * @category Thermodynamic
 */
export const Temperature: <V extends Temperature = Temperature>(value: number) => V = brandUom;

/**
 * A unit of {@link Temperature}.
 *
 * @group Units
 * @category Base
 * @category Thermodynamic
 * @symbol `K`
 */
export type Kelvin = uom.Kelvin;

/**
 * A unit of {@link Temperature}.
 *
 * @group Units
 * @category Base
 * @category Thermodynamic
 * @symbol `K`
 */
export const Kelvin: (value: number) => Kelvin = brandUom;

/**
 * A unit of {@link Temperature}.
 *
 * This is a unit of temperature such as the freezing point of water (at one atmosphere of pressure)
 * is 0 ℃, while the boiling point is 100 ℃.
 *
 * @group Units
 * @category Thermodynamic
 * @symbol `℃`
 */
export type Celsius = uom.Celsius;

/**
 * A unit of {@link Temperature}.
 *
 * This is a unit of temperature such as the freezing point of water (at one atmosphere of pressure)
 * is 0 ℃, while the boiling point is 100 ℃.
 *
 * @group Units
 * @category Thermodynamic
 * @symbol `℃`
 */
export const Celsius: (value: number) => Celsius = brandUom;
