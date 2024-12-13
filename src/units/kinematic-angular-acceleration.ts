import type * as uom from "uom-types";

import { brandUom } from "../brand.ts";

export { AngularAccelerationUnitClass, AngularAccelerationUnit, AngularAccelerationUnitFrom } from "uom-types";

/**
 * @group Abstract Units
 * @category Kinematic
 */
export type AngularAcceleration = uom.AngularAcceleration;

/**
 * @group Abstract Units
 * @category Kinematic
 */
export const AngularAcceleration: (value: number) => AngularAcceleration = brandUom<AngularAcceleration>;

/**
 * A unit of {@link AngularAcceleration}.
 *
 * @group Units
 * @category Kinematic
 * @symbol `rad/s²`
 */
export type RadianPerSecondSquared = uom.RadianPerSecondSquared;

/**
 * A unit of {@link AngularAcceleration}.
 *
 * @group Units
 * @category Kinematic
 * @symbol `rad/s²`
 */
export const RadianPerSecondSquared: (value: number) => RadianPerSecondSquared = brandUom<RadianPerSecondSquared>;
