import type * as uom from "uom-types";

import { brandUom } from "../brand.ts";

export {
  SpecificAngularMomentumUnitClass,
  SpecificAngularMomentumUnit,
  SpecificAngularMomentumUnitFrom,
} from "uom-types";

/**
 * @group Abstract Units
 * @category Mechanical
 */
export type SpecificAngularMomentum = uom.SpecificAngularMomentum;

/**
 * @group Abstract Units
 * @category Mechanical
 */
export const SpecificAngularMomentum: (value: number) => SpecificAngularMomentum = brandUom<SpecificAngularMomentum>;

/**
 * A unit of {@link SpecificAngularMomentum}.
 *
 * @group Units
 * @category Mechanical
 * @symbol `J⋅s/rad/kg`
 */
export type JouleSecondPerRadianPerKilogram = uom.JouleSecondPerRadianPerKilogram;

/**
 * A unit of {@link SpecificAngularMomentum}.
 *
 * @group Units
 * @category Mechanical
 * @symbol `J⋅s/rad/kg`
 */
export const JouleSecondPerRadianPerKilogram: (value: number) => JouleSecondPerRadianPerKilogram =
  brandUom<JouleSecondPerRadianPerKilogram>;

/**
 * A unit of {@link SpecificAngularMomentum}.
 *
 * @group Units
 * @category Mechanical
 * @symbol `N⋅m⋅s/rad/kg`
 */
export type NewtonMeterSecondPerRadianPerKilogram = uom.NewtonMeterSecondPerRadianPerKilogram;

/**
 * A unit of {@link SpecificAngularMomentum}.
 *
 * @group Units
 * @category Mechanical
 * @symbol `N⋅m⋅s/rad/kg`
 */
export const NewtonMeterSecondPerRadianPerKilogram: (value: number) => NewtonMeterSecondPerRadianPerKilogram =
  brandUom<NewtonMeterSecondPerRadianPerKilogram>;
