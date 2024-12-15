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
export const SpecificAngularMomentum: <V extends SpecificAngularMomentum = SpecificAngularMomentum>(
  value: number,
) => V = brandUom;

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
export const JouleSecondPerRadianPerKilogram: (value: number) => JouleSecondPerRadianPerKilogram = brandUom;

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
export const NewtonMeterSecondPerRadianPerKilogram: (value: number) => NewtonMeterSecondPerRadianPerKilogram = brandUom;
