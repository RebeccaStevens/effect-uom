import type * as uom from "uom-types";

import { brandUom } from "../brand.ts";

export { ActionUnitClass, ActionUnit, ActionUnitFrom } from "uom-types";

/**
 * @group Abstract Units
 * @category Mechanical
 */
export type Action = uom.Action;

/**
 * @group Abstract Units
 * @category Mechanical
 */
export const Action: (value: number) => Action = brandUom<Action>;

/**
 * A unit of {@link Action}.
 *
 * @group Units
 * @category Mechanical
 * @symbol `Js`
 */
export type JouleSecond = uom.JouleSecond;

/**
 * A unit of {@link Action}.
 *
 * @group Units
 * @category Mechanical
 * @symbol `Js`
 */
export const JouleSecond: (value: number) => JouleSecond = brandUom<JouleSecond>;
