import type * as uom from "uom-types";

import { brandUom } from "../brand.ts";

export { LengthUnitClass, LengthUnit, LengthUnitFrom } from "uom-types";

/**
 * @group Abstract Units
 * @category Mechanical
 */
export type Length = uom.Length;

/**
 * @group Abstract Units
 * @category Mechanical
 */
export const Length: (value: number) => Length = brandUom<Length>;

/**
 * A unit of {@link Length}.
 *
 * @group Units
 * @category Base
 * @category Mechanical
 * @symbol `m`
 */
export type Meter = uom.Meter;

/**
 * A unit of {@link Length}.
 *
 * @group Units
 * @category Base
 * @category Mechanical
 * @symbol `m`
 */
export const Meter: (value: number) => Meter = brandUom<Meter>;
