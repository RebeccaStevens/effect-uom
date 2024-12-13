import type * as uom from "uom-types";

import { brandUom } from "../brand.ts";

export { StiffnessUnitClass, StiffnessUnit, StiffnessUnitFrom } from "uom-types";

/**
 * @group Abstract Units
 * @category Mechanical
 */
export type Stiffness = uom.Stiffness;

/**
 * @group Abstract Units
 * @category Mechanical
 */
export const Stiffness: (value: number) => Stiffness = brandUom<Stiffness>;

/**
 * A unit of {@link Stiffness}.
 *
 * @group Units
 * @category Mechanical
 * @symbol `N/m`
 */
export type NewtonPerMeter = uom.NewtonPerMeter;

/**
 * A unit of {@link Stiffness}.
 *
 * @group Units
 * @category Mechanical
 * @symbol `N/m`
 */
export const NewtonPerMeter: (value: number) => NewtonPerMeter = brandUom<NewtonPerMeter>;
