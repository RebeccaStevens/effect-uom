import type * as uom from "uom-types";

import { brandUom } from "../brand.ts";

export { AngularMomentumUnitClass, AngularMomentumUnit, AngularMomentumUnitFrom } from "uom-types";

/**
 * @group Abstract Units
 * @category Kinematic
 */
export type AngularMomentum = uom.AngularMomentum;

/**
 * @group Abstract Units
 * @category Kinematic
 */
export const AngularMomentum: (value: number) => AngularMomentum = brandUom<AngularMomentum>;

/**
 * A unit of {@link AngularMomentum}.
 *
 * @group Units
 * @category Kinematic
 * @symbol `J⋅s/rad`
 */
export type JouleSecondPerRadian = uom.JouleSecondPerRadian;

/**
 * A unit of {@link AngularMomentum}.
 *
 * @group Units
 * @category Kinematic
 * @symbol `J⋅s/rad`
 */
export const JouleSecondPerRadian: (value: number) => JouleSecondPerRadian = brandUom<JouleSecondPerRadian>;
