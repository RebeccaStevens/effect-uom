import type * as uom from "uom-types";

import { brandUom } from "../brand.ts";

export { EnergyUnitClass, EnergyUnit, EnergyUnitFrom } from "uom-types";

/**
 * @group Abstract Units
 * @category Mechanical
 */
export type Energy = uom.Energy;

/**
 * @group Abstract Units
 * @category Mechanical
 */
export const Energy: (value: number) => Energy = brandUom<Energy>;

/**
 * A unit of {@link Energy}.
 *
 * One joule is the amount of work done when an applied force of 1 newton moves
 * through a distance of 1 meter in the direction of the force.
 *
 * @group Units
 * @category Derived
 * @category Mechanical
 * @symbol `J`
 */
export type Joule = uom.Joule;

/**
 * A unit of {@link Energy}.
 *
 * One joule is the amount of work done when an applied force of 1 newton moves
 * through a distance of 1 meter in the direction of the force.
 *
 * @group Units
 * @category Derived
 * @category Mechanical
 * @symbol `J`
 */
export const Joule: (value: number) => Joule = brandUom<Joule>;

/**
 * A unit of {@link Energy}.
 *
 * @group Units
 * @category Mechanical
 * @symbol `W⋅s`
 */
export type WattSecond = uom.WattSecond;

/**
 * A unit of {@link Energy}.
 *
 * @group Units
 * @category Mechanical
 * @symbol `W⋅s`
 */
export const WattSecond: (value: number) => WattSecond = brandUom<WattSecond>;

/**
 * A unit of {@link Energy}.
 *
 * @group Units
 * @category Mechanical
 * @symbol `W⋅min`
 */
export type WattMinute = uom.WattMinute;

/**
 * A unit of {@link Energy}.
 *
 * @group Units
 * @category Mechanical
 * @symbol `W⋅min`
 */
export const WattMinute: (value: number) => WattMinute = brandUom<WattMinute>;

/**
 * A unit of {@link Energy}.
 *
 * @group Units
 * @category Mechanical
 * @symbol `W⋅hr`
 */
export type WattHour = uom.WattHour;

/**
 * A unit of {@link Energy}.
 *
 * @group Units
 * @category Mechanical
 * @symbol `W⋅hr`
 */
export const WattHour: (value: number) => WattHour = brandUom<WattHour>;
