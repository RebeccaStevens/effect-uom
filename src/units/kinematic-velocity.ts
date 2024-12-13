import type * as uom from "uom-types";

import { brandUom } from "../brand.ts";

export { VelocityUnitClass, VelocityUnit, VelocityUnitFrom } from "uom-types";

/**
 * @group Abstract Units
 * @category Kinematic
 */
export type Velocity = uom.Velocity;

/**
 * @group Abstract Units
 * @category Kinematic
 */
export const Velocity: (value: number) => Velocity = brandUom<Velocity>;

/**
 * A unit of {@link Velocity}.
 *
 * @group Units
 * @category Kinematic
 * @symbol `m/s`
 */
export type MeterPerSecond = uom.MeterPerSecond;

/**
 * A unit of {@link Velocity}.
 *
 * @group Units
 * @category Kinematic
 * @symbol `m/s`
 */
export const MeterPerSecond: (value: number) => MeterPerSecond = brandUom<MeterPerSecond>;
