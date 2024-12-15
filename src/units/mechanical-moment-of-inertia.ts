import type * as uom from "uom-types";

import { brandUom } from "../brand.ts";

export { MomentOfInertiaUnitClass, MomentOfInertiaUnit, MomentOfInertiaUnitFrom } from "uom-types";

/**
 * @group Abstract Units
 * @category Mechanical
 */
export type MomentOfInertia = uom.MomentOfInertia;

/**
 * @group Abstract Units
 * @category Mechanical
 */
export const MomentOfInertia: <V extends MomentOfInertia = MomentOfInertia>(value: number) => V = brandUom;

/**
 * A unit of {@link MomentOfInertia}.
 *
 * @group Units
 * @category Mechanical
 * @symbol `kg⋅m²/sr`
 */
export type KilogramSquareMeterPerSteradian = uom.KilogramSquareMeterPerSteradian;

/**
 * A unit of {@link MomentOfInertia}.
 *
 * @group Units
 * @category Mechanical
 * @symbol `kg⋅m²/sr`
 */
export const KilogramSquareMeterPerSteradian: (value: number) => KilogramSquareMeterPerSteradian = brandUom;
