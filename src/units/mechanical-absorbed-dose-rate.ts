import type * as uom from "uom-types";

import { brandUom } from "../brand.ts";

export { AbsorbedDoseRateUnitClass, AbsorbedDoseRateUnit, AbsorbedDoseRateUnitFrom } from "uom-types";

/**
 * @group Abstract Units
 * @category Mechanical
 */
export type AbsorbedDoseRate = uom.AbsorbedDoseRate;

/**
 * @group Abstract Units
 * @category Mechanical
 */
export const AbsorbedDoseRate: (value: number) => AbsorbedDoseRate = brandUom<AbsorbedDoseRate>;

/**
 * A unit of {@link AbsorbedDoseRate}.
 *
 * @group Units
 * @category Mechanical
 * @symbol `Gy/s`
 */
export type GrayPerSecond = uom.GrayPerSecond;

/**
 * A unit of {@link AbsorbedDoseRate}.
 *
 * @group Units
 * @category Mechanical
 * @symbol `Gy/s`
 */
export const GrayPerSecond: (value: number) => GrayPerSecond = brandUom<GrayPerSecond>;
