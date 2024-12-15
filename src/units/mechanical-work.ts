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
export const Work: <V extends Work = Work>(value: number) => V = brandUom;

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
export const NewtonMeter: (value: number) => NewtonMeter = brandUom;
