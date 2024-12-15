import type * as uom from "uom-types";

import { brandUom } from "../brand.ts";

export { CatalyticActivityUnitClass, CatalyticActivityUnit, CatalyticActivityUnitFrom } from "uom-types";

/**
 * @group Abstract Units
 * @category Chemical
 */
export type CatalyticActivity = uom.CatalyticActivity;

/**
 * @group Abstract Units
 * @category Chemical
 */
export const CatalyticActivity: <V extends CatalyticActivity = CatalyticActivity>(value: number) => V = brandUom;

/**
 * A unit of {@link CatalyticActivity}.
 *
 * @group Units
 * @category Derived
 * @category Chemical
 * @symbol `kat`
 */
export type Katal = uom.Katal;

/**
 * A unit of {@link CatalyticActivity}.
 *
 * @group Units
 * @category Derived
 * @category Chemical
 * @symbol `kat`
 */
export const Katal: (value: number) => Katal = brandUom;
