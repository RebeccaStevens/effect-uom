import type * as uom from "uom-types";

import { brandUom } from "../brand.ts";

export { MassFlowRateUnitClass, MassFlowRateUnit, MassFlowRateUnitFrom } from "uom-types";

/**
 * @group Abstract Units
 * @category Mechanical
 */
export type MassFlowRate = uom.MassFlowRate;

/**
 * @group Abstract Units
 * @category Mechanical
 */
export const MassFlowRate: (value: number) => MassFlowRate = brandUom<MassFlowRate>;

/**
 * A unit of {@link MassFlowRate}.
 *
 * @group Units
 * @category Mechanical
 * @symbol `kg/s`
 */
export type KilogramPerSecond = uom.KilogramPerSecond;

/**
 * A unit of {@link MassFlowRate}.
 *
 * @group Units
 * @category Mechanical
 * @symbol `kg/s`
 */
export const KilogramPerSecond: (value: number) => KilogramPerSecond = brandUom<KilogramPerSecond>;
