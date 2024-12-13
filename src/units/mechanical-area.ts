import type * as uom from "uom-types";

import { brandUom } from "../brand.ts";

export { AreaUnitClass, AreaUnit, AreaUnitFrom } from "uom-types";

/**
 * @group Abstract Units
 * @category Mechanical
 */
export type Area = uom.Area;

/**
 * @group Abstract Units
 * @category Mechanical
 */
export const Area: (value: number) => Area = brandUom<Area>;

/**
 * A unit of {@link Area} equal to 100 {@link Square}<{@link Meter}>.
 *
 * @group Units
 * @category Mechanical
 * @symbol `a`
 */
export type Are = uom.Are;

/**
 * A unit of {@link Area} equal to 100 {@link Square}<{@link Meter}>.
 *
 * @group Units
 * @category Mechanical
 * @symbol `a`
 */
export const Are: (value: number) => Are = brandUom<Are>;

/**
 * A unit of {@link Area} equal to 10,000 {@link Square}<{@link Meter}>.
 *
 * @group Units
 * @category Mechanical
 * @symbol `ha`
 */
export type Hectare = uom.Hectare;

/**
 * A unit of {@link Area} equal to 10,000 {@link Square}<{@link Meter}>.
 *
 * @group Units
 * @category Mechanical
 * @symbol `ha`
 */
export const Hectare: (value: number) => Hectare = brandUom<Hectare>;
