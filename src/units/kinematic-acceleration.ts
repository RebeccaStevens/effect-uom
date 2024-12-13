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
export const Acceleration: (value: number) => Acceleration = brandUom<Acceleration>;

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
export const MeterPerSecondSquared: (value: number) => MeterPerSecondSquared = brandUom<MeterPerSecondSquared>;
