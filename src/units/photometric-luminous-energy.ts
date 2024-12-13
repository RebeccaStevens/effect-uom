import type * as uom from "uom-types";

import { brandUom } from "../brand.ts";

export { LuminousEnergyUnitClass, LuminousEnergyUnit, LuminousEnergyUnitFrom } from "uom-types";

/**
 * @group Abstract Units
 * @category Photometric
 */
export type LuminousEnergy = uom.LuminousEnergy;

/**
 * @group Abstract Units
 * @category Photometric
 */
export const LuminousEnergy: (value: number) => LuminousEnergy = brandUom<LuminousEnergy>;

/**
 * A unit of {@link LuminousEnergy}.
 *
 * @group Units
 * @category Photometric
 * @symbol `lm⋅s`
 */
export type LumenSecond = uom.LumenSecond;

/**
 * A unit of {@link LuminousEnergy}.
 *
 * @group Units
 * @category Photometric
 * @symbol `lm⋅s`
 */
export const LumenSecond: (value: number) => LumenSecond = brandUom<LumenSecond>;
