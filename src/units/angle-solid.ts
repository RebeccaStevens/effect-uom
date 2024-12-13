import type * as uom from "uom-types";

import { brandUom } from "../brand.ts";

export { SolidAngleUnitClass, SolidAngleUnit, SolidAngleUnitFrom } from "uom-types";

/**
 * @group Abstract Units
 * @category Angle (Solid)
 */
export type SolidAngle = uom.SolidAngle;

/**
 * @group Abstract Units
 * @category Angle (Solid)
 */
export const SolidAngle: (value: number) => SolidAngle = brandUom<SolidAngle>;

/**
 * A unit of {@link SolidAngle}.
 *
 * One steradian is the solid angle of a sphere subtended by a portion of the
 * surface whose area is equal to the square of the sphere's radius.
 * The total solid angle about a point is equal to 4π steradian.
 *
 * @group Units
 * @category Derived
 * @category Angle (Solid)
 * @symbol `sr`
 */
export type Steradian = uom.Steradian;

/**
 * A unit of {@link SolidAngle}.
 *
 * One steradian is the solid angle of a sphere subtended by a portion of the
 * surface whose area is equal to the square of the sphere's radius.
 * The total solid angle about a point is equal to 4π steradian.
 *
 * @group Units
 * @category Derived
 * @category Angle (Solid)
 * @symbol `sr`
 */
export const Steradian: (value: number) => Steradian = brandUom<Steradian>;
