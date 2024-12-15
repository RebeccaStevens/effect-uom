import type * as uom from "uom-types";

import { brandUom } from "../brand.ts";

export { YankUnitClass, YankUnit, YankUnitFrom } from "uom-types";

/**
 * @group Unit Classes
 * @category Mechanical
 */
export type Yank = uom.Yank;

/**
 * @group Unit Classes
 * @category Mechanical
 */
export const Yank: (value: number) => Yank = brandUom;

/**
 * A unit of {@link Yank}.
 *
 * @group Units
 * @category Mechanical
 * @symbol `N/s`
 */
export type NewtonPerSecond = uom.NewtonPerSecond;

/**
 * A unit of {@link Yank}.
 *
 * @group Units
 * @category Mechanical
 * @symbol `N/s`
 */
export const NewtonPerSecond: (value: number) => NewtonPerSecond = brandUom;
