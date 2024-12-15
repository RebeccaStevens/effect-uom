import type * as uom from "uom-types";

import { brandUom } from "../brand.ts";

export { CompressibilityUnitClass, CompressibilityUnit, CompressibilityUnitFrom } from "uom-types";

/**
 * @group Abstract Units
 * @category Mechanical
 */
export type Compressibility = uom.Compressibility;

/**
 * @group Abstract Units
 * @category Mechanical
 */
export const Compressibility: <V extends Compressibility = Compressibility>(value: number) => V = brandUom;
