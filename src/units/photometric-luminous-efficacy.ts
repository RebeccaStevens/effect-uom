import type * as uom from "uom-types";

import { brandUom } from "../brand.ts";

export { LuminousEfficacyUnitClass, LuminousEfficacyUnit, LuminousEfficacyUnitFrom } from "uom-types";

/**
 * @group Abstract Units
 * @category Photometric
 */
export type LuminousEfficacy = uom.LuminousEfficacy;

/**
 * @group Abstract Units
 * @category Photometric
 */
export const LuminousEfficacy: <V extends LuminousEfficacy = LuminousEfficacy>(value: number) => V = brandUom;

/**
 * A unit of {@link LuminousEfficacy}.
 *
 * @group Units
 * @category Photometric
 * @symbol `lm/W`
 */
export type LumenPerWatt = uom.LumenPerWatt;

/**
 * A unit of {@link LuminousEfficacy}.
 *
 * @group Units
 * @category Photometric
 * @symbol `lm/W`
 */
export const LumenPerWatt: (value: number) => LumenPerWatt = brandUom;
