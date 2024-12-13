import type * as uom from "uom-types";

import { brandUom } from "../brand.ts";

export { DynamicViscosityUnitClass, DynamicViscosityUnit, DynamicViscosityUnitFrom } from "uom-types";

/**
 * @group Abstract Units
 * @category Mechanical
 */
export type DynamicViscosity = uom.DynamicViscosity;

/**
 * @group Abstract Units
 * @category Mechanical
 */
export const DynamicViscosity: (value: number) => DynamicViscosity = brandUom<DynamicViscosity>;

/**
 * A unit of {@link DynamicViscosity}.
 *
 * @group Units
 * @category Mechanical
 * @symbol `Pa⋅s`
 */
export type PascalSecond = uom.PascalSecond;

/**
 * A unit of {@link DynamicViscosity}.
 *
 * @group Units
 * @category Mechanical
 * @symbol `Pa⋅s`
 */
export const PascalSecond: (value: number) => PascalSecond = brandUom<PascalSecond>;
