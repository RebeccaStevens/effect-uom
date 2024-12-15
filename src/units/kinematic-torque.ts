import type * as uom from "uom-types";

import { brandUom } from "../brand.ts";

export { TorqueUnitClass, TorqueUnit, TorqueUnitFrom } from "uom-types";

/**
 * @group Abstract Units
 * @category Kinematic
 */
export type Torque = uom.Torque;

/**
 * @group Abstract Units
 * @category Kinematic
 */
export const Torque: <V extends Torque = Torque>(value: number) => V = brandUom;

/**
 * A unit of {@link Torque}.
 *
 * @group Units
 * @category Kinematic
 * @symbol `J/rad`
 */
export type JoulePerRadian = uom.JoulePerRadian;

/**
 * A unit of {@link Torque}.
 *
 * @group Units
 * @category Kinematic
 * @symbol `J/rad`
 */
export const JoulePerRadian: (value: number) => JoulePerRadian = brandUom;

/**
 * A unit of {@link Torque}.
 *
 * @group Units
 * @category Kinematic
 * @symbol `N⋅m/rad`
 */
export type NewtonMeterPerRadian = uom.NewtonMeterPerRadian;

/**
 * A unit of {@link Torque}.
 *
 * @group Units
 * @category Kinematic
 * @symbol `N⋅m/rad`
 */
export const NewtonMeterPerRadian: (value: number) => NewtonMeterPerRadian = brandUom;
