import type * as uom from "uom-types";

import { brandUom } from "../brand.ts";

export { AngularVelocityUnitClass, AngularVelocityUnit, AngularVelocityUnitFrom } from "uom-types";

/**
 * @group Abstract Units
 * @category Kinematic
 */
export type AngularVelocity = uom.AngularVelocity;

/**
 * @group Abstract Units
 * @category Kinematic
 */
export const AngularVelocity: <V extends AngularVelocity = AngularVelocity>(value: number) => V = brandUom;

/**
 * A unit of {@link AngularVelocity}.
 *
 * @group Units
 * @category Kinematic
 * @symbol `rad/s`
 */
export type RadianPerSecond = uom.RadianPerSecond;

/**
 * A unit of {@link AngularVelocity}.
 *
 * @group Units
 * @category Kinematic
 * @symbol `rad/s`
 */
export const RadianPerSecond: (value: number) => RadianPerSecond = brandUom;
