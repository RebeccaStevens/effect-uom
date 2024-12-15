import type * as uom from "uom-types";

import { brandUom } from "../brand.ts";

export { KinematicViscosityUnitClass, KinematicViscosityUnit, KinematicViscosityUnitFrom } from "uom-types";

/**
 * @group Abstract Units
 * @category Mechanical
 */
export type KinematicViscosity = uom.KinematicViscosity;

/**
 * @group Abstract Units
 * @category Mechanical
 */
export const KinematicViscosity: <V extends KinematicViscosity = KinematicViscosity>(value: number) => V = brandUom;

/**
 * A unit of {@link KinematicViscosity}.
 *
 * @group Units
 * @category Mechanical
 * @symbol `m²/s`
 */
export type SquareMeterPerSecond = uom.SquareMeterPerSecond;

/**
 * A unit of {@link KinematicViscosity}.
 *
 * @group Units
 * @category Mechanical
 * @symbol `m²/s`
 */
export const SquareMeterPerSecond: (value: number) => SquareMeterPerSecond = brandUom;
