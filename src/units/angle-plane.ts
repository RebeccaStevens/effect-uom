import type * as uom from "uom-types";

import { brandUom } from "../brand.ts";

export { PlaneAngleUnitClass, PlaneAngleUnit, PlaneAngleUnitFrom } from "uom-types";

/**
 * @group Abstract Units
 * @category Angle (Plane)
 */
export type PlaneAngle = uom.PlaneAngle;

/**
 * @group Abstract Units
 * @category Angle (Plane)
 */
export const PlaneAngle: (value: number) => PlaneAngle = brandUom<PlaneAngle>;

/**
 * A unit of {@link PlaneAngle}.
 *
 * One radian is equal to the angle subtended at the centre of a circle by an
 * arc equal in length to the radius.
 * The total plane angle about a point is 2π radian.
 *
 * @group Units
 * @category Base
 * @category Angle (Plane)
 * @symbol `rad`
 */
export type Radian = uom.Radian;

/**
 * A unit of {@link PlaneAngle}.
 *
 * One radian is equal to the angle subtended at the centre of a circle by an
 * arc equal in length to the radius.
 * The total plane angle about a point is 2π radian.
 *
 * @group Units
 * @category Base
 * @category Angle (Plane)
 * @symbol `rad`
 */
export const Radian: (value: number) => Radian = brandUom<Radian>;

/**
 * A unit of {@link PlaneAngle}.
 *
 * The total plane angle of a circle is 360 degrees.
 *
 * @group Units
 * @category Angle (Plane)
 * @symbol `°`
 */
export type Degree = uom.Degree;

/**
 * A unit of {@link PlaneAngle}.
 *
 * The total plane angle of a circle is 360 degrees.
 *
 * @group Units
 * @category Angle (Plane)
 * @symbol `°`
 */
export const Degree: (value: number) => Degree = brandUom<Degree>;

/**
 * A unit of {@link PlaneAngle}.
 *
 * One gradian is equal to 100th of a right angle.
 * The total plane angle about a point is 400 gradian.
 *
 * @group Units
 * @category Angle (Plane)
 * @symbol `gon`
 */
export type Gradian = uom.Gradian;

/**
 * A unit of {@link PlaneAngle}.
 *
 * One gradian is equal to 100th of a right angle.
 * The total plane angle about a point is 400 gradian.
 *
 * @group Units
 * @category Angle (Plane)
 * @symbol `gon`
 */
export const Gradian: (value: number) => Gradian = brandUom<Gradian>;

/**
 * A unit of {@link PlaneAngle}.
 *
 * One turn is equal to 1 full rotation about a point.
 *
 * @group Units
 * @category Angle (Plane)
 * @symbol `tr`
 */
export type Turn = uom.Turn;

/**
 * A unit of {@link PlaneAngle}.
 *
 * One turn is equal to 1 full rotation about a point.
 *
 * @group Units
 * @category Angle (Plane)
 * @symbol `tr`
 */
export const Turn: (value: number) => Turn = brandUom<Turn>;
