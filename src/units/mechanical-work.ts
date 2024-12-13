import type * as uom from "uom-types";

import { brandUom } from "../brand.ts";

export { WorkUnitClass, WorkUnit, WorkUnitFrom } from "uom-types";

/**
 * @group Abstract Units
 * @category Mechanical
 */
export type Work = uom.Work;

/**
 * @group Abstract Units
 * @category Mechanical
 */
export const Work: (value: number) => Work = brandUom<Work>;

/**
 * A unit of {@link Work}.
 *
 * @group Units
 * @category Mechanical
 * @symbol `N⋅m`
 */
export type NewtonMeter = uom.NewtonMeter;

/**
 * A unit of {@link Work}.
 *
 * @group Units
 * @category Mechanical
 * @symbol `N⋅m`
 */
export const NewtonMeter: (value: number) => NewtonMeter = brandUom<NewtonMeter>;
