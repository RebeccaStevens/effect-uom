import type * as uom from "uom-types";

import { brandUom } from "../brand.ts";

export { FrequencyUnitClass, FrequencyUnit, FrequencyUnitFrom } from "uom-types";

/**
 * @group Abstract Units
 * @category Kinematic
 */
export type Frequency = uom.Frequency;

/**
 * @group Abstract Units
 * @category Kinematic
 */
export const Frequency: <V extends Frequency = Frequency>(value: number) => V = brandUom;

/**
 * A unit of {@link Frequency}.
 *
 * One hertz is equal to one cycle per second.
 *
 * @group Units
 * @category Derived
 * @category Kinematic
 * @symbol `Hz`
 */
export type Hertz = uom.Hertz;

/**
 * A unit of {@link Frequency}.
 *
 * One hertz is equal to one cycle per second.
 *
 * @group Units
 * @category Derived
 * @category Kinematic
 * @symbol `Hz`
 */
export const Hertz: (value: number) => Hertz = brandUom;

/**
 * A unit of {@link Frequency}.
 *
 * @group Units
 * @category Kinematic
 * @symbol `s⁻¹`
 */
export type PerSecond = uom.PerSecond;

/**
 * A unit of {@link Frequency}.
 *
 * @group Units
 * @category Kinematic
 * @symbol `s⁻¹`
 */
export const PerSecond: (value: number) => PerSecond = brandUom;

/**
 * A unit of {@link Frequency}.
 *
 * @group Units
 * @category Kinematic
 * @symbol `min⁻¹`
 */
export type PerMinute = uom.PerMinute;

/**
 * A unit of {@link Frequency}.
 *
 * @group Units
 * @category Kinematic
 * @symbol `min⁻¹`
 */
export const PerMinute: (value: number) => PerMinute = brandUom;

/**
 * A unit of {@link Frequency}.
 *
 * @group Units
 * @category Kinematic
 * @symbol `hr⁻¹`
 */
export type PerHour = uom.PerHour;

/**
 * A unit of {@link Frequency}.
 *
 * @group Units
 * @category Kinematic
 * @symbol `hr⁻¹`
 */
export const PerHour: (value: number) => PerHour = brandUom;

/**
 * A unit of {@link Frequency}.
 *
 * @group Units
 * @category Kinematic
 * @symbol `day⁻¹`
 */
export type PerDay = uom.PerDay;

/**
 * A unit of {@link Frequency}.
 *
 * @group Units
 * @category Kinematic
 * @symbol `day⁻¹`
 */
export const PerDay: (value: number) => PerDay = brandUom;

/**
 * A unit of {@link Frequency}.
 *
 * @group Units
 * @category Kinematic
 * @symbol `wk⁻¹`
 */
export type PerWeek = uom.PerWeek;

/**
 * A unit of {@link Frequency}.
 *
 * @group Units
 * @category Kinematic
 * @symbol `wk⁻¹`
 */
export const PerWeek: (value: number) => PerWeek = brandUom;

/**
 * A unit of {@link Frequency}.
 *
 * @group Units
 * @category Kinematic
 * @symbol `yr⁻¹`
 */
export type PerYear = uom.PerYear;

/**
 * A unit of {@link Frequency}.
 *
 * @group Units
 * @category Kinematic
 * @symbol `yr⁻¹`
 */
export const PerYear: (value: number) => PerYear = brandUom;
