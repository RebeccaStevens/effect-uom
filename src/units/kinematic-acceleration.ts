import type * as uom from "uom-types";

import { brandUom } from "../brand.ts";

export { AccelerationUnitClass, AccelerationUnit, AccelerationUnitFrom } from "uom-types";

/**
 * @group Abstract Units
 * @category Kinematic
 */
export type Acceleration = uom.Acceleration;

/**
 * @group Abstract Units
 * @category Kinematic
 */
export const Acceleration: <V extends Acceleration = Acceleration>(value: number) => V = brandUom;

/**
 * A unit of {@link Acceleration}.
 *
 * @group Units
 * @category Kinematic
 * @symbol `m/s²`
 */
export type MeterPerSecondSquared = uom.MeterPerSecondSquared;

/**
 * A unit of {@link Acceleration}.
 *
 * @group Units
 * @category Kinematic
 * @symbol `m/s²`
 */
export const MeterPerSecondSquared: (value: number) => MeterPerSecondSquared = brandUom;
